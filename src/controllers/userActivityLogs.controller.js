const userActivityLogsService = require("../services/userActivityLog.service");

class UserActivityLogsController {
  async getUserActivityLogs(req, res, next) {
    try {
      const { page = 1, perPage = 10, ...query } = req.query;
      const { pagination, userActivityLogs: logs } =
        await userActivityLogsService.getUserActivityLogs({
          page: parseInt(page),
          perPage: parseInt(perPage),
          query
        });

      res.status(200).json({ pagination, data: logs });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserActivityLogsController();
