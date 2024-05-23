import React from 'react'

// 1. props state
// 2. 生命週期
// 3. this

type BtnProps = {
  clickHandler: () => void
}
type BtnState = {}

class Btn extends React.Component<BtnProps, BtnState> {
  constructor(props: BtnProps) {
    super(props)
  }

  // 組件「將要」被解除安裝時
  componentWillUnmount() {
    // TODO del
    console.log('btn unmount')
  }

  render(): React.ReactNode {
      return <button onClick={this.props.clickHandler}>+1</button>
  }
}

type AppProps = {}
type AppState = {
  count: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      count: 0
    }

    // 這一段程式碼，是保證this永遠指向APP，不管是window還是其他物件執行它
    this.countClickHandler = this.countClickHandler.bind(this)
  }

  countClickHandler() {
    // window
    // TODO del
    console.log('this', this)
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  // 組件被安裝時
  componentDidMount() {
    // TODO del
    console.log('mount')
  }

  // 組件被更新的時候
  componentDidUpdate() {
    // TODO del
    console.log('update', this.state)
  }

  render(): React.ReactNode {
      return <>
        <h1>Count: {this.state.count}</h1>
        {this.state.count === 5 ? null : <Btn clickHandler={this.countClickHandler} />}
      </>
  }
}

export default App