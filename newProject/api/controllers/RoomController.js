/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RoomController.add()`
   */
  add: function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },


  /**
   * `RoomController.find()`
   */
  find: function (req, res) {
    return res.jsonp({
     rooms:'[{"id":1,"roomId":2,"roomName":6,"roomSize":3,"roomType":4,"emptyTime":5},{"id":2,"roomId":2,"roomName":6,"roomSize":3,"roomType":4,"emptyTime":5}]'
    });
  },


  /**
   * `RoomController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `RoomController.change()`
   */
  change: function (req, res) {
    return res.json({
      todo: 'change() is not implemented yet!'
    });
  }
};

