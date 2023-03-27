function addMore(){
    document.getElementById('error').innerHTML="";

    let name=document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="Please Enter Value";
    }else{
        let box=document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name;

        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";       // to remove the list item //
        a.className="remove";
        li.appendChild(a);

        let pos=box.firstElementChild;

        if(pos==null){
            box.appendChild(li);
        }else{                                // jo value daal rhe h wo 1st position pe aaye//
            box.insertBefore(li,pos);
        }
    }
    document.getElementById('name').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click', function(e){       // for the functionality of remove or delete//
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
})  