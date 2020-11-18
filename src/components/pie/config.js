export const getCases = (data) => {
  if (data.reports && data.reports.usData) {
    return Object.values(data.reports.usData.timeline.cases).pop();
  } if (data.reports && data.reports.stateData) {
    const result = data.reports.stateData.data;
    return result.length ? result[0].confirmed : [];
  }
  return [];
};

export const getDeaths = (data) => {
  if (data.reports && data.reports.usData) {
    return Object.values(data.reports.usData.timeline.deaths).pop();
  } if (data.reports && data.reports.stateData) {
    const result = data.reports.stateData.data;
    return result.length ? result[0].deaths : [];
  }
  return [];
};
