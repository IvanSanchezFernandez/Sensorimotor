
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Exactly! <br><br> Primary motor and primary sensory cortices are functionally connected by intracortical and U fibers. <br> The primary negative motor area is located in the posterior part of the inferior frontal lobe. There is also a secondary negative motor area in the midline. See the figures below.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "img/primarynegative.jpg";
		document.getElementById("answerQ1_pictureb").src = "img/secondarynegative.jpg";
		document.getElementById("afterQ1_picture").innerHTML = "The cortical representation of the primary motor cortex is much broader than the textbook precentral strip. The sensorimotor area should be considered as a functional mosaic that still warrants individual mapping prior to resection. <br> The pyramidal tract origins from the primary motor cortex, but also from the postcentral gyrus and the supplementary motor area. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Try again!";

}


}









function checkQ2() {

	if (document.question2.question.value == "R") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> DTI and fMRI studies have demonstrated that sensorimotor areas have strong local connectivity, while association areas display more distant connectivity. Hence, sensorimotor areas have domain-specific hierarchical connections that differ from heteromodal association areas receiving widespread connections from largely distributed brain systems.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
}

	if (document.question2.question.value == "W") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Incorrect! <br><br> Try again!";
		document.getElementById("after_submitQ2").style.background = "red";
}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == true) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> Although tonic and clonic motor semiology with Jacksonian progression are the typical seizure that comes to mind when thinking about sensorimotor semiology...";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "img/semiology.jpg";
		document.getElementById("afterQ3_picture").innerHTML = "...that semiology occurs only in one third of patients with central epilepsy. <br> Sensory symptoms, spasms, myoclonus, complex tonic posturing, vocalization, and speech arrest may occur. <br> Interestingly, bilateral motor semiology is most often due to focal spread rather than to generalization. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ3").style.background = "red";

}


}








function checkQ4() {

	if (document.question4.question.value == "T") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Seriously? What area of the brain has seizures always captured on scalp EEG? All brain areas have seizures that because of orientation of the dipole or because of other reasons are silent on scalp EEG. <br><br> Try again.";
		document.getElementById("after_submitQ4").style.background = "red";
}

	if (document.question4.question.value == "F") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> Some motor seizures may be electrically silent on scalp EEG, even when coming from the sensorimotor area. That was an easy question!";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct! <br><br> If there is no good reason to suspect that the occipital cortex is involved, then covering the occipital cortex is not recommended. However, the authors recommend a broad coverage beyond the typical sensorimotor areas to find both the focus (motor seizures can originate, for example, in the orbitofrontal cortex) and the early spread.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ5").style.background = "red";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == true && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == true && document.getElementById("q6g").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct! <br><br> In cases where there is a well delimited lesion (the authors include well-delimited type II FCD, DNET or ganglioglioma, although these are typically not well delimited) and there is no major deficit expected (for example, frontal region affecting part of the SMA) you can do just lesionectomy according to the authors. For other cases, sEEG.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ6").style.background = "red";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == false && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == false && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> RF can be used as first intervention or as repeated intervention after the initial resection has failed. <br> When a discrete lesion like a type II FCD, DNET or ganglioglioma is identified, microsurgical resection of the lesion guided by neuronavigation and intraoperative cortical stimulation should be considered first. However, if the lesion margins are close to the functional areas, RF is a good alternative.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ7").style.background = "red";

}


}







function checkQ8() {

	if (document.question8.question.value == "Fishing") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Fishing expedition without knowing what you are doing. Always a bad idea! <br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "img/fishing2.gif";
		document.getElementById("afterQ8_picture").innerHTML = "Additionally, if you fish something unexpected (interictal activity where there is nothing else suggesting a focus there), what are you going to do with it? Fishing expedition: never a good idea! <br><br> Try again!";
		document.getElementById("answerQ8_pictureb").src = "img/fishing.gif";
}

	if (document.question8.question.value == "BCH") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Nope! <br><br> Review again what they do at the authors' center.<br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "Try again!";

}

	if (document.question8.question.value == "noBCH") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Exactly! <br><br> At the authors' center, they first explant the electrodes and take their time to develop a surgical resection plan and then they resect. It is a common approach in many centers.<br><br>";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "";
		document.getElementById("afterQ6_picture").innerHTML = "Great job!";

}


}






