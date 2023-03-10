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
import BarChartBox from '../../components/BarChartBox'

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
        description: 'Neste m??s voc?? gastou mais do que deveria!',
        footerText:
          'Verifique os seus gastos e tente cortar algumas coisa desnecess??rias.',
        icon: sadImg
      }
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Oops',
        description: 'Neste m??s n??o h?? registros de entradas e sa??das!',
        footerText:
          'Parece que voc?? n??o fez nenhum registro no m??s e ano selecionado.',
        icon: grinningImg
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste m??s voc?? gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado, no pr??ximo m??s tente poupar dinheiro.',
        icon: grinningImg
      }
    } else {
      return {
        title: 'Muito bem !',
        description: 'Sua carteira est?? positiva!',
        footerText: 'Continue assim. Considere investir o seu dinheiro.',
        icon: happyImg
      }
    }
  }, [totalBalance, totalExpenses, totalGains])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses

    const percentGains = Number(((totalGains / total) * 100).toFixed(1))
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1))

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: percentGains ? percentGains : 0,
        color: '#e44c4e'
      },
      {
        name: 'Sa??das',
        value: totalExpenses,
        percent: percentExpenses ? percentExpenses : 0,
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

  const relationExpensivesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    expenses
      .filter(expense => {
        const date = new Date(expense.date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1

        return month === monthSelected && year === yearSelected
      })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          return (amountRecurrent += Number(expense.amount))
        }

        if (expense.frequency === 'eventual') {
          return (amountEventual += Number(expense.amount))
        }
      })

    const total = amountRecurrent + amountEventual

    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1)
    )
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1))

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#e44c4e'
      }
    ]
  }, [yearSelected, monthSelected])

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    gains
      .filter(gain => {
        const date = new Date(gain.date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1

        return month === monthSelected && year === yearSelected
      })
      .forEach(gain => {
        if (gain.frequency === 'recorrente') {
          return (amountRecurrent += Number(gain.amount))
        }

        if (gain.frequency === 'eventual') {
          return (amountEventual += Number(gain.amount))
        }
      })

    const total = amountRecurrent + amountEventual

    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1)
    )
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1))

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#e44c4e'
      }
    ]
  }, [yearSelected, monthSelected])

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
          footerLabel="Atualizado com base nas entradas e sa??das"
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
          title="Sa??das"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas sa??das"
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
        <BarChartBox
          data={relationExpensivesRecurrentVersusEventual}
          title="Sa??das"
        />
        <BarChartBox
          data={relationGainsRecurrentVersusEventual}
          title="Entradas"
        />
      </C.Content>
    </C.Container>
  )
}

export default Dashboard
