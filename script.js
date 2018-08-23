

    $('#headerIcon').on('click',function(){
        
        $('body').toggleClass('withSidebar');
    });

    $('.produit:eq(0)').on('click',function(){
        
        $('.descriptionProduits:eq(0)' ).toggleClass('show');
        
    });
    $('.produit:eq(1)').on('click',function(){
        
        $('.descriptionProduits:eq(1)' ).toggleClass('show');
        
    });

    var produit = $('.produit'), description = $('.descriptionProduits');
    for (var i = 0; i < produit.length; i++){
        produit[i].on('click',function(){
            description[i].toggleClass('show')
        });
    } ;
