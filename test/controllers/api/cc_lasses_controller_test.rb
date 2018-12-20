require 'test_helper'

class Api::CcLassesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cc_lasses_index_url
    assert_response :success
  end

  test "should get show" do
    get api_cc_lasses_show_url
    assert_response :success
  end

  test "should get create" do
    get api_cc_lasses_create_url
    assert_response :success
  end

  test "should get update" do
    get api_cc_lasses_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cc_lasses_destroy_url
    assert_response :success
  end

end
