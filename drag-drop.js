let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;// لتخزين العنصر الذي يتم سحبه حاليًا، مما يسمح لأحداث السحب والإفلات المختلفة بالتواصل فيما بينها والعمل كجزء من عملية واحدة متكاملة و استخدامه في drop
btn.onclick = function(){
    if(inp.value != ''){
       boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}<p/>`
       inp.value='';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
       item.addEventListener('dragstart', function(){//dragstart(العنصر نفسه)
        drag = item;
        item.style.opacity = '0.6';
        //item.style.background = 'blue';
       });
       item.addEventListener('dragend', function(){
        drag = null;
        item.style.opacity = '1';
        //item.style.background = 'green';
       });
       boxs.forEach(box=>{
        box.addEventListener('dragover', function(e){//dragover=(تفعيل منطقة الإسقاط)
            e.preventDefault();// remove the default of this event for add the element in nother box.
            this.style.background = '#090';
            this.style.color = '#fff';
        });
        box.addEventListener('dragleave', function(){//dragleave=(عندما يغادر العنصر المسحوب منطقة الإسقاط الصالحة)
            this.style.background = '#fff';
            this.style.color = '#000';
        });
        box.addEventListener('drop', function(){//drop(تنفيذ الاجراءات التي تريدها و الحصول على البيانات اذا اردت بعد نجاح الافلات في المنطقة الصالحة)
            //e.preventDefault();
            box.append(drag);//add the drag in the box.
            this.style.background = '#fff';
            this.style.color = '#000';
        })
    })
    })
}