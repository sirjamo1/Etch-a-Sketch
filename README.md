# Etch-a-Sketch

<h3>project odin etch a sketch</h3>
<br><br>
<h4>Page Preview</h4>
<br />

![Alt Text](image/etchASketchScreenshot.png?raw=true "Etch a Sketch screenshot")
<br />

<p>Learnt a-lot from this project from creating div's/styles in javaScript to adding event listeners and getting elements by id/class. </p>
<br><br>
<h5>Key take a-ways</h5>
<br>
<ul>
<li>Adding animation with js will only run once. eg. In one case, the shaker animation added the style via "addEventListener("click") and then had to be removed with "addEventListener("mousedown").<br>Another case would be the reset/random buttons which needed to spin 360deg when clicked (but would only spin once due to the "transform: rotate" being set to 360deg after the click). <br>Solution was to to add 360deg to the total on each click</li>
<li>Adding sound to the coloring ("mouseover") of the div, would only play again once it had finished.<br> Solution was to add an "addEventListener("mouseout") function that paused sound and put it's current time to = 0 (doesn't work perfectly, not sure what the limiting factor is there)</li>
<li>Got confident using git to add, branch, merge, commit, push etc. to gitHub</li>
</ul>
<br><br>
<ul> Sound effects from www.freesound.org
<li>Shake sound by totalcult</li>
<li>Drawing sound by pinevoc</li>
<li>Wheel clicking sound by jrayhartley</li>
</ul>
