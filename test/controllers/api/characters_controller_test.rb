require 'test_helper'

class Api::CharactersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_characters_index_url
    assert_response :success
  end

  test "should get show" do
    get api_characters_show_url
    assert_response :success
  end

  test "should get create" do
    get api_characters_create_url
    assert_response :success
  end

  test "should get update" do
    get api_characters_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_characters_destroy_url
    assert_response :success
  end

end
