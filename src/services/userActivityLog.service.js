const ActivityLog = require("../models/userActivityLog.model");
class UserActivityLogsService {
  async getUserActivityLogs({ query, page, perPage }) {
    const userActivityLogs = await ActivityLog.find(query)
      .collation({ locale: "en", strength: 2 })
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage);
    const totalDocsCount = await ActivityLog.countDocuments(query).collation({
      locale: "en",
      strength: 2
    });
    // Pagination
    const pagination = {};
    pagination.totalResults = totalDocsCount;
    pagination.totalPages = Math.ceil(totalDocsCount / perPage);
    pagination.perPage = perPage;
    pagination.currentPage = page;
    return { userActivityLogs, pagination };
  }
}
module.exports = new UserActivityLogsService();
