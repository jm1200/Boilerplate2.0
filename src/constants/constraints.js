export const constraints = {
  signUp: {
    emailAddress: {
      email: true,
      presence: {
        allowEmpty: false
      }
    },

    password: {
      length: {
        minimum: 6
      },
      presence: {
        allowEmpty: false
      }
    },

    passwordConfirmation: {
      equality: "password",
      length: {
        minimum: 6
      },
      presence: {
        allowEmpty: false
      }
    }
  },

  signIn: {
    emailAddress: {
      email: true,
      presence: {
        allowEmpty: false
      }
    },

    password: {
      length: {
        minimum: 6
      },
      presence: {
        allowEmpty: false
      }
    }
  },

  resetPassword: {
    emailAddress: {
      email: true,
      presence: {
        allowEmpty: false
      }
    }
  },

  addAvatar: {
    avatar: {
      presence: {
        allowEmpty: false
      },

      url: {
        message: "^Avatar URL is not a valid URL"
      }
    }
  },

  changeAvatar: {
    avatar: {
      presence: {
        allowEmpty: false
      },

      url: {
        message: "^Avatar URL is not a valid URL"
      }
    }
  },

  addDisplayName: {
    displayName: {
      presence: {
        allowEmpty: false
      }
    }
  },

  changeDisplayName: {
    displayName: {
      presence: {
        allowEmpty: false
      }
    }
  },

  addEmailAddress: {
    emailAddress: {
      email: true,
      presence: {
        allowEmpty: false
      }
    }
  }
};
