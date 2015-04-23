/**
 * User profile
 */
var UserProfile = new SimpleSchema({
    fullName: {
        type: String
    },
    branch: {
        type: [String],
        autoform: {
            type: "select-multiple",
            options: function () {
                return Cpanel.List.branch(false);
            }
        }
    }
});

/**
 * Schema
 */
Cpanel.Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        min: 3
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional:true
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
                return Cpanel.List.role(false);
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
