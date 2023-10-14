
let myLeads= []
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage=  JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
    ulEl.innerHTML=""
})
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){


localStorage.setItem("myLeads", JSON.stringify(myLeads))
myLeads.push(tabs[0].url)
renderLeads()

    })
})


inputBtn.addEventListener("click",function () {
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
})


function renderLeads(){
    let listItems = ""
for(i=0;i<myLeads.length;i++){
 listItems+="<li><a target='_blank' href='"+ myLeads[i] + "'>"+ myLeads[i]+" </a></li>"
 ulEl.innerHTML=listItems
}
}
console.log("leadsFromLocalStorage")