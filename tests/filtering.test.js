/**
 * Created by vahid on 7/9/17.
 */

import { MockupClient } from './helpers'

describe('Filtering', function () {
  it('Simple filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('id', 1).done().then((resp) => {
      expect(resp.json.length).toEqual(1)
      expect(resp.json[0]).toEqual({id: 1, title: 'resource1'})
      done()
    })
  })
  it('Multiple filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter({id: 1, title: 'resource1'}).done().then((resp) => {
      expect(resp.json.length).toEqual(1)
      expect(resp.json[0]).toEqual({id: 1, title: 'resource1'})
      done()
    })
  })
  it('Smaller than filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('id', '<5').done().then((resp) => {
      expect(resp.json.length).toEqual(4)
      done()
    })
  })
  it('Smaller than equal filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('id', '<=5').done().then((resp) => {
      expect(resp.json.length).toEqual(5)
      done()
    })
  })
  it('LIKE filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('title', '%resource').done().then((resp) => {
      expect(resp.json.length).toEqual(10)
      done()
    })
  })
  it('ILIKE filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('title', '%~Resource').done().then((resp) => {
      expect(resp.json.length).toEqual(10)
      done()
    })
  })
  it('BETWEEN filter', function (done) {
    let c = new MockupClient()
    c.request('resources').filter('id', '~2,9').done().then((resp) => {
      expect(resp.json.length).toEqual(8)
      done()
    })
  })
})