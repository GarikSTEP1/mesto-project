const popupEditProfile = document.querySelector('#popup-edit-profile')
const btnEditProfile = document.querySelector('.profile__button-edit')

const profileName = document.querySelector('.profile__name')
const profileDirection = document.querySelector('.profile__direction')

const popupFormFieldName = popupEditProfile.querySelector('.form__field_type_name')
const popupFormFieldDirection = popupEditProfile.querySelector('.form__field_type_direction')

const formEditProfile = popupEditProfile.querySelector('.form')

const popupAddCard = document.querySelector('#popup-add-card')
const formAddCard = popupAddCard.querySelector('.form')
const btnAddCard = document.querySelector('.profile__button')
const popupFormFieldPlace = popupAddCard.querySelector('.form__field_type_place')
const popupFormFieldLink = popupAddCard.querySelector('.form__field_type_link')

const popupImage = document.querySelector('#popup-image')

const imagePlace = popupImage.querySelector('.popup__image-place')
const textPlace = popupImage.querySelector('.popup__text')


function openPopup (popupEl) {
    popupEl.classList.add('popup_opened')
}

function closePopup (popupEl) {
    popupEl.classList.remove('popup_opened')
}

btnEditProfile.addEventListener('click', () => openPopup (popupEditProfile))

btnEditProfile.addEventListener('click', () => {
    popupFormFieldName.value = profileName.textContent
    popupFormFieldDirection.value = profileDirection.textContent
    openPopup (popupEditProfile)
})

formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault()
    profileName.textContent = popupFormFieldName.value
    profileDirection.textContent = popupFormFieldDirection.value
    closePopup (popupEditProfile)
})




const cardTemplate = document.querySelector('#card').content
const elementsSection = document.querySelector('.elements')

function createCard(cardData) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
    const imageEl = cardElement.querySelector('.element__image')
    const textEl = cardElement.querySelector('.element__title')

    imageEl.src = cardData.link
    imageEl.alt = cardData.name
    textEl.textContent = cardData.name

    cardElement.querySelector('.element__button').addEventListener('click', (evt) => evt.target.classList.toggle('element__button_active'))

    cardElement.querySelector('.element__trash').addEventListener('click', (evt) => evt.target.closest('.element').remove())

    imageEl.addEventListener('click', () => {
        imagePlace.src = cardData.link
        imagePlace.alt = cardData.name
        textPlace.textContent = cardData.name
        openPopup(popupImage)
    })

    return cardElement
}

function addCard(cardData) {
    const cardElement = createCard(cardData)
    elementsSection.prepend(cardElement)
}

initialCards.reverse().forEach((item) => {
addCard(item)
})




btnAddCard.addEventListener('click', () => openPopup (popupAddCard))




formAddCard.addEventListener ('submit', (evt) => {
    evt.preventDefault()
    addCard({
        name: popupFormFieldPlace.value,
        link: popupFormFieldLink.value
    })
        
    closePopup(popupAddCard)
    popupFormFieldPlace.value = ''
    popupFormFieldLink.value = ''
})




document.querySelectorAll('.popup__button').forEach(button => {
    const buttonsPopup = button.closest('.popup')
    button.addEventListener('click', () => closePopup(buttonsPopup))
  })



/*const closeBtnEditProfile = popupEditProfile.querySelector('.popup__button')*/
/*const closeBtnAddCard = popupAddCard.querySelector('.popup__button')*/
/*const closeBtnImage = popupImage.querySelector('.popup__button')*/
/*closeBtnEditProfile.addEventListener('click', () => closePopup (popupEditProfile))*/
/*closeBtnAddCard.addEventListener('click', () => closePopup (popupAddCard))*/
/*closeBtnImage.addEventListener('click', () => closePopup(popupImage))*/
/*imageEl.addEventListener('click', () => {
        const img = popupImage.querySelector('.popup__image-place')
        const t = popupImage.querySelector('.popup__text')
        img.src = src
        img.alt = text
        t.textContent = text
        openPopup(popupImage)
    })*/
/*const src = cardData.link
    const text = cardData.name

    imageEl.src = src
    imageEl.alt = text

    cardElement.querySelector('.element__image').scr = src
    cardElement.querySelector('.element__title').textContent = text*/



