// Import necessary modules and components for testing
import { TestBed } from '@angular/core/testing';

// Import the service to be tested
import { GeocodingService } from './geocoding.service';

// Describe the suite of tests for the GeocodingService
describe('GeocodingService', () => {
  let service: GeocodingService; // Declare a variable to hold the instance of the GeocodingService

  // Before each test, set up the testing environment
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});

    // Create an instance of the GeocodingService and inject it into the test bed
    service = TestBed.inject(GeocodingService);
  });

  // Test case: Check if the GeocodingService is created successfully
  it('should be created', () => {
    // Expect that the GeocodingService instance is truthy (i.e., it exists)
    expect(service).toBeTruthy();
  });
});
