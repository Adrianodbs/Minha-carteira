import { useState, useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'

import * as C from './styles'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'
import PieChartBox from '../../components/PieChart'
import HistoryBox from '../../components/HistoryBox'

function Dashboard() {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )

  const totalExpenses = useMemo(() => {
    let total: number = 0

    expenses.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })

    return total
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    let total: number = 0

    gains.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })

    return total
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalExpenses, totalGains])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste',
        description: 'Neste mês você gastou mais do que deveria!',
        footerText:
          'Verifique os seus gastos e tente cortar algumas coisa desnecessárias.',
        icon: sadImg
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado, no próximo mês tente poupar dinheiro.',
        icon: grinningImg
      }
    } else {
      return {
        title: 'Muito bem !',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir o seu dinheiro.',
        icon: happyImg
      }
    }
  }, [totalBalance])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses

    const percentGains = (totalGains / total) * 100
    const percentExpenses = (totalExpenses / total) * 100

    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: Number(percentGains.toFixed(1)),
        color: '#e44c4e'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#f7931b'
      }
    ]

    return data
  }, [totalGains, totalExpenses])

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0
        gains.forEach(gain => {
          const date = new Date(gain.date)
          const gainMonth = date.getMonth()
          const gainYear = date.getFullYear()

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount)
            } catch (error) {
              console.log(error)
            }
          }
        })

        let amountOutput = 0
        expenses.forEach(expense => {
          const date = new Date(expense.date)
          const expenseMonth = date.getMonth()
          const expenseYear = date.getFullYear()

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense.amount)
            } catch (error) {
              console.log(error)
            }
          }
        })

        return {
          monthNumber: month,
          month: listOfMonths[month].substr(0, 3),
          amountEntry,
          amountOutput
        }
      })
      .filter(item => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        )
      })
  }, [yearSelected])

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
      <C.Content>
        <WalletBox
          title="Saldo"
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4241f0"
        />
        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas"
          icon="arrowUp"
          color="#f7931b"
        />
        <WalletBox
          title="Saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartBox data={relationExpensesVersusGains} />
        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#f7931b"
          lineColorAmountOutput="#e44c4e"
        />
      </C.Content>
    </C.Container>
  )
}

export default Dashboard
