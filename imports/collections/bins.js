import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            shartedWith: [],
            ownerId: this.userId
        })
    },

    'bins.remove': function(bin) {
        return Bins.remove(bin);
    },

    'bins.update': function(bin, content) {
        return Bins.update(bin._id, { $set: { content } } )
    },

    'bins.share': function(bin, email) {
        return Bins.update(bin._id, { $push: { shartedWith: email }})
    }
})

export const Bins = new Mongo.Collection('bins');

// this need to be imported at both server and client main.js