import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialExpense) => {

    const [value, setValue] = useState(() => {
        const savedExpenses = localStorage.getItem(key)
        return savedExpenses ? JSON.parse(savedExpenses) : initialExpense
    })

    useEffect (() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

  return [value, setValue]
}

export default useLocalStorage