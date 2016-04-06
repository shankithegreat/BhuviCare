﻿define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace'],
    function (router, home, ko, jquery, pace) {
        pace.start();
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
                $(".page-host").scrollTop(1);
            },
            openProbeTrap: function () {
                var content = '<img class="img-responsive" width="200" src="/images/tnauprobe.jpg" /><h4>TNAU INSECT PROBE TRAP</h4><p class="ptext">The use of trap is relatively a new method of detecting, trapping insects in stored grains. The basic components of a TNAU probe trap consists of three important parts : A main tube, insect trapping tube and a detachable cone at the bottom. Equispaced perforations of 2 mm diameter are made  in the main tube.</p><p class="ptext"><b>   Concept :</b>Insects love “AIR” and move towards air. This behaviour of the insect is exploited in this technology.</p><p class="ptext"><b>Method of working :</b>The insect trap has to be kept in the grain like rice, wheat etc., vertically with the white plastic cone downside as shown the figure. The top red cap must be with the level of the grain. Insects will move towards air in the main tube and enter through the hole. Once the insect enters the hole it falls down into the detachable white cone at the bottom. Then there is no way to escape and the insects are trapped forever. The white detachable cone can be unscrewed once in a week and the insects can be destroyed.</p><p class="ptext"><b>Salient Features :</b>No chemicals; No side effects and No maintenance cost.</p><p class="ptext"><b>Efficiency:</b>TNAU Insect traps are excellent insect detection devices in food grains and more effective in the detection of stored grain insects namely Rhyzopertha dominica (F.), Sitophilus cryzae (L.) and Tribolium castaneum (Herbst) in stored food grains both in terms of detection as well as number of insects caught than the standard normal sampling method (by spear sampling). The detection ratio (trap : normal sample) is higher in trap than of normal sampling method by factors ranging from 2 : 1 to 31 : 1. The insects catch is also higher in the probe trap than the normal sampling method by factors ranging from 20 : 1 to 121 : 1. They are also good mass trapping devices when used at 2 – 3 numbers / 25 kg bin (28 cm dia and 39 cm length). They should be placed at top 6 inches of the grain, where the insect activity is seen during early period of storage. They can remove > 80% of the insects within 10 – 20 days.</p>';
                document.getElementById("contentDiv").innerHTML = content;
            },
            openPulseBeetle: function () {
                var content = '<img class="img-responsive" width="200" src="/images/pulsebeetle.jpg" /><h4>TNAU TWO-IN-ONE MODEL TRAP</h4><p class="ptext">The probe trap containing the components namely the perforated tube, pitfall mechanism, a collection tube and the cone shaped pitfall trap with a perforated lid and the bottom tapering cone were combined as a single unit. Combination of probe and pitfall increase the trapping efficiency of insects. Best suited for pulse beetles as they are seen only on grain surface wandering here and there. It does not require tedious procedures like coating the inner surface of pitfall cone with sticky materials before trapping to hold pulse beetles. Beetles are captured alive in this trap, which may facilitate release of pheromone and there by attract more insects.</p>';
                document.getElementById("contentDiv").innerHTML = content;
            },
            openuvlighttrap: function () {
                var content = '<h4>UV – LIGHT TRAP FOR GRAIN STORAGE GODOWNS</h4><div class="row"><div class="col-lg-6"><img class="img-responsive" width="200" src="images/uvlighttrap1.jpg" /></div><div class="col-lg-6"><img class="img-responsive" width="200" src="images/uvlighttrap2.jpg" /></div></div><div class="row"><p class="ptext">The UV light trap mainly consists of an ultra-violet source (4 W germicidal lamp). The lamp produces ultra-violet rays of peak emission around 250 nano meter. The light is fitted at the centre of a funnel of 310 mm diameter at the top and 35 mm diameter at the bottom. The bottom end of the funnel is attached with a transparent plastic container for collecting the trapped insects. To hang the unit at desired points, three hooks have been provided at the periphery of the funnel. The unit is also provided with a tripod stand.</p><p class="ptext">The UV light trap can be placed in food grain storage godowns at 1.5 m above ground level, preferably in places around warehouse corners, as it has been observed that the insect tends to move towards these places during the evening hours. The trap can be operated during the night hours. The light trap attracts stored product insects of paddy like lesser grain borer, Rhyzopertha dominica, red flour beetle, Tribolium castaneum and saw toothed beetle, Oryzaephilus surnamensis in large numbers. Psocids which are of great nuisance in godowns are also attracted in large numbers. Normally 2 numbers of UV light trap per 60 x 20 m (L x B) godown with 5 m height is suggested.</p><p class="ptext">The trap is ideal for use in godowns meant for long term storage of grains, whenever infested stocks arrive in godowns and during post fumigation periods to trap the resistant strains and left over insects to prevent build up of the pest populations. In godowns of frequent transactions the trap can be used for monitoring.</p><h5><b>Efficiency:</b></h5><p class="ptext">It has been found that two traps kept at the corners of the warehouse (60m x 20m x 5m) can catch around 200 insects/day even from a godown where normal sampling did not show any insect presence, thus indicating its effectiveness as a monitoring and mass trapping device. It has been recorded around 3000 Rhyzopertha dominica on a single day from single trap kept in a paddy godown.</p></div>';
                document.getElementById("contentDiv").innerHTML = content;
            },
            openstackprobe: function () {
                var content = '<h4>Trap for monitoring stored product insects in warehouse.</h4><div class="row"><div class="col-lg-6"><img width="200" class="img-responsive" src="images/stackprobe1.jpg" /></div><div class="col-lg-6"><img class="img-responsive" width="200" src="images/stackprobe2.jpg" /></div></div><div class="row"><p class="ptext">The invention disclosed in this application relates to a device for detecting stored grain insects in bagstacks which comprises a main hollow tube having a diameter in the range of 1.8 to 2.0 cm with equispaced perforation in the range of 1.8 to 2 mm on its upper portion with a bend at one end which ends in a transparent collection unit to collect the insects falling down from the bend, the other end of main tube being closed.</p><h5>Advantages of the invention</h5><p class="ptext">i) The device is useful in detecting stored grain insects in bag stacks of the food grain warehouses without any damage to sacks.</p><p class="ptext">ii) The device does not required any bait materials to trap insects.</p><p class="ptext">iii) The device is useful in studying the distribution pattern of stored product insects in various layers of bag stacks.</p><p class="ptext">iv) The device will be useful to validate the effect of fumigation by using it immediately after fumigation, in different layers of the fumigated stacks.</p><p class="ptext">v) The device will also be useful at farm level when farmers store their produce in bags.</p></div>';

                document.getElementById("contentDiv").innerHTML = content;
            }
        };

        return vm;
    });