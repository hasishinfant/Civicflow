// CivicFlow core logic
// Advanced logic will be added in Phase 2.


export function calculatePriority(
    severity,
    affectedPeople,
    urgency
  ) {
  
    const populationScore =
      Math.min(affectedPeople / 50, 10);
  
    const priority =
      (severity * 0.4) +
      (populationScore * 0.2) +
      (urgency * 0.4);
  
    return Math.round(priority * 10);
  
  }
  
  
  export function classifyPriority(score) {
  
    if (score >= 90) {
      return "CRITICAL";
    }
  
    if (score >= 75) {
      return "HIGH";
    }
  
    if (score >= 50) {
      return "MEDIUM";
    }
  
    return "LOW";
  }