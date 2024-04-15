


function customRender(reactElement,container){
    const domElement = document.createElement (reactElement.type)
    domElement.innerHTML = reactElement.children
    /*domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)*/
   for (const prop in reactElement.props) {
    if (prop == 'children') continue; {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
   }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href: 'https://api.writco.in/assets/images/post/user/quote/365200911060227328.webp',
        target: 'https://api.writco.in/assets/images/post/user/quote/365200911060227328.webp'
    },
     children:'click me if you are not gay'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
