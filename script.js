const overviewDescriptionWrapper = document.querySelector(
  ".overview-description-overview"
);

const animatedheightInner = document.querySelector(
  ".animatedheight-inner-overview"
);

const readMoreBtn = document.querySelector(
  ".colapsshoecontentlinkdiv-overview"
);

const readLessBtn = document.querySelector(
  ".colapsshoecontentlinkdiv2-overview"
);

const h2collection = animatedheightInner.querySelectorAll("h2");

let numberOfPara;

function screenWidth() {
  return window.innerWidth;
}

function handleNumberOfPara(desktopParaCount=2, ipadLandParaCount=desktopParaCount, ipadParaCount=1, mobileParaCount=1) {
  if(screenWidth() > 1199) {
    numberOfPara = desktopParaCount;
  }else if (screenWidth() > 1023) {
    numberOfPara = ipadLandParaCount;
  }else if (screenWidth() > 767) {
    numberOfPara = ipadParaCount;
  } else {
    numberOfPara = mobileParaCount;
  }
}

window.addEventListener("load", function () {
  handleNumberOfPara(desktopParaCount, ipadLandParaCount, ipadParaCount, mobileParaCount);
  defaultHeight(numberOfPara);

  readMoreBtn.addEventListener("click", expandOverviewDescription);

  readLessBtn.addEventListener("click", collapseOverviewDescription);
});

window.addEventListener("resize", function () {
  handleNumberOfPara(desktopParaCount, ipadLandParaCount, ipadParaCount, mobileParaCount);
  defaultHeight(numberOfPara);
});

function expandOverviewDescription() {
  overviewDescriptionWrapper.style.height = `${animatedheightInner.offsetHeight}px`;
  readMoreBtn.style.display = "none";
  readLessBtn.style.display = "block";
}

function collapseOverviewDescription() {
  defaultHeight(numberOfPara);
  readLessBtn.style.display = "none";
  readMoreBtn.style.display = "block";
}

function defaultHeight(numberOfPara = 2) {
  readMoreBtn.style.display = "none";
  readLessBtn.style.display = "none";
  if (h2collection.length > 0) {
    let heightToShow;
    if (numberOfPara < h2collection.length) {
      heightToShow = h2collection[numberOfPara].offsetTop;
      readMoreBtn.style.display = "block";
    } else if (
      numberOfPara == h2collection.length ||
      h2collection.length == 1
    ) {
      heightToShow = animatedheightInner.offsetHeight;
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "none";
    } else {
      heightToShow = h2collection[h2collection.length - 1].offsetTop;
      readMoreBtn.style.display = "block";
    }
    overviewDescriptionWrapper.style.height = `${heightToShow}px`;
  }
}
