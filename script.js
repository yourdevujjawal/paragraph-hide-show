"use strict";

var overviewDescriptionWrapper = document.querySelector(".overview-description-overview");
var animatedheightInner = document.querySelector(".animatedheight-inner-overview");
var readMoreBtn = document.querySelector(".colapsshoecontentlinkdiv-overview");
var readLessBtn = document.querySelector(".colapsshoecontentlinkdiv2-overview");
var h2collection = animatedheightInner.querySelectorAll("h2");
var numberOfPara;

function screenWidth() {
  return window.innerWidth;
}

function handleNumberOfPara() {
  var desktopParaCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var ipadLandParaCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : desktopParaCount;
  var ipadParaCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var mobileParaCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (screenWidth() > 1199) {
    numberOfPara = desktopParaCount;
  } else if (screenWidth() > 1023) {
    numberOfPara = ipadLandParaCount;
  } else if (screenWidth() > 767) {
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
  overviewDescriptionWrapper.style.height = "".concat(animatedheightInner.offsetHeight, "px");
  readMoreBtn.style.display = "none";
  readLessBtn.style.display = "block";
}

function collapseOverviewDescription() {
  defaultHeight(numberOfPara);
  readLessBtn.style.display = "none";
  readMoreBtn.style.display = "block";
}

function defaultHeight() {
  var numberOfPara = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  readMoreBtn.style.display = "none";
  readLessBtn.style.display = "none";

  if (h2collection.length > 0) {
    var heightToShow;

    if (numberOfPara < h2collection.length) {
      heightToShow = h2collection[numberOfPara].offsetTop;
      readMoreBtn.style.display = "block";
    } else if (numberOfPara == h2collection.length || h2collection.length == 1) {
      heightToShow = animatedheightInner.offsetHeight;
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "none";
    } else {
      heightToShow = h2collection[h2collection.length - 1].offsetTop;
      readMoreBtn.style.display = "block";
    }

    overviewDescriptionWrapper.style.height = "".concat(heightToShow, "px");
  }
}
