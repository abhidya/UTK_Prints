$(document).ready(function() {
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var markers = [];
        var currentOpenInfoWindow = null;
        var usa = new google.maps.LatLng(35.955442, -83.929237);
        var mapOptions = {
            center: usa,
            scrollWheel: false,
            zoom: 18,
            mapTypeId: 'satellite',
        };




        var infoWindow = new google.maps.InfoWindow;


        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            //  handleLocationError(false, infoWindow, map.getCenter());
        }


        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }



        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


        var icons = {
            url: "https://i.imgur.com/q9pwso8.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size

        };


        var features = [{
                position: new google.maps.LatLng(35.954555, 83.927985),
                Name: 'EHHS_Elmo',
                Description: 'Duplex Supported',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.956128, -83.928041),
                Name: 'Career_Services',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.952537, -83.929574),
                Name: 'Art_Laser',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'MusPrint',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.9544013, -83.9316451),
                Name: 'Writing_Center',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Oscar',
                Description: 'Duplex Supported & Color Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Ernie',
                Description: 'Duplex Supported',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_TheCount',
                Description: 'Duplex Supported',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Kermit',
                Description: 'Duplex Supported',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.956236, -83.928096),
                Name: 'UC_SOS',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'StudioColor',
                Description: 'Duplex Supported & COlor Supported',
                Make: "XEROX",
                Model: "Phaser 7800GX",

            },
            {
                position: new google.maps.LatLng(35.953552, -83.927226),
                Name: 'SIS_Com440',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P4515",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Library',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P4515",

            },
            {
                position: new google.maps.LatLng(35.953376, -83.925926),
                Name: 'CCI_Advlab',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_Color',
                Description: 'Duplex Supported & Color Supported',
                Make: "DELL",
                Model: "C3760dn Color Laser",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'ENG_Classroom',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 1320 series",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'ENG_Classroom',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 1320 series",

            },
            {
                position: new google.maps.LatLng(35.9574097, -83.934313),
                Name: 'UH_Clement',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'ENG_ClassColor',
                Description: 'Duplex Supported & Color Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_MsPiggy',
                Description: 'Duplex Supported',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.948985, -83.941884),
                Name: 'Agphaser',
                Description: 'Duplex Supported & Color Supported',
                Make: "XEROX",
                Model: "Phaser 6500DN",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_N_1',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            }, {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_N_2',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            }, {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_N_3',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            }, {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_N_4',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_S_1',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_S_2',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Bert',
                Description: 'Duplex Supported & Color Supported',
                Make: "Unknown",
                Model: "UNknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'LIB_Grad_Lab',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.952537, -83.929574),
                Name: 'Art_KM8650',
                Description: 'Duplex Supported & Color Supported',
                Make: "XEROX",
                Model: "Phaser 7500DT",

            },
            {
                position: new google.maps.LatLng(35.948272, -83.94107),
                Name: 'BESS_BW_1',
                Description: 'Duplex Supported ',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.948272, -83.94107),
                Name: 'BESS_BW_2',
                Description: 'Duplex Supported ',
                Make: "XEROX",
                Model: "Phaser 4510DT",

            },
            {
                position: new google.maps.LatLng(35.948272, -83.94107),
                Name: 'BESS_Color',
                Description: 'Duplex Supported & Color Supported ',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_SW_1',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_S_3',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955600, -83.928912),
                Name: 'CBA_Haslam_1',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P4515",

            },
            {
                position: new google.maps.LatLng(35.956839, -83.924955),
                Name: 'GEOG_gis1',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 600 M601",

            },
            {
                position: new google.maps.LatLng(35.953376, -83.925926),
                Name: 'CCI_PR402',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet M605",

            },
            {
                position: new google.maps.LatLng(35.955600, -83.928912),
                Name: 'CBA_Haslam_2',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P4515",

            },
            {
                position: new google.maps.LatLng(35.956236, -83.928096),
                Name: 'UC238',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },

            {
                position: new google.maps.LatLng(35.953376, -83.925926),
                Name: 'CCI_Color_PR402',
                Description: 'Duplex Supported & Color Supported',
                Make: "HP",
                Model: "LaserJet 5550",

            },
            {
                position: new google.maps.LatLng(35.953211, -83.930633),
                Name: 'CBT-S099',
                Description: 'Duplex Supported & Color Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 552",

            },
            {
                position: new google.maps.LatLng(35.953211, -83.930633),
                Name: 'CBT_S012B',
                Description: 'Duplex Supported & Color Supported',
                Make: "HP",
                Model: "LaserJet 500 Color M551",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Ernie2',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_Lab',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 552",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_1st',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 552",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_2nd',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 552",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_4th',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 552",

            },
            {
                position: new google.maps.LatLng(35.9552994, -83.9321067),
                Name: 'Dunford_4100',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.948985, -83.941884),
                Name: 'Agprint1',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.948985, -83.941884),
                Name: 'Agprint2',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_N_5',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954555, -83.927985),
                Name: 'EHHS_Grover',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954555, 83.927985),
                Name: 'EHHS_Bigbird',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.953671, -83.92905),
                Name: 'HSS_Laser_1',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.953671, -83.92905),
                Name: 'HSS_Laser_2',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954974, -83.931597),
                Name: 'I-House',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'Perkins_Laser_1',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'Perkins_Laser_2',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'Perkins_Color',
                Description: 'Duplex Supported & Color Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.952462, -83.933911),
                Name: 'Presidential_Laser_1',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.952537, -83.929574),
                Name: 'Art_Color_InkJet',
                Description: 'Duplex Supported & Color Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_3rd',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 363",

            },
            {
                position: new google.maps.LatLng(35.958169, -83.929442),
                Name: 'LAW_Lib_3rd',
                Description: 'Duplex Supported',
                Make: "KONICA MINOLTA",
                Model: "bizhub 363",

            },
            {
                position: new google.maps.LatLng(35.953578, -83.932122),
                Name: 'MSA_BCCLaser',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.953578, -83.932122),
                Name: 'MSA_BCCLaser',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'EFD_EST107',
                Description: 'Duplex Supported',
                Make: "unknown",
                Model: "unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'EFD_EST205',
                Description: 'Duplex Supported',
                Make: "unknown",
                Model: "unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'EFD_EST108',
                Description: 'Duplex Supported',
                Make: "unknown",
                Model: "unknown",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'EFD_EST108',
                Description: 'Duplex Supported',
                Make: "unknown",
                Model: "unknown",

            },
            {
                position: new google.maps.LatLng(35.956839, -83.924955),
                Name: 'GEOG_404',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 600 M601",

            },
            {
                position: new google.maps.LatLng(35.956105, -83.926275),
                Name: 'LRC_AMB_001',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P3015",

            },
            {
                position: new google.maps.LatLng(35.956105, -83.926275),
                Name: 'LRC_AMB_003',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P3015",

            },
            {
                position: new google.maps.LatLng(35.956105, -83.926275),
                Name: 'LRC_AMB_003',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet P3015",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'Hum204_ENG_1',
                Description: 'Duplex Supported',
                Make: "Unknown",
                Model: "Unknown",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Commons_S_4',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Lib03-wireless',
                Description: 'Library 3rd Floor : Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Lib04-wireless',
                Description: 'Library 4th Floor : Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Lib05-wireless',
                Description: 'Library 5th Floor : Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955092, -83.929763),
                Name: 'Lib06-wireless',
                Description: 'Library 6th Floor : Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.955715, -83.922694),
                Name: '403JDT-laser01',
                Description: '403 Tickle BW',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },

            {
                position: new google.maps.LatLng(35.955715, -83.922694),
                Name: '403JDT-color',
                Description: '403 Tickle Color',
                Make: "XEROX",
                Model: "Phaser 6180N",

            },
            {
                position: new google.maps.LatLng(35.955715, -83.922694),
                Name: '403JDT-color',
                Description: '403 Tickle Color',
                Make: "XEROX",
                Model: "Phaser 6180N",

            },
            {
                position: new google.maps.LatLng(35.954555, 83.927985),
                Name: 'EHHS_hypnos',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'ChemJet513',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 400 M401dne",

            },
            {
                position: new google.maps.LatLng(35.954049, -83.927199),
                Name: 'nursing128',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet 400 M401dne",

            },
            {
                position: new google.maps.LatLng(35.953671, -83.92905),
                Name: 'HSS216',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.957516, -83.925977),
                Name: 'ayres116',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.954401, -83.929456),
                Name: 'fst101-printer',
                Description: 'Duplex Supported',
                Make: "DELL",
                Model: "B5460dn Laser Printer",

            },
            {
                position: new google.maps.LatLng(35.962412, -83.921157),
                Name: 'ELI01_printer',
                Description: 'Duplex Supported',
                Make: "HP",
                Model: "LaserJet Professional P1606dn",

            },

        ];



        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                animation: google.maps.Animation.DROP,
                icon: icons,
                map: map
            });
            var message = renderMessage(feature);
            var infowindow = new google.maps.InfoWindow({
                content: message
            });
            marker.addListener('click', function() {
                if (currentOpenInfoWindow) {
                    currentOpenInfoWindow.close();
                }
                infowindow.open(map, marker);
                currentOpenInfoWindow = infowindow;
            });

            sidebarContent += (message + '<hr>');
        });
        $('#sidebarContent').html(sidebarContent);


        fitMarkers();



        function fitMarkers() {
            if (markers.length !== 0) {
                var bounds = new google.maps.LatLngBounds();
                for (marker of markers) {
                    bounds.extend(marker.getPosition());
                }
                map.fitBounds(bounds);
            }
        }


        function clearMarkers() {
            for (marker of markers) {
                marker.setMap(null);
            }
            markers = [];
        }


        function renderMessage(feature) {
            resp = '';
            resp += '<h4>' + feature.Name + '</h4>';
            resp += '<p>' + feature.Description + '</p>';
            resp += '<p>' + feature.Model + ', ' + feature.Make + '</p>';
            resp += '<a href="https://myprint.utk.edu/myprintcenter/">Continue on to myprint.utk.edu</a>';
            return resp;
        }




        //	handlesearch();
        var initial = true;
        $('#toggleSidebarBtn').click(function(e) {
            if (initial) {
                setClass('#hideSidebar', 'toggled');
                setClass('#showSidebar', 'toggled');
                setClass('#showMap', 'toggled');
                setClass('#showResults', 'toggled');
                $('#left').removeClass('initial');
                $('#left').addClass('toggled');
                $('#map-canvas').removeClass('initial');
                $('#map-canvas').addClass('toggled');
            } else {
                setClass('#hideSidebar', 'initial');
                setClass('#showSidebar', 'initial');
                setClass('#showMap', 'initial');
                setClass('#showResults', 'initial');
                $('#left').removeClass('toggled');
                $('#left').addClass('initial');
                $('#map-canvas').removeClass('toggled');
                $('#map-canvas').addClass('initial');
            }
            initial = !initial;
            google.maps.event.trigger(map, "resize");
			fitMarkers();



        });
    };
	
	        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            //  handleLocationError(false, infoWindow, map.getCenter());
        }


        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }

    function setClass(selector, className) {
        $(selector).removeAttr('class');
        $(selector).addClass(className);
    }
});