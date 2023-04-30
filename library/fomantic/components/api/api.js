/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ArcadeApi() {

    this.addItem = function(itemValue, type, onSuccess, onError) {
        var data = {
            item_value: itemValue,
            type: type
        };

        return arikaim.put('/api/arcade/item/add',data,onSuccess,onError);          
    };

    this.deleteFavoriteGame = function(uuid, onSuccess, onError) {
        return arikaim.delete('/api/arcade/favorite/game/' + uuid,onSuccess,onError);          
    };
    
    this.updateBadge = function(badge, onSuccess, onError) {
        var data = {
            badge: badge
        };

        return arikaim.put('/api/arcade/badge/update',data,onSuccess,onError);          
    };
};

var arcadeApi = new ArcadeApi();