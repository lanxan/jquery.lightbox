# jquery.lightbox


## Installation

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="/path/to/jquery.lightbox.js"></script>

## usage
    
    $(wrapper).lightbox();

  Option : 
  
  content :
  
    $(wrapper).lightbox({
      html: your html code
    });
  
  event : 
  
    $(wrapper).lightbox({
      html: your html code,
      create: function() {
        //do something
      },
      close: function() {
        //do something
      }
    });
