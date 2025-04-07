function customeRender(reactElement, shivangElement){
    const docElement = document.createElement(reactElement.type)
    docElement.innerHTML= reactElement.children
    for(const prop in reactElement.props){
        docElement.setAttribute(prop, reactElement.props[prop])
    }

    shivangElement.appendChild(docElement)

}

const reactElement = {
    type: 'a',
    props :{
        href: 'https://www.google.co.in/',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const shivangElement = document.querySelector('#shivang');

customeRender(reactElement, shivangElement)