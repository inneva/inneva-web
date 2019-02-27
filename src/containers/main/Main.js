import React from 'react'

import Menu from './Menu'
import Jumbotron from './Jumbotron'
import Summary from './Summary'
import People from './People'
import Cases from './Cases'
import Footer from './Footer'
import ApiClient from '../../api/client'
import Spinner from '../../components/Spinner'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      client: new ApiClient(),
      data: null,
      isLoading: true
    }

    this.summaryRef = React.createRef()
    this.peopleRef = React.createRef()
    this.casesRef = React.createRef()
  }

  componentDidMount() {
    this.setState(prev => ({ ...prev, isLoading: true }))
    this.state.client.getMainData()
      .then(data => {
        this.setState(prev => ({ ...prev, data, isLoading: false }))
      })
      .catch(err => {
        // TODO indicate error in some way
        console.error(err)
      })
  }

  scrollTo = anchor => {
    let target = null
    if (anchor === 'summary') {
      target = this.summaryRef.current.offsetTop
    } else if (anchor === 'people') {
      target = this.peopleRef.current.offsetTop
    } else {
      target = this.casesRef.current.offsetTop
    }

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: target
    })
  }

  render() {
    if (this.state.isLoading) return <Spinner />

    // TODO better error message if data cannot be fetched for some reason
    if (!this.state.isLoading && !this.state.data) return <h1>Something went wrong</h1>

    // Data is fetched, should now be safe to render
    const { cases, main } = this.state.data

    return (
      <div>
        <Menu
          scrollTo={this.scrollTo}
        />
        <Jumbotron tagline={main.tagline} />
        <Summary
          header={main.aboutHeader}
          field1={main.aboutField1}
          field2={main.aboutField2}
          field3={main.aboutField3}
          setRef={this.summaryRef}
        />
        <People
          header={main.employeesHeader}
          employees={main.employees.map(e => e.fields)}
          setRef={this.peopleRef}
        />
        <Cases
          cases={cases}
          setRef={this.casesRef}
        />
        <Footer />
      </div>
    )
  }
}

export default Main