const cards = document.getElementsByClassName('product-benefits__card');
if (cards.length > 0) {
   function positionContentOfCard() {
      for (const card of cards) {
         const baseLayer = card.querySelector('.product-benefits__card-base-layer');
         let baseLayerMargingTot;
         const hoverLayerBox = card.querySelector('.product-benefits__card-hover-layer-box');
         let baseLayerHeight;
         if (baseLayer) {
            baseLayerMargingTot = window.getComputedStyle(baseLayer).marginTop;
            baseLayerHeight = baseLayer.clientHeight;
         }

         let hoverLayerBoxHeight;
         if (hoverLayerBox) {
            hoverLayerBoxHeight = hoverLayerBox.clientHeight;
         }
         const cardHaight = card.clientHeight;
         if (baseLayerHeight && hoverLayerBoxHeight) {
            const retreat = `${(cardHaight - (baseLayerHeight + hoverLayerBoxHeight)) / 2}px`;
            baseLayer.style.setProperty('--retreat', retreat);
            hoverLayerBox.style.marginBottom = retreat;
            card.addEventListener('mouseenter', () => {
               baseLayer.classList.add('card-base-layer__hover')
            })

            card.addEventListener('mouseleave', () => {
               baseLayer.classList.remove('card-base-layer__hover')
            });

         }
      }
   }
   window.addEventListener('load', positionContentOfCard)
   //positionContentOfCard();
   window.addEventListener('resize', positionContentOfCard);
}