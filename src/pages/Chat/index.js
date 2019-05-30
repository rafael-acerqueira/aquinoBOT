import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton'
import UploadBox from '../../components/UploadBox'
import HeaderWrapper from '../../components/HeaderWrapper'
import SearchInput from '../../components/SearchInput'
import FooterWrapper from '../../components/FooterWrapper'
import BodyWrapper from '../../components/BodyWrapper'
import QuestionMessageBox from '../../components/QuestionMessageBox'

const Chat = () => {
  const [commandMessages, setCommandMessages] = useState([])
  const [searchInputText, setSearchInputText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState('')

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCommandMessages( messages => [...messages, {
        id: uuidv4(),
        content: searchInputText,
        type: 'message'
      }])
      setSearchInputText('')
    }
  }

  const onChange = (e) => {
    setSearchInputText(e.target.value)
  }

  const handleUpload = (e) => {
    e.persist()
    const imagesCount = e.target.files.length
    setCommandMessages( messages => [...messages, {
      id: uuidv4(),
      content: URL.createObjectURL(e.target.files[0]),
      images: imagesCount > 1 ? e.target.files : {},
      type: 'image'
    }])
  }

  const mountImagesArray = () => {
    const message = commandMessages.filter(message => message.content === currentImage)
    const images = []
    if(message.length > 0) {
      const imagesObject = message[0].images
      if (imagesObject.length > 0)
        Object.keys(imagesObject).forEach( item => images.push(URL.createObjectURL(imagesObject[item])))
      else
        images.push(currentImage)
    }
    return images
  }

	const openLightbox = (event) => {
    const src = event.target.tagName === 'SPAN' 
      ? event.target.parentNode.children[0].src 
      : event.target.src
    
    setCurrentImage(src)

    setIndex(0)
    setIsOpen(true)
  }

  const nextSrc = () => {
    if (mountImagesArray().length === 1)
      return ''
    return mountImagesArray()[(index + 1) % mountImagesArray().length]
  }

  const prevSrc = () => {
    if (mountImagesArray().length === 1)
      return ''    
    return mountImagesArray()[(index + mountImagesArray().length - 1) % mountImagesArray().length]
  }

  return (
    <>
      <HeaderWrapper>
        <LogoBotcamp width='200px' />
        <Link to='/'>
          <LogoutButton />
        </Link>
      </HeaderWrapper>
      <BodyWrapper>
        {
          commandMessages.map(
            message => 
              <QuestionMessageBox
                key={message.id} 
                content={message.content} 
                type={message.type}
                onClick={(e) => openLightbox(e)}
                images={message.images ? message.images.length : null}
              />
          )    
        }

        {isOpen && (
          <Lightbox
            mainSrc={mountImagesArray()[index]}
            nextSrc={nextSrc()}
            prevSrc={prevSrc()}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setIndex((index + mountImagesArray().length - 1) % mountImagesArray().length)}
            onMoveNextRequest={() => setIndex((index + 1) % mountImagesArray().length)}
          />
        )}
      </BodyWrapper>
      <FooterWrapper>
        <SearchInput 
          onKeyDown={onKeyDown}
          onChange={onChange} 
          value={searchInputText}  
          placeholder="Diz aí..." 
          type="text"
        />
        <UploadBox handleUpload={handleUpload}/>
      </FooterWrapper>
    </>
  )
}
export default Chat;