import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('option-tally', 'Integration | Component | option-tally', {
  integration: true
});

test('properly displays 0 votes', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('myOption', { voteCount: 0});
  this.set('myPoll', { voteCount: 0});

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '0 votes (0%)');
});


test('properly displays all votes the option', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('myOption', { voteCount: 5});
  this.set('myPoll', { voteCount: 5});

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '5 votes (100%)');
});

test('properly displays partial vaotes on the options', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('myOption', { voteCount: 1});
  this.set('myPoll', { voteCount: 3});

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '1 votes (33%)');
});
