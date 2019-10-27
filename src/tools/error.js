module.exports = {
  sendError: function(status, messages) {
    let res = {
      status: status,
      messages: messages
    };
    return JSON.stringify(res);
  }
};
