function activeLink(id)
{
    
    var act = document.querySelector('a.active');
    switch (id) {
        case '1':
            act.classList.remove('active');
            document.getElementById(id).classList.add('active');
            
            break;
        case '2':
            act.classList.remove('active');
            document.getElementById(id).classList.add('active');
            
            break;
        case '3':
            act.classList.remove('active');
            document.getElementById(id).classList.add('active');
            
            break;
        case '4':
            act.classList.remove('active');
            document.getElementById(id).classList.add('active');
            
            break;
        case '5':
            act.classList.remove('active');
            document.getElementById(id).classList.add('active');
            
            break;
    
        default:
            break;
    }
}