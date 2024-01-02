function toggleIcon(label) {
    // Sélectionnez l'élément span contenant l'icône à l'intérieur de la question
    var iconContainer = label.querySelector('.icon_container');
    
    // Basculez la classe de l'icône entre "icon-plus" et "icon-minus"
    if (iconContainer) {
      iconContainer.classList.toggle('open');
    }
  }