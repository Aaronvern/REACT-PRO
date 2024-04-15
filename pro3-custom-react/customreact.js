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
        href: 'https://youtu.be/dQw4w9WgXcQ?si=rC0CCmR8YysU-FJP',
        target: 'https://youtu.be/dQw4w9WgXcQ?si=rC0CCmR8YysU-FJP'
    },
     children:'click me you are not gay'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
