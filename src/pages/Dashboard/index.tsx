import { useState, useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import * as C from './styles'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

function Dashboard() {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    ;[...expenses, ...gains].forEach(item => {
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
  }, [])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      console.log(error)
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <C.Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          onChange={e => handleMonthSelected(e.target.value)}
          defaltValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={e => handleYearSelected(e.target.value)}
          defaltValue={yearSelected}
        />
      </ContentHeader>
    </C.Container>
  )
}

export default Dashboard
