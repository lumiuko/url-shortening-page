const menuBtn = document.getElementById('menu-btn')
const mobileNav = document.getElementById('mobile-nav')
const form = document.getElementById('form')
const input = document.getElementById('input')
const errorText = document.getElementById('error-text')
const links = document.getElementById('links')

let isMenuOpen = false

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

function handleMenuBtnClick() {
  isMenuOpen = !isMenuOpen
  toggleClass(mobileNav, 'menu-hidden', !isMenuOpen)
}

async function getShortenedURL(url) {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
  const data = await res.json()

  if (!data.ok) {
    throw new Error(data.error)
  }

  return data
}

function displayError(message) {
  errorText.textContent = message
  form.classList.add('form-error')
}

async function handleSubmit(event) {
  event.preventDefault()

  const shortenBtn = event.target.querySelector('#shorten-btn')
  const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  event.target.classList.remove('form-error')

  if (!input.value.match(urlRegex)) {
    displayError('Please add a link')
    return
  }

  try {
    shortenBtn.disabled = true
    const data = await getShortenedURL(input.value)
    appendItem(data.result)
    input.value = ''
  } catch (error) {
    displayError(error)
  } finally {
    shortenBtn.disabled = false
  }
}

function appendItem(item) {
  const listItem = document.createElement('li')
  listItem.className = 'rounded-sm bg-white flex flex-col xl:flex-row xl:items-center xl:py-4 xl:pl-8 xl:pr-6 xl:justify-between'

  listItem.innerHTML = `
    <p class="px-4 py-[0.375rem] border-b-[1px] border-b-line xl:p-0 xl:border-none xl:mr-4 whitespace-nowrap overflow-hidden overflow-ellipsis" title="${item.original_link}">${item.original_link}</p>
    <div class="px-4 pt-[0.375rem] pb-4 flex flex-col xl:p-0 xl:flex-row xl:items-center">
      <p class="text-cyan" id="short-link">${item.short_link}</p>
      <button class="bg-cyan text-white font-bold mt-2 rounded-sm py-2 leading-md xl:mt-0 xl:ml-6 hover:bg-cyan-hover transition-colors xl:text-sm xl:min-w-[103px]" id="btn-add">Copy</button>
    </div>
  `

  links.append(listItem)
}

function handleDocumentClick(event) {
  if (event.target.id !== 'btn-add') return
  const element = event.target
  const shortLink = event.target.previousElementSibling.textContent

  document.querySelectorAll('#links li button').forEach(item => {
    item.textContent = 'Copy'
    item.classList.remove('highlight')
  })

  element.textContent = 'Copied!'
  element.classList.add('highlight')
  navigator.clipboard.writeText(shortLink)
}

menuBtn.addEventListener('click', handleMenuBtnClick)
form.addEventListener('submit', handleSubmit)
document.addEventListener('click', handleDocumentClick)
