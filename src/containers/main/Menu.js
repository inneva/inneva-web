import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
    width: 100vw;
    height: 10vh;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.2s;

    &.white {
      background-color: white;
      box-shadow: 0 0px 12px 0px black;
    }
  `

  const Categories = styled.div`
    width: 45%;
    position: absolute;
    right: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    transition-duration: 0.5s;

    &.closed {
      transform: translateX(50%);
      opacity: 0;
    }

    &.scrolledDown {
      color: black;
    }

    @media screen and (max-width: 580px) {
      padding: 1rem;
      right: unset;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      top: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 0px 12px 0px black;
      color: black;

      &.closed {
        background-color: unset;
        box-shadow: none;
        transform: translateY(-5rem);
        opacity: 0;
        color: white;
      }
    }
  `

  const Category = styled.p`
    
    :hover {
      cursor: pointer;
    }

    @media screen and (max-width: 580px) {
      font-weight: 300;
      margin: 0.6rem 0;
    }
  `

  const BurgerHolder = styled.div`
    position: absolute;
    right: 0;
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }

    @media screen and (max-width: 900px) {
      width: 18%;
    }

    @media screen and (max-width: 580px) {
      width: 28%;
    }
  `

  const Burger = styled.div`
    background-color: #000000ba;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 70%;
    width: 60%;
    transition-duration: 0.2s;

    &:before {
      content: "";
      border-top: 4px solid white;
      border-bottom: 4px solid white;
      width: 40%;
      max-width: 90px;
      position: absolute;
      height: 11px;
      transition-duration: 0.2s;
      transform: translateY(-7px)
    }

    &.X:before {
      height: 0;
      border-top: unset;
      transform: rotateZ(-45deg) translateX(-1px) translateY(-1px);
      border-width: 3px;
    }
    
    &:after {
      content: "";
      border-bottom: 4px solid white;
      position: absolute;
      width: 40%;
      max-width: 90px;
      height: 31px;
      transition-duration: 0.2s;
    }

    &.X:after {
      transform: rotateZ(45deg) translateY(-14px);
      border-width: 3px;
    }

    &.scrolledDown {
      background-color: white;
      &:after,:before {
        border-color: black;
      }
    }

    @media screen and (max-width: 580px) {

      &.X {
        background-color: unset;
      }

      &.X:before {
        border-color: black;
      }

      &.X:after {
        border-color: black;
      }
      &:before {
        width: 35%;
      }
      &:after {
        width: 35%;
      }
    }
  `

class Menu extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      scrolledDown: false
    }
  }

  toggleMenu = () => {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const height = window.scrollY
    const { scrolledDown } = this.state

    if (!scrolledDown && height > 10) {
      this.setState({ scrolledDown: true })
    } else if (scrolledDown && height === 0) {
      this.setState({ scrolledDown: false })
    }
  }

  onCategoryClick = anchor => {
    this.props.scrollTo(anchor)
    this.setState(prev => ({ ...prev, menuOpen: false }))
  }

  render() {
    const { menuOpen, scrolledDown } = this.state

    return (
      <Bar className={scrolledDown && menuOpen ? 'white' : ''}>
        <Categories className={menuOpen ? scrolledDown ? 'scrolledDown' : '' : 'closed'}>
          <Category
            onClick={() => this.onCategoryClick('summary')}
          >Vad vi gör</Category>
          <Category
            onClick={() => this.onCategoryClick('people')}
          >Om oss</Category>
          <Category
            onClick={() => this.onCategoryClick('cases')}
          >Case</Category>
        </Categories>
        <BurgerHolder onClick={this.toggleMenu}>
          <Burger className={menuOpen ? scrolledDown ? 'X scrolledDown' : 'X' : ''} />
        </BurgerHolder>
      </Bar>
    )
  }
}

Menu.propTypes = {
  scrollTo: PropTypes.func.isRequired
}

export default Menu