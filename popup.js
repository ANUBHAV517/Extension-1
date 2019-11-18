// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'popup-holder');
bubbleDOM.setAttribute('id', 'popupId');
document.body.appendChild(bubbleDOM);
document.getElementById("popupId").innerHTML = "<span><h1 id='pageHeading'>You will be redirected to Google News in <b class='timer' id='timer'></b></h1></span>";


var time=5;
function dtimer(){
document.getElementById("timer").innerHTML=" "+time+" seconds";
time=time-1;
    if(time < 0){
        window.location= "https://news.google.com/?hl=en-IN&gl=IN&ceid=IN:en";
    }
}
setInterval(dtimer,1000);
