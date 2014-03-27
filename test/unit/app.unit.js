/* Created by frank on 14-3-27. */

define(['app'], function (app) {
  "use strict";

  describe('test', function () {
    it('has a name', function () {
      expect(app.name).to.eq('app')
    })

    it('broke', function () {
      expect(app.notExist).to.be.ok
      // expect(app.notExist).to.be.not.ok // this one will pass
    })
  })
})
