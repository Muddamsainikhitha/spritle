import {useState} from 'react'

import './index.css'

function Calculator() {
  const [values, setValues] = useState({
    inp1: '',
    inp2: '',
    result: 0,
    symbol: '+',
    reset: true,
  })

  const {inp1, inp2, result, symbol, reset} = values

  const onReset = () => {
    setValues({
      ...values,
      reset: true,
      inp1: '',
      inp2: '',
      symbol: '+',
    })
  }

  const onSubmit = sym => () => {
    switch (sym) {
      case '+':
        setValues({
          ...values,
          symbol: '+',
          result: inp1 + inp2,

          reset: false,
        })
        break
      case '-':
        setValues({
          ...values,
          symbol: '-',
          result: inp1 - inp2,

          reset: false,
        })
        break

      case '*':
        setValues({
          ...values,
          symbol: '*',
          result: inp1 * inp2,

          reset: false,
        })
        break

      case '/':
        setValues({
          ...values,
          symbol: '/',
          result: Math.round((inp1 / inp2) * 100) / 100,
          reset: false,
        })
        break
      default:
        onReset()
    }
  }

  const handleChange = name => event => {
    setValues({...values, [name]: parseInt(event.target.value)})
  }

  return (
    <div className="cal-card-container">
      <div className="card">
        <h1 className="title">You tell, I do</h1>
        <section className="card-text">
          <div className="cal-input-container">
            <input
              type="number"
              className="input"
              onChange={handleChange('inp1')}
              value={inp1}
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
            />
            <label className="ml-2 mr-2 symbol text-center sign">
              {symbol}
            </label>
            <input
              type="number"
              onChange={handleChange('inp2')}
              value={inp2}
              autoComplete="off"
              className="input"
              placeholder="Eg: 2"
            />
          </div>
          <div className="button-container">
            <button onClick={onSubmit('+')} className="button" type="submit">
              +
            </button>
            <button onClick={onSubmit('-')} className="button" type="submit">
              -
            </button>
            <button onClick={onSubmit('*')} className="button" type="submit">
              *
            </button>
            <button onClick={onSubmit('/')} className="button" type="submit">
              /
            </button>
          </div>
          <div className="reset-button">
            <button onClick={onReset} type="button" className="reset-txt">
              Reset
            </button>

            {!reset && (
              <div className="result-container">
                <div
                  className="result-value ma-0 slide-up-fade-in"
                  style={{display: reset ? 'none' : ''}}
                >
                  Result: {result}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Calculator
