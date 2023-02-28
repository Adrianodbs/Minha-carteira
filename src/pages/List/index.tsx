import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import * as C from './styles'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import listOfMonths from '../../utils/months'

import { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

interface IData {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

function List() {
  const [data, setData] = useState<IData[]>([])

  const [selectedFrequency, setSelectedFrequency] = useState([
    'recorrente',
    'eventual'
  ])

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  )
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  )

  const { type } = useParams()

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  }, [type])

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
  }, [type])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, [listData])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      )
    })

    const formattedData = filteredData.map(item => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
      }
    })

    setData(formattedData)
  }, [listData, monthSelected, yearSelected, data.length, selectedFrequency])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      item => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency(prev => [...prev, frequency])
    }
  }

  return (
    <C.Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          options={months}
          onChange={e => setMonthSelected(e.target.value)}
          defaltValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={e => setYearSelected(e.target.value)}
          defaltValue={yearSelected}
        />
      </ContentHeader>

      <C.Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            selectedFrequency.includes('recorrente') && 'tag-actived'
          }`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            selectedFrequency.includes('eventual') && 'tag-actived'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </C.Filters>

      <C.Content>
        {data.map(item => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </C.Content>
    </C.Container>
  )
}

export default List
