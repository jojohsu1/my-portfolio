    (function(){
        let currentButton = 0;

        //DOM
        const directionElems = [...document.querySelectorAll('.direction__right')]
        const contentElems = [...document.querySelectorAll('.works__content')] 

        document.addEventListener('click', event => {
            let selfBtn = document.querySelector('.self_btn')
            let skillBtn = document.querySelector('.skill_btn')
            let selfElem = document.querySelector('.self')
            let skillElem = document.querySelector('.skill')
            if(event.target && event.target.matches('.self_btn')){
                let btn = event.target
                let elem = btn.parentElement.parentElement
                let contentElem = elem.children[1].children[0]
                console.log(contentElem)
                console.log(btn)
                btn.classList.toggle('btn-active')
                contentElem.classList.toggle('self-active')
                skillBtn.classList.remove('btn-active')
                skillElem.classList.remove('skill-active')
            }
            if(event.target && event.target.matches('.skill_btn')){
                let btn = event.target
                let elem = btn.parentElement.parentElement
                let contentElem = elem.children[1].children[1]
                console.log(contentElem)
                console.log(btn)
                btn.classList.toggle('btn-active')
                contentElem.classList.toggle('skill-active')
                selfBtn.classList.remove('btn-active')
                selfElem.classList.remove('self-active')
            }
        })
          
        document.addEventListener('click', event=>{
            if(event.target && event.target.matches('.direction__right')){
            let btn = event.target
            let item = btn.parentElement.parentElement.parentElement.parentElement
            let itemElem = item.parentElement
            let itemIndex = [...itemElem.children].indexOf(item)
            console.log(itemIndex)
            let detailsElem = btn.parentElement.parentElement.parentElement
            let textElem = [...detailsElem.children][1]
            contentElems[itemIndex].classList.toggle('distance-active')
            btn.classList.toggle('right-active')
            textElem.classList.toggle('text-active')
            btn.innerHTML === '&#8640;' ? btn.innerHTML = '&#8636;': btn.innerHTML = '&#8640;' 
            console.log(btn.innerText)
            } 
        })
            
        
        
    
        

    })()
    


    

    




