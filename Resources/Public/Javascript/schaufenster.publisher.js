$(function() {
    $('.PieContainer').each(function() {
        const that = $(this);
        const maxValues  = that.attr('data-maxvalues') || 12;
        const rowdata = JSON.parse(that.attr('data-piedata'));
        var values = [];
        var colors = [];
        var labels = [];
        Object.keys(rowdata).forEach(function(key,cnt) {
            if (cnt<maxValues) {
                labels.push(key);
                values.push(rowdata[key]);
                colors.push(getRandomColor(false));
            }
        });
        var piedata = {
            datasets: [{
                data: values,
                backgroundColor: colors
            }],
            labels: labels
        };
        that.append('<canvas height="'+that.attr('data-pieheight')+'" width="100%" id="canvaspublisher"/>');
        renderCanvas(piedata);
    });
    
   
    function renderCanvas(piedata) {
    try {
        function onPieClick(event, elem) {
            if (elem[0] != undefined) {
                startNextSearch(piedata.labels[elem[0]._index]);
            }
        }

        function onLegendClick(event, elem) {
            startNextSearch(elem.text);
        };

        function startNextSearch(label) {
            console.log(label);
            var link = "?tx_find_find[controller]=Search&tx_find_find[facet][publisher][###NEEDLE###]=1#tx_find";
            $.toast({
                message: 'Suche nach Veröffentlichungen des Herausgebers „' + label + '“', // this is the only required field
                timeout: 3000, // sepcify time in ms after the toast closes. set to false or 0 to disable
                button: {
                    text: 'OK', // the button text, will be transformed into uppercase automatically
                }
            });
            self.location = link.replace('###NEEDLE###', encodeURI(label));
        }

        var ctx = $("#canvaspublisher")[0].getContext("2d");
        var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: piedata,
            options: {
                animation: {animateScale:true},
                legend: {
                    onClick: onLegendClick,
                    display: false,
                    position: 'bottom',
                    labels: {

                    }
                },
                onClick: onPieClick
            }
        });
        myPieChart.show();
    } catch (e) {}
    }
    function getRandomColor(grayscale) {
        var letters = '0123456789ABCDEF',
            color = '#';
        if (grayscale == true) {
          var color = ''+letters[Math.floor(Math.random() * 16)] +letters[Math.floor(Math.random() * 16)];
           return '#'+color + color+color;
        } else {
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

    }

});
