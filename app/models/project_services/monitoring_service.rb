# Base class for monitoring services
#
# These services integrate with a deployment solution like Prometheus
# to provide additional features for environments.
class MonitoringService < Service
  default_value_for :category, 'monitoring'

  def self.supported_events
    %w()
  end

  # Environments have a number of metrics
  def metrics(environment)
    raise NotImplementedError
  end
end
