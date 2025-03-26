window.onload = async function () {
    console.log("task 7-8");


    try {
        let resonse = await fetch('../data/iris.json');
        let parsedResultJS = await resonse.json();
        console.log(parsedResultJS);

        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

    }
    catch (err) {
        console.log(err);
    }




}