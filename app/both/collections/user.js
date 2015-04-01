/**
 * User profile
 */
var UserProfile = new SimpleSchema({
    fullName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/
    },
    branch: {
        type: [String],
        autoform: {
            type: "select-multiple",
            options: function () {
                return App.List.branch();
            }
        }
    }
});

/**
 * Schema
 */
App.Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {
        type: String,
        label: "Password",
        min: 6
    },
    confirmPassword: {
        type: String,
        label: "Confirm Password",
        min: 6,
        custom: function () {
            if (this.value !== this.field('password').value) {
                return "passwordMismatch";
            }
        }
    },
    profile: {
        type: UserProfile
    },
    role: {
        type: [String],
        autoform: {
            type: "select-multiple",
            options: function () {
                return App.List.role();
            }
        }
    }
});

/**
 * Errors message
 */
SimpleSchema.messages({
    "passwordMismatch": "Passwords don't match."
});
