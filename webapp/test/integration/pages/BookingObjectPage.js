sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'trav.ust.ab.travelproc',
            componentId: 'BookingObjectPage',
            contextPath: '/Travel/_Booking'
        },
        CustomPageDefinitions
    );
});