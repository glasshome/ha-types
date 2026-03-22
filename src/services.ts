import type { Domain } from "./domains";

// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
/** Service names for the abode domain. */
export type AbodeService = 'capture_image' | 'change_setting' | 'trigger_automation';
/** Service names for the adguard domain. */
export type AdguardService = 'add_url' | 'disable_url' | 'enable_url' | 'refresh' | 'remove_url';
/** Service names for the ads domain. */
export type AdsService = 'write_data_by_name';
/** Service names for the advantage_air domain. */
export type AdvantageAirService = 'set_time_to';
/** Service names for the aftership domain. */
export type AftershipService = 'add_tracking' | 'remove_tracking';
/** Service names for the agent_dvr domain. */
export type AgentDvrService = 'disable_alerts' | 'enable_alerts' | 'snapshot' | 'start_recording' | 'stop_recording';
/** Service names for the ai_task domain. */
export type AiTaskService = 'generate_data' | 'generate_image';
/** Service names for the alarm_control_panel domain. */
export type AlarmControlPanelService = 'alarm_arm_away' | 'alarm_arm_custom_bypass' | 'alarm_arm_home' | 'alarm_arm_night' | 'alarm_arm_vacation' | 'alarm_disarm' | 'alarm_trigger';
/** Service names for the alarmdecoder domain. */
export type AlarmdecoderService = 'alarm_keypress' | 'alarm_toggle_chime';
/** Service names for the alert domain. */
export type AlertService = 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the alexa_devices domain. */
export type AlexaDevicesService = 'send_sound' | 'send_text_command';
/** Service names for the amberelectric domain. */
export type AmberelectricService = 'get_forecasts';
/** Service names for the amcrest domain. */
export type AmcrestService = 'disable_audio' | 'disable_motion_recording' | 'disable_recording' | 'enable_audio' | 'enable_motion_recording' | 'enable_recording' | 'goto_preset' | 'ptz_control' | 'set_color_bw' | 'start_tour' | 'stop_tour';
/** Service names for the androidtv domain. */
export type AndroidtvService = 'adb_command' | 'download' | 'learn_sendevent' | 'upload';
/** Service names for the assist_satellite domain. */
export type AssistSatelliteService = 'announce' | 'ask_question' | 'start_conversation';
/** Service names for the automation domain. */
export type AutomationService = 'reload' | 'toggle' | 'trigger' | 'turn_off' | 'turn_on';
/** Service names for the backup domain. */
export type BackupService = 'create' | 'create_automatic';
/** Service names for the bang_olufsen domain. */
export type BangOlufsenService = 'beolink_allstandby' | 'beolink_expand' | 'beolink_join' | 'beolink_leave' | 'beolink_unexpand';
/** Service names for the bayesian domain. */
export type BayesianService = 'reload';
/** Service names for the blackbird domain. */
export type BlackbirdService = 'set_all_zones';
/** Service names for the blink domain. */
export type BlinkService = 'record' | 'save_recent_clips' | 'save_video' | 'send_pin' | 'trigger_camera';
/** Service names for the blue_current domain. */
export type BlueCurrentService = 'start_charge_session';
/** Service names for the bluesound domain. */
export type BluesoundService = 'clear_sleep_timer' | 'join' | 'set_sleep_timer' | 'unjoin';
/** Service names for the bond domain. */
export type BondService = 'set_fan_speed_tracked_state' | 'set_light_brightness_tracked_state' | 'set_light_power_tracked_state' | 'set_switch_power_tracked_state' | 'start_decreasing_brightness' | 'start_increasing_brightness' | 'stop';
/** Service names for the bosch_alarm domain. */
export type BoschAlarmService = 'set_date_time';
/** Service names for the bring domain. */
export type BringService = 'send_message' | 'send_reaction';
/** Service names for the browser domain. */
export type BrowserService = 'browse_url';
/** Service names for the button domain. */
export type ButtonService = 'press';
/** Service names for the calendar domain. */
export type CalendarService = 'create_event' | 'get_events';
/** Service names for the camera domain. */
export type CameraService = 'disable_motion_detection' | 'enable_motion_detection' | 'play_stream' | 'record' | 'snapshot' | 'turn_off' | 'turn_on';
/** Service names for the cast domain. */
export type CastService = 'show_lovelace_view';
/** Service names for the channels domain. */
export type ChannelsService = 'seek_backward' | 'seek_by' | 'seek_forward';
/** Service names for the climate domain. */
export type ClimateService = 'set_fan_mode' | 'set_humidity' | 'set_hvac_mode' | 'set_preset_mode' | 'set_swing_horizontal_mode' | 'set_swing_mode' | 'set_temperature' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the cloud domain. */
export type CloudService = 'remote_connect' | 'remote_disconnect';
/** Service names for the cloudflare domain. */
export type CloudflareService = 'update_records';
/** Service names for the color_extractor domain. */
export type ColorExtractorService = 'turn_on';
/** Service names for the command_line domain. */
export type CommandLineService = 'reload';
/** Service names for the conversation domain. */
export type ConversationService = 'process' | 'reload';
/** Service names for the counter domain. */
export type CounterService = 'decrement' | 'increment' | 'reset' | 'set_value';
/** Service names for the cover domain. */
export type CoverService = 'close_cover' | 'close_cover_tilt' | 'open_cover' | 'open_cover_tilt' | 'set_cover_position' | 'set_cover_tilt_position' | 'stop_cover' | 'stop_cover_tilt' | 'toggle' | 'toggle_cover_tilt';
/** Service names for the date domain. */
export type DateService = 'set_value';
/** Service names for the datetime domain. */
export type DatetimeService = 'set_value';
/** Service names for the debugpy domain. */
export type DebugpyService = 'start';
/** Service names for the deconz domain. */
export type DeconzService = 'configure' | 'device_refresh' | 'remove_orphaned_entries';
/** Service names for the demo domain. */
export type DemoService = 'randomize_device_tracker_data';
/** Service names for the denonavr domain. */
export type DenonavrService = 'get_command' | 'set_dynamic_eq' | 'update_audyssey';
/** Service names for the derivative domain. */
export type DerivativeService = 'reload';
/** Service names for the device_tracker domain. */
export type DeviceTrackerService = 'see';
/** Service names for the downloader domain. */
export type DownloaderService = 'download_file';
/** Service names for the duckdns domain. */
export type DuckdnsService = 'set_txt';
/** Service names for the dynalite domain. */
export type DynaliteService = 'request_area_preset' | 'request_channel_level';
/** Service names for the easyenergy domain. */
export type EasyenergyService = 'get_energy_return_prices' | 'get_energy_usage_prices' | 'get_gas_prices';
/** Service names for the ebusd domain. */
export type EbusdService = 'write';
/** Service names for the ecobee domain. */
export type EcobeeService = 'create_vacation' | 'delete_vacation' | 'resume_program' | 'set_dst_mode' | 'set_fan_min_on_time' | 'set_mic_mode' | 'set_occupancy_modes' | 'set_sensors_used_in_climate';
/** Service names for the ecovacs domain. */
export type EcovacsService = 'raw_get_positions';
/** Service names for the elgato domain. */
export type ElgatoService = 'identify';
/** Service names for the elkm1 domain. */
export type Elkm1Service = 'alarm_arm_home_instant' | 'alarm_arm_night_instant' | 'alarm_arm_vacation' | 'alarm_bypass' | 'alarm_clear_bypass' | 'alarm_display_message' | 'sensor_counter_refresh' | 'sensor_counter_set' | 'sensor_zone_bypass' | 'sensor_zone_trigger' | 'set_time' | 'speak_phrase' | 'speak_word';
/** Service names for the energyzero domain. */
export type EnergyzeroService = 'get_energy_prices' | 'get_gas_prices';
/** Service names for the environment_canada domain. */
export type EnvironmentCanadaService = 'get_forecasts' | 'set_radar_type';
/** Service names for the envisalink domain. */
export type EnvisalinkService = 'alarm_keypress' | 'invoke_custom_function';
/** Service names for the epson domain. */
export type EpsonService = 'select_cmode';
/** Service names for the evohome domain. */
export type EvohomeService = 'clear_zone_override' | 'refresh_system' | 'reset_system' | 'set_system_mode' | 'set_zone_override';
/** Service names for the ezviz domain. */
export type EzvizService = 'set_alarm_detection_sensibility' | 'wake_device';
/** Service names for the fan domain. */
export type FanService = 'decrease_speed' | 'increase_speed' | 'oscillate' | 'set_direction' | 'set_percentage' | 'set_preset_mode' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the ffmpeg domain. */
export type FfmpegService = 'restart' | 'start' | 'stop';
/** Service names for the file domain. */
export type FileService = 'read_file';
/** Service names for the filter domain. */
export type FilterService = 'reload';
/** Service names for the flo domain. */
export type FloService = 'run_health_test' | 'set_away_mode' | 'set_home_mode' | 'set_sleep_mode';
/** Service names for the flume domain. */
export type FlumeService = 'list_notifications';
/** Service names for the flux_led domain. */
export type FluxLedService = 'set_custom_effect' | 'set_music_mode' | 'set_zones';
/** Service names for the foscam domain. */
export type FoscamService = 'ptz' | 'ptz_preset';
/** Service names for the foursquare domain. */
export type FoursquareService = 'checkin';
/** Service names for the freebox domain. */
export type FreeboxService = 'reboot';
/** Service names for the fritz domain. */
export type FritzService = 'dial' | 'set_guest_wifi_password';
/** Service names for the frontend domain. */
export type FrontendService = 'reload_themes' | 'set_theme';
/** Service names for the fully_kiosk domain. */
export type FullyKioskService = 'load_url' | 'set_config' | 'start_application';
/** Service names for the generic domain. */
export type GenericService = 'reload';
/** Service names for the generic_thermostat domain. */
export type GenericThermostatService = 'reload';
/** Service names for the geniushub domain. */
export type GeniushubService = 'set_switch_override' | 'set_zone_mode' | 'set_zone_override';
/** Service names for the google domain. */
export type GoogleService = 'add_event' | 'create_event';
/** Service names for the google_assistant domain. */
export type GoogleAssistantService = 'request_sync';
/** Service names for the google_assistant_sdk domain. */
export type GoogleAssistantSdkService = 'send_text_command';
/** Service names for the google_generative_ai_conversation domain. */
export type GoogleGenerativeAiConversationService = 'generate_content';
/** Service names for the google_mail domain. */
export type GoogleMailService = 'set_vacation';
/** Service names for the google_photos domain. */
export type GooglePhotosService = 'upload';
/** Service names for the google_sheets domain. */
export type GoogleSheetsService = 'append_sheet' | 'get_sheet';
/** Service names for the group domain. */
export type GroupService = 'reload' | 'remove' | 'set';
/** Service names for the guardian domain. */
export type GuardianService = 'pair_sensor' | 'unpair_sensor' | 'upgrade_firmware';
/** Service names for the habitica domain. */
export type HabiticaService = 'abort_quest' | 'accept_quest' | 'cancel_quest' | 'cast_skill' | 'create_daily' | 'create_habit' | 'create_reward' | 'create_todo' | 'get_tasks' | 'leave_quest' | 'reject_quest' | 'score_habit' | 'score_reward' | 'start_quest' | 'transformation' | 'update_daily' | 'update_habit' | 'update_reward' | 'update_todo';
/** Service names for the harmony domain. */
export type HarmonyService = 'change_channel' | 'sync';
/** Service names for the hassio domain. */
export type HassioService = 'addon_restart' | 'addon_start' | 'addon_stdin' | 'addon_stop' | 'backup_full' | 'backup_partial' | 'host_reboot' | 'host_shutdown' | 'restore_full' | 'restore_partial';
/** Service names for the hdmi_cec domain. */
export type HdmiCecService = 'power_on' | 'select_device' | 'send_command' | 'standby' | 'update' | 'volume';
/** Service names for the heos domain. */
export type HeosService = 'get_queue' | 'group_volume_down' | 'group_volume_set' | 'group_volume_up' | 'move_queue_item' | 'remove_from_queue' | 'sign_in' | 'sign_out';
/** Service names for the history_stats domain. */
export type HistoryStatsService = 'reload';
/** Service names for the hive domain. */
export type HiveService = 'boost_heating_off' | 'boost_heating_on' | 'boost_hot_water';
/** Service names for the home_connect domain. */
export type HomeConnectService = 'change_setting' | 'set_program_and_options';
/** Service names for the homeassistant domain. */
export type HomeassistantService = 'check_config' | 'reload_all' | 'reload_config_entry' | 'reload_core_config' | 'reload_custom_templates' | 'restart' | 'save_persistent_states' | 'set_location' | 'stop' | 'toggle' | 'turn_off' | 'turn_on' | 'update_entity';
/** Service names for the homekit domain. */
export type HomekitService = 'reload' | 'reset_accessory' | 'unpair';
/** Service names for the homematic domain. */
export type HomematicService = 'put_paramset' | 'reconnect' | 'set_device_value' | 'set_install_mode' | 'set_variable_value' | 'virtualkey';
/** Service names for the homematicip_cloud domain. */
export type HomematicipCloudService = 'activate_eco_mode_with_duration' | 'activate_eco_mode_with_period' | 'activate_vacation' | 'deactivate_eco_mode' | 'deactivate_vacation' | 'dump_hap_config' | 'reset_energy_counter' | 'set_active_climate_profile' | 'set_home_cooling_mode';
/** Service names for the homeworks domain. */
export type HomeworksService = 'send_command';
/** Service names for the html5 domain. */
export type Html5Service = 'dismiss';
/** Service names for the huawei_lte domain. */
export type HuaweiLteService = 'resume_integration' | 'suspend_integration';
/** Service names for the hue domain. */
export type HueService = 'activate_scene' | 'hue_activate_scene';
/** Service names for the humidifier domain. */
export type HumidifierService = 'set_humidity' | 'set_mode' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the husqvarna_automower domain. */
export type HusqvarnaAutomowerService = 'override_schedule' | 'override_schedule_work_area';
/** Service names for the hydrawise domain. */
export type HydrawiseService = 'resume' | 'start_watering' | 'suspend';
/** Service names for the icloud domain. */
export type IcloudService = 'display_message' | 'lost_device' | 'play_sound' | 'update';
/** Service names for the ifttt domain. */
export type IftttService = 'push_alarm_state' | 'trigger';
/** Service names for the ihc domain. */
export type IhcService = 'pulse' | 'set_runtime_value_bool' | 'set_runtime_value_float' | 'set_runtime_value_int';
/** Service names for the image domain. */
export type ImageService = 'snapshot';
/** Service names for the image_processing domain. */
export type ImageProcessingService = 'scan';
/** Service names for the imap domain. */
export type ImapService = 'delete' | 'fetch' | 'fetch_part' | 'move' | 'seen';
/** Service names for the immich domain. */
export type ImmichService = 'upload_file';
/** Service names for the input_boolean domain. */
export type InputBooleanService = 'reload' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the input_button domain. */
export type InputButtonService = 'press' | 'reload';
/** Service names for the input_datetime domain. */
export type InputDatetimeService = 'reload' | 'set_datetime';
/** Service names for the input_number domain. */
export type InputNumberService = 'decrement' | 'increment' | 'reload' | 'set_value';
/** Service names for the input_select domain. */
export type InputSelectService = 'reload' | 'select_first' | 'select_last' | 'select_next' | 'select_option' | 'select_previous' | 'set_options';
/** Service names for the input_text domain. */
export type InputTextService = 'reload' | 'set_value';
/** Service names for the insteon domain. */
export type InsteonService = 'add_all_link' | 'add_default_links' | 'delete_all_link' | 'load_all_link_database' | 'print_all_link_database' | 'print_im_all_link_database' | 'scene_off' | 'scene_on' | 'x10_all_lights_off' | 'x10_all_lights_on' | 'x10_all_units_off';
/** Service names for the intent_script domain. */
export type IntentScriptService = 'reload';
/** Service names for the iperf3 domain. */
export type Iperf3Service = 'speedtest';
/** Service names for the isy994 domain. */
export type Isy994Service = 'delete_zwave_lock_user_code' | 'get_zwave_parameter' | 'rename_node' | 'send_node_command' | 'send_program_command' | 'send_raw_node_command' | 'set_zwave_lock_user_code' | 'set_zwave_parameter';
/** Service names for the izone domain. */
export type IzoneService = 'airflow_max' | 'airflow_min';
/** Service names for the jewish_calendar domain. */
export type JewishCalendarService = 'count_omer';
/** Service names for the keba domain. */
export type KebaService = 'authorize' | 'deauthorize' | 'disable' | 'enable' | 'request_data' | 'set_current' | 'set_energy' | 'set_failsafe';
/** Service names for the kef domain. */
export type KefService = 'set_desk_db' | 'set_high_hz' | 'set_low_hz' | 'set_mode' | 'set_sub_db' | 'set_treble_db' | 'set_wall_db' | 'update_dsp';
/** Service names for the keymitt_ble domain. */
export type KeymittBleService = 'calibrate';
/** Service names for the kitchen_sink domain. */
export type KitchenSinkService = 'test_service_1';
/** Service names for the knx domain. */
export type KnxService = 'event_register' | 'exposure_register' | 'read' | 'reload' | 'send';
/** Service names for the kodi domain. */
export type KodiService = 'add_to_playlist' | 'call_method';
/** Service names for the lametric domain. */
export type LametricService = 'chart' | 'message';
/** Service names for the lawn_mower domain. */
export type LawnMowerService = 'dock' | 'pause' | 'start_mowing';
/** Service names for the lcn domain. */
export type LcnService = 'dyn_text' | 'led' | 'lock_keys' | 'lock_regulator' | 'output_abs' | 'output_rel' | 'output_toggle' | 'pck' | 'relays' | 'send_keys' | 'var_abs' | 'var_rel' | 'var_reset';
/** Service names for the lifx domain. */
export type LifxService = 'effect_colorloop' | 'effect_flame' | 'effect_morph' | 'effect_move' | 'effect_pulse' | 'effect_sky' | 'effect_stop' | 'paint_theme' | 'set_hev_cycle_state' | 'set_state';
/** Service names for the light domain. */
export type LightService = 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the linkplay domain. */
export type LinkplayService = 'play_preset';
/** Service names for the litterrobot domain. */
export type LitterrobotService = 'set_sleep_mode';
/** Service names for the local_file domain. */
export type LocalFileService = 'update_file_path';
/** Service names for the lock domain. */
export type LockService = 'lock' | 'open' | 'unlock';
/** Service names for the logbook domain. */
export type LogbookService = 'log';
/** Service names for the logger domain. */
export type LoggerService = 'set_default_level' | 'set_level';
/** Service names for the lovelace domain. */
export type LovelaceService = 'reload_resources';
/** Service names for the lyric domain. */
export type LyricService = 'set_hold_time';
/** Service names for the mastodon domain. */
export type MastodonService = 'post';
/** Service names for the matrix domain. */
export type MatrixService = 'react' | 'send_message';
/** Service names for the matter domain. */
export type MatterService = 'water_heater_boost';
/** Service names for the mealie domain. */
export type MealieService = 'get_mealplan' | 'get_recipe' | 'get_recipes' | 'import_recipe' | 'set_mealplan' | 'set_random_mealplan';
/** Service names for the media_extractor domain. */
export type MediaExtractorService = 'extract_media_url' | 'play_media';
/** Service names for the media_player domain. */
export type MediaPlayerService = 'browse_media' | 'clear_playlist' | 'join' | 'media_next_track' | 'media_pause' | 'media_play' | 'media_play_pause' | 'media_previous_track' | 'media_seek' | 'media_stop' | 'play_media' | 'repeat_set' | 'search_media' | 'select_sound_mode' | 'select_source' | 'shuffle_set' | 'toggle' | 'turn_off' | 'turn_on' | 'unjoin' | 'volume_down' | 'volume_mute' | 'volume_set' | 'volume_up';
/** Service names for the melcloud domain. */
export type MelcloudService = 'set_vane_horizontal' | 'set_vane_vertical';
/** Service names for the microsoft_face domain. */
export type MicrosoftFaceService = 'create_group' | 'create_person' | 'delete_group' | 'delete_person' | 'face_person' | 'train_group';
/** Service names for the miele domain. */
export type MieleService = 'get_programs' | 'set_program' | 'set_program_oven';
/** Service names for the mill domain. */
export type MillService = 'set_room_temperature';
/** Service names for the min_max domain. */
export type MinMaxService = 'reload';
/** Service names for the minio domain. */
export type MinioService = 'get' | 'put' | 'remove';
/** Service names for the modbus domain. */
export type ModbusService = 'reload' | 'restart' | 'stop' | 'write_coil' | 'write_register';
/** Service names for the modern_forms domain. */
export type ModernFormsService = 'clear_fan_sleep_timer' | 'clear_light_sleep_timer' | 'set_fan_sleep_timer' | 'set_light_sleep_timer';
/** Service names for the monoprice domain. */
export type MonopriceService = 'restore' | 'snapshot';
/** Service names for the motion_blinds domain. */
export type MotionBlindsService = 'set_absolute_position';
/** Service names for the motioneye domain. */
export type MotioneyeService = 'action' | 'set_text_overlay' | 'snapshot';
/** Service names for the mqtt domain. */
export type MqttService = 'dump' | 'publish' | 'reload';
/** Service names for the music_assistant domain. */
export type MusicAssistantService = 'get_library' | 'get_queue' | 'play_announcement' | 'play_media' | 'search' | 'transfer_queue';
/** Service names for the neato domain. */
export type NeatoService = 'custom_cleaning';
/** Service names for the ness_alarm domain. */
export type NessAlarmService = 'aux' | 'panic';
/** Service names for the netatmo domain. */
export type NetatmoService = 'clear_temperature_setting' | 'register_webhook' | 'set_camera_light' | 'set_person_away' | 'set_persons_home' | 'set_preset_mode_with_end_datetime' | 'set_schedule' | 'set_temperature_with_end_datetime' | 'set_temperature_with_time_period' | 'unregister_webhook';
/** Service names for the netgear_lte domain. */
export type NetgearLteService = 'connect_lte' | 'delete_sms' | 'disconnect_lte' | 'set_option';
/** Service names for the nexia domain. */
export type NexiaService = 'set_aircleaner_mode' | 'set_dehumidify_setpoint' | 'set_humidify_setpoint' | 'set_hvac_run_mode';
/** Service names for the nintendo_parental_controls domain. */
export type NintendoParentalControlsService = 'add_bonus_time';
/** Service names for the nissan_leaf domain. */
export type NissanLeafService = 'start_charge' | 'update';
/** Service names for the nordpool domain. */
export type NordpoolService = 'get_price_indices_for_date' | 'get_prices_for_date';
/** Service names for the notify domain. */
export type NotifyService = 'notify' | 'persistent_notification' | 'send_message';
/** Service names for the ntfy domain. */
export type NtfyService = 'publish';
/** Service names for the nuki domain. */
export type NukiService = 'lock_n_go' | 'set_continuous_mode';
/** Service names for the number domain. */
export type NumberService = 'set_value';
/** Service names for the nws domain. */
export type NwsService = 'get_forecasts_extra';
/** Service names for the nx584 domain. */
export type Nx584Service = 'bypass_zone' | 'unbypass_zone';
/** Service names for the nzbget domain. */
export type NzbgetService = 'pause' | 'resume' | 'set_speed';
/** Service names for the octoprint domain. */
export type OctoprintService = 'printer_connect';
/** Service names for the ohme domain. */
export type OhmeService = 'list_charge_slots' | 'set_price_cap';
/** Service names for the ombi domain. */
export type OmbiService = 'submit_movie_request' | 'submit_music_request' | 'submit_tv_request';
/** Service names for the omnilogic domain. */
export type OmnilogicService = 'set_pump_speed';
/** Service names for the onedrive domain. */
export type OnedriveService = 'upload';
/** Service names for the onvif domain. */
export type OnvifService = 'ptz';
/** Service names for the openai_conversation domain. */
export type OpenaiConversationService = 'generate_content' | 'generate_image';
/** Service names for the openhome domain. */
export type OpenhomeService = 'invoke_pin';
/** Service names for the opentherm_gw domain. */
export type OpenthermGwService = 'reset_gateway' | 'send_transparent_command' | 'set_central_heating_ovrd' | 'set_clock' | 'set_control_setpoint' | 'set_gpio_mode' | 'set_hot_water_ovrd' | 'set_hot_water_setpoint' | 'set_led_mode' | 'set_max_modulation' | 'set_outside_temperature' | 'set_setback_temperature';
/** Service names for the openweathermap domain. */
export type OpenweathermapService = 'get_minute_forecast';
/** Service names for the osoenergy domain. */
export type OsoenergyService = 'get_profile' | 'set_profile' | 'set_v40_min' | 'turn_away_mode_on' | 'turn_off' | 'turn_on';
/** Service names for the overseerr domain. */
export type OverseerrService = 'get_requests';
/** Service names for the persistent_notification domain. */
export type PersistentNotificationService = 'create' | 'dismiss' | 'dismiss_all';
/** Service names for the person domain. */
export type PersonService = 'reload';
/** Service names for the pi_hole domain. */
export type PiHoleService = 'disable';
/** Service names for the picnic domain. */
export type PicnicService = 'add_product';
/** Service names for the pilight domain. */
export type PilightService = 'send';
/** Service names for the plex domain. */
export type PlexService = 'refresh_library';
/** Service names for the profiler domain. */
export type ProfilerService = 'dump_log_objects' | 'dump_sockets' | 'log_current_tasks' | 'log_event_loop_scheduled' | 'log_thread_frames' | 'lru_stats' | 'memory' | 'set_asyncio_debug' | 'start' | 'start_log_object_sources' | 'start_log_objects' | 'stop_log_object_sources' | 'stop_log_objects';
/** Service names for the prosegur domain. */
export type ProsegurService = 'request_image';
/** Service names for the ps4 domain. */
export type Ps4Service = 'send_command';
/** Service names for the python_script domain. */
export type PythonScriptService = 'reload';
/** Service names for the qbittorrent domain. */
export type QbittorrentService = 'get_all_torrents' | 'get_torrents';
/** Service names for the qvr_pro domain. */
export type QvrProService = 'start_record' | 'stop_record';
/** Service names for the rachio domain. */
export type RachioService = 'pause_watering' | 'resume_watering' | 'set_zone_moisture_percent' | 'start_multiple_zone_schedule' | 'start_watering' | 'stop_watering';
/** Service names for the rainbird domain. */
export type RainbirdService = 'set_rain_delay' | 'start_irrigation';
/** Service names for the rainmachine domain. */
export type RainmachineService = 'pause_watering' | 'push_flow_meter_data' | 'push_weather_data' | 'restrict_watering' | 'start_program' | 'start_zone' | 'stop_all' | 'stop_program' | 'stop_zone' | 'unpause_watering' | 'unrestrict_watering';
/** Service names for the recorder domain. */
export type RecorderService = 'disable' | 'enable' | 'get_statistics' | 'purge' | 'purge_entities';
/** Service names for the remember_the_milk domain. */
export type RememberTheMilkService = 'complete_task' | 'create_task';
/** Service names for the remote domain. */
export type RemoteService = 'delete_command' | 'learn_command' | 'send_command' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the renault domain. */
export type RenaultService = 'ac_cancel' | 'ac_set_schedules' | 'ac_start' | 'charge_set_schedules';
/** Service names for the renson domain. */
export type RensonService = 'set_breeze' | 'set_pollution_settings' | 'set_timer_level';
/** Service names for the reolink domain. */
export type ReolinkService = 'play_chime' | 'ptz_move';
/** Service names for the rest domain. */
export type RestService = 'reload';
/** Service names for the rest_command domain. */
export type RestCommandService = 'reload';
/** Service names for the rflink domain. */
export type RflinkService = 'send_command';
/** Service names for the rfxtrx domain. */
export type RfxtrxService = 'send';
/** Service names for the roborock domain. */
export type RoborockService = 'get_maps' | 'get_vacuum_current_position' | 'set_vacuum_goto_position';
/** Service names for the roku domain. */
export type RokuService = 'search';
/** Service names for the roon domain. */
export type RoonService = 'transfer';
/** Service names for the route53 domain. */
export type Route53Service = 'update_records';
/** Service names for the scene domain. */
export type SceneService = 'apply' | 'create' | 'delete' | 'reload' | 'turn_on';
/** Service names for the schedule domain. */
export type ScheduleService = 'get_schedule' | 'reload';
/** Service names for the screenlogic domain. */
export type ScreenlogicService = 'set_color_mode' | 'start_super_chlorination' | 'stop_super_chlorination';
/** Service names for the script domain. */
export type ScriptService = 'reload' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the select domain. */
export type SelectService = 'select_first' | 'select_last' | 'select_next' | 'select_option' | 'select_previous';
/** Service names for the sensibo domain. */
export type SensiboService = 'assume_state' | 'enable_climate_react' | 'enable_pure_boost' | 'enable_timer' | 'full_state' | 'get_device_capabilities';
/** Service names for the seventeentrack domain. */
export type SeventeentrackService = 'add_package' | 'archive_package' | 'get_packages';
/** Service names for the sharkiq domain. */
export type SharkiqService = 'clean_room';
/** Service names for the shopping_list domain. */
export type ShoppingListService = 'add_item' | 'clear_completed_items' | 'complete_all' | 'complete_item' | 'incomplete_all' | 'incomplete_item' | 'remove_item' | 'sort';
/** Service names for the simplisafe domain. */
export type SimplisafeService = 'remove_pin' | 'set_pin' | 'set_system_properties';
/** Service names for the siren domain. */
export type SirenService = 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the smarttub domain. */
export type SmarttubService = 'reset_reminder' | 'set_primary_filtration' | 'set_secondary_filtration' | 'snooze_reminder';
/** Service names for the smtp domain. */
export type SmtpService = 'reload';
/** Service names for the snapcast domain. */
export type SnapcastService = 'join' | 'restore' | 'set_latency' | 'snapshot' | 'unjoin';
/** Service names for the snooz domain. */
export type SnoozService = 'transition_off' | 'transition_on';
/** Service names for the songpal domain. */
export type SongpalService = 'set_sound_setting';
/** Service names for the sonos domain. */
export type SonosService = 'clear_sleep_timer' | 'get_queue' | 'play_queue' | 'remove_from_queue' | 'restore' | 'set_sleep_timer' | 'snapshot' | 'update_alarm';
/** Service names for the soundtouch domain. */
export type SoundtouchService = 'add_zone_slave' | 'create_zone' | 'play_everywhere' | 'remove_zone_slave';
/** Service names for the sql domain. */
export type SqlService = 'query';
/** Service names for the squeezebox domain. */
export type SqueezeboxService = 'call_method' | 'call_query';
/** Service names for the starline domain. */
export type StarlineService = 'set_scan_interval' | 'set_scan_obd_interval' | 'update_state';
/** Service names for the statistics domain. */
export type StatisticsService = 'reload';
/** Service names for the stookwijzer domain. */
export type StookwijzerService = 'get_forecast';
/** Service names for the streamlabswater domain. */
export type StreamlabswaterService = 'set_away_mode';
/** Service names for the subaru domain. */
export type SubaruService = 'unlock_specific_door';
/** Service names for the surepetcare domain. */
export type SurepetcareService = 'set_lock_state' | 'set_pet_location';
/** Service names for the swiss_public_transport domain. */
export type SwissPublicTransportService = 'fetch_connections';
/** Service names for the switch domain. */
export type SwitchService = 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the switcher_kis domain. */
export type SwitcherKisService = 'set_auto_off' | 'turn_on_with_timer';
/** Service names for the synology_dsm domain. */
export type SynologyDsmService = 'reboot' | 'shutdown';
/** Service names for the system_bridge domain. */
export type SystemBridgeService = 'get_process_by_id' | 'get_processes_by_name' | 'open_path' | 'open_url' | 'power_command' | 'send_keypress' | 'send_text';
/** Service names for the system_log domain. */
export type SystemLogService = 'clear' | 'write';
/** Service names for the tado domain. */
export type TadoService = 'add_meter_reading' | 'set_climate_temperature_offset' | 'set_climate_timer' | 'set_water_heater_timer';
/** Service names for the telegram domain. */
export type TelegramService = 'reload';
/** Service names for the telegram_bot domain. */
export type TelegramBotService = 'answer_callback_query' | 'delete_message' | 'edit_caption' | 'edit_message' | 'edit_message_media' | 'edit_replymarkup' | 'leave_chat' | 'send_animation' | 'send_chat_action' | 'send_document' | 'send_location' | 'send_message' | 'send_photo' | 'send_poll' | 'send_sticker' | 'send_video' | 'send_voice' | 'set_message_reaction';
/** Service names for the template domain. */
export type TemplateService = 'reload';
/** Service names for the teslemetry domain. */
export type TeslemetryService = 'add_charge_schedule' | 'add_precondition_schedule' | 'navigation_gps_request' | 'remove_charge_schedule' | 'remove_precondition_schedule' | 'set_scheduled_charging' | 'set_scheduled_departure' | 'speed_limit' | 'time_of_use' | 'valet_mode';
/** Service names for the text domain. */
export type TextService = 'set_value';
/** Service names for the tibber domain. */
export type TibberService = 'get_prices';
/** Service names for the time domain. */
export type TimeService = 'set_value';
/** Service names for the timer domain. */
export type TimerService = 'cancel' | 'change' | 'finish' | 'pause' | 'reload' | 'start';
/** Service names for the todo domain. */
export type TodoService = 'add_item' | 'get_items' | 'remove_completed_items' | 'remove_item' | 'update_item';
/** Service names for the todoist domain. */
export type TodoistService = 'new_task';
/** Service names for the toon domain. */
export type ToonService = 'update';
/** Service names for the totalconnect domain. */
export type TotalconnectService = 'arm_away_instant' | 'arm_home_instant';
/** Service names for the tplink domain. */
export type TplinkService = 'random_effect' | 'sequence_effect';
/** Service names for the tplink_omada domain. */
export type TplinkOmadaService = 'reconnect_client';
/** Service names for the transmission domain. */
export type TransmissionService = 'add_torrent' | 'remove_torrent' | 'start_torrent' | 'stop_torrent';
/** Service names for the trend domain. */
export type TrendService = 'reload';
/** Service names for the tts domain. */
export type TtsService = 'clear_cache' | 'say' | 'speak';
/** Service names for the unifi domain. */
export type UnifiService = 'reconnect_client' | 'remove_clients';
/** Service names for the unifiprotect domain. */
export type UnifiprotectService = 'add_doorbell_text' | 'get_user_keyring_info' | 'remove_doorbell_text' | 'remove_privacy_zone' | 'set_chime_paired_doorbells';
/** Service names for the universal domain. */
export type UniversalService = 'reload';
/** Service names for the upb domain. */
export type UpbService = 'light_blink' | 'light_fade_start' | 'light_fade_stop' | 'link_blink' | 'link_deactivate' | 'link_fade_start' | 'link_fade_stop' | 'link_goto';
/** Service names for the update domain. */
export type UpdateService = 'clear_skipped' | 'install' | 'skip';
/** Service names for the utility_meter domain. */
export type UtilityMeterService = 'calibrate' | 'reset';
/** Service names for the vacuum domain. */
export type VacuumService = 'clean_spot' | 'locate' | 'pause' | 'return_to_base' | 'send_command' | 'set_fan_speed' | 'start' | 'start_pause' | 'stop' | 'toggle' | 'turn_off' | 'turn_on';
/** Service names for the vallox domain. */
export type ValloxService = 'set_profile' | 'set_profile_fan_speed_away' | 'set_profile_fan_speed_boost' | 'set_profile_fan_speed_home';
/** Service names for the valve domain. */
export type ValveService = 'close_valve' | 'open_valve' | 'set_valve_position' | 'stop_valve' | 'toggle';
/** Service names for the velbus domain. */
export type VelbusService = 'clear_cache' | 'scan' | 'set_memo_text' | 'sync_clock';
/** Service names for the velux domain. */
export type VeluxService = 'reboot_gateway';
/** Service names for the verisure domain. */
export type VerisureService = 'capture_smartcam' | 'disable_autolock' | 'enable_autolock';
/** Service names for the vesync domain. */
export type VesyncService = 'update_devices';
/** Service names for the vicare domain. */
export type VicareService = 'set_vicare_mode';
/** Service names for the vizio domain. */
export type VizioService = 'update_setting';
/** Service names for the wake_on_lan domain. */
export type WakeOnLanService = 'send_magic_packet';
/** Service names for the water_heater domain. */
export type WaterHeaterService = 'set_away_mode' | 'set_operation_mode' | 'set_temperature' | 'turn_off' | 'turn_on';
/** Service names for the waze_travel_time domain. */
export type WazeTravelTimeService = 'get_travel_times';
/** Service names for the weather domain. */
export type WeatherService = 'get_forecast' | 'get_forecasts';
/** Service names for the webostv domain. */
export type WebostvService = 'button' | 'command' | 'select_sound_output';
/** Service names for the wemo domain. */
export type WemoService = 'reset_filter_life' | 'set_humidity';
/** Service names for the wilight domain. */
export type WilightService = 'set_pause_time' | 'set_trigger' | 'set_watering_time';
/** Service names for the workday domain. */
export type WorkdayService = 'check_date';
/** Service names for the xiaomi_aqara domain. */
export type XiaomiAqaraService = 'add_device' | 'play_ringtone' | 'remove_device' | 'stop_ringtone';
/** Service names for the xiaomi_miio domain. */
export type XiaomiMiioService = 'fan_reset_filter' | 'fan_set_extra_features' | 'light_eyecare_mode_off' | 'light_eyecare_mode_on' | 'light_night_light_mode_off' | 'light_night_light_mode_on' | 'light_reminder_off' | 'light_reminder_on' | 'light_set_delayed_turn_off' | 'light_set_scene' | 'remote_learn_command' | 'remote_set_led_off' | 'remote_set_led_on' | 'switch_set_power_mode' | 'switch_set_power_price' | 'switch_set_wifi_led_off' | 'switch_set_wifi_led_on' | 'vacuum_clean_segment' | 'vacuum_clean_zone' | 'vacuum_goto' | 'vacuum_remote_control_move' | 'vacuum_remote_control_move_step' | 'vacuum_remote_control_start' | 'vacuum_remote_control_stop';
/** Service names for the yamaha domain. */
export type YamahaService = 'enable_output' | 'menu_cursor' | 'select_scene';
/** Service names for the yardian domain. */
export type YardianService = 'start_irrigation';
/** Service names for the yeelight domain. */
export type YeelightService = 'set_auto_delay_off_scene' | 'set_color_flow_scene' | 'set_color_scene' | 'set_color_temp_scene' | 'set_hsv_scene' | 'set_mode' | 'set_music_mode' | 'start_flow';
/** Service names for the yolink domain. */
export type YolinkService = 'play_on_speaker_hub';
/** Service names for the zha domain. */
export type ZhaService = 'clear_lock_user_code' | 'disable_lock_user_code' | 'enable_lock_user_code' | 'issue_zigbee_cluster_command' | 'issue_zigbee_group_command' | 'permit' | 'reconfigure_device' | 'remove' | 'set_lock_user_code' | 'set_zigbee_cluster_attribute' | 'warning_device_squawk' | 'warning_device_warn';
/** Service names for the zone domain. */
export type ZoneService = 'reload';
/** Service names for the zoneminder domain. */
export type ZoneminderService = 'set_run_state';
/** Service names for the zwave_js domain. */
export type ZwaveJsService = 'bulk_set_partial_config_parameters' | 'clear_lock_usercode' | 'invoke_cc_api' | 'multicast_set_value' | 'ping' | 'refresh_notifications' | 'refresh_value' | 'reset_meter' | 'set_config_parameter' | 'set_lock_configuration' | 'set_lock_usercode' | 'set_value';
export type AbodeCaptureImageFields = {
      entity_id: string;
    };
export type AbodeChangeSettingFields = {
      setting: string;
      value: string;
    };
export type AbodeTriggerAutomationFields = {
      entity_id: string;
    };
export type AdguardAddUrlFields = {
      name: string;
      url: string;
    };
export type AdguardRemoveUrlFields = {
      url: string;
    };
export type AdguardEnableUrlFields = {
      url: string;
    };
export type AdguardDisableUrlFields = {
      url: string;
    };
export type AdguardRefreshFields = {
      force?: boolean;
    };
export type AdsWriteDataByNameFields = {
      adsvar: string;
      adstype: string;
      value: number;
    };
export type AdvantageAirSetTimeToFields = {
      minutes: number;
    };
export type AftershipAddTrackingFields = {
      tracking_number: string;
      title?: string;
      slug?: string;
    };
export type AftershipRemoveTrackingFields = {
      tracking_number: string;
      slug?: string;
    };
export type AgentDvrStartRecordingFields = Record<string, never>;
export type AgentDvrStopRecordingFields = Record<string, never>;
export type AgentDvrEnableAlertsFields = Record<string, never>;
export type AgentDvrDisableAlertsFields = Record<string, never>;
export type AgentDvrSnapshotFields = Record<string, never>;
export type AiTaskGenerateDataFields = {
      task_name: string;
      instructions: string;
      entity_id?: string;
      structure?: Record<string, unknown>;
      attachments?: string;
    };
export type AiTaskGenerateImageFields = {
      task_name: string;
      instructions: string;
      entity_id: string;
      attachments?: string;
    };
export type AlarmControlPanelAlarmDisarmFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmArmCustomBypassFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmArmHomeFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmArmAwayFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmArmNightFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmArmVacationFields = {
      code?: string;
    };
export type AlarmControlPanelAlarmTriggerFields = {
      code?: string;
    };
export type AlarmdecoderAlarmKeypressFields = {
      keypress: string;
    };
export type AlarmdecoderAlarmToggleChimeFields = {
      code: string;
    };
export type AlertToggleFields = Record<string, never>;
export type AlertTurnOffFields = Record<string, never>;
export type AlertTurnOnFields = Record<string, never>;
export type AlexaDevicesSendTextCommandFields = {
      device_id: string;
      text_command: string;
    };
export type AlexaDevicesSendSoundFields = {
      device_id: string;
      sound: string;
    };
export type AmberelectricGetForecastsFields = {
      config_entry_id: unknown;
      channel_type: string;
    };
export type AmcrestEnableRecordingFields = {
      entity_id?: string;
    };
export type AmcrestDisableRecordingFields = {
      entity_id?: string;
    };
export type AmcrestEnableAudioFields = {
      entity_id?: string;
    };
export type AmcrestDisableAudioFields = {
      entity_id?: string;
    };
export type AmcrestEnableMotionRecordingFields = {
      entity_id?: string;
    };
export type AmcrestDisableMotionRecordingFields = {
      entity_id?: string;
    };
export type AmcrestGotoPresetFields = {
      entity_id?: string;
      preset: number;
    };
export type AmcrestSetColorBwFields = {
      entity_id?: string;
      color_bw?: string;
    };
export type AmcrestStartTourFields = {
      entity_id?: string;
    };
export type AmcrestStopTourFields = {
      entity_id?: string;
    };
export type AmcrestPtzControlFields = {
      entity_id?: string;
      movement: string;
      travel_time?: number;
    };
export type AndroidtvAdbCommandFields = {
      command: string;
    };
export type AndroidtvDownloadFields = {
      device_path: string;
      local_path: string;
    };
export type AndroidtvUploadFields = {
      device_path: string;
      local_path: string;
    };
export type AndroidtvLearnSendeventFields = Record<string, never>;
export type AssistSatelliteAnnounceFields = {
      message?: string;
      media_id?: string;
      preannounce?: boolean;
      preannounce_media_id?: string;
    };
export type AssistSatelliteStartConversationFields = {
      start_message?: string;
      start_media_id?: string;
      extra_system_prompt?: string;
      preannounce?: boolean;
      preannounce_media_id?: string;
    };
export type AssistSatelliteAskQuestionFields = {
      entity_id: string;
      question?: string;
      question_media_id?: string;
      preannounce?: boolean;
      preannounce_media_id?: string;
      answers?: Record<string, unknown>;
    };
export type AutomationTurnOnFields = Record<string, never>;
export type AutomationTurnOffFields = {
      stop_actions?: boolean;
    };
export type AutomationToggleFields = Record<string, never>;
export type AutomationTriggerFields = {
      skip_condition?: boolean;
    };
export type AutomationReloadFields = Record<string, never>;
export type BackupCreateFields = Record<string, never>;
export type BackupCreateAutomaticFields = Record<string, never>;
export type BangOlufsenBeolinkAllstandbyFields = Record<string, never>;
export type BangOlufsenBeolinkExpandFields = {
      all_discovered?: boolean;
      jid_options?: unknown;
    };
export type BangOlufsenBeolinkJoinFields = {
      jid_options?: unknown;
    };
export type BangOlufsenBeolinkLeaveFields = Record<string, never>;
export type BangOlufsenBeolinkUnexpandFields = {
      jid_options?: unknown;
    };
export type BayesianReloadFields = Record<string, never>;
export type BlackbirdSetAllZonesFields = {
      entity_id: string;
      source: string;
    };
export type BlinkRecordFields = Record<string, never>;
export type BlinkTriggerCameraFields = Record<string, never>;
export type BlinkSaveVideoFields = {
      filename: string;
    };
export type BlinkSaveRecentClipsFields = {
      file_path: string;
    };
export type BlinkSendPinFields = {
      config_entry_id: unknown;
      pin?: string;
    };
export type BlueCurrentStartChargeSessionFields = {
      device_id: string;
      charging_card_id?: string;
    };
export type BluesoundJoinFields = {
      master: string;
      entity_id?: string;
    };
export type BluesoundUnjoinFields = {
      entity_id?: string;
    };
export type BluesoundSetSleepTimerFields = {
      entity_id?: string;
    };
export type BluesoundClearSleepTimerFields = {
      entity_id?: string;
    };
export type BondSetFanSpeedTrackedStateFields = {
      entity_id: string;
      speed: number;
    };
export type BondSetSwitchPowerTrackedStateFields = {
      entity_id: string;
      power_state: boolean;
    };
export type BondSetLightPowerTrackedStateFields = {
      entity_id: string;
      power_state: boolean;
    };
export type BondSetLightBrightnessTrackedStateFields = {
      entity_id: string;
      brightness: number;
    };
export type BondStartIncreasingBrightnessFields = Record<string, never>;
export type BondStartDecreasingBrightnessFields = Record<string, never>;
export type BondStopFields = Record<string, never>;
export type BoschAlarmSetDateTimeFields = {
      config_entry_id: unknown;
      datetime?: string;
    };
export type BringSendMessageFields = {
      message: string;
      item?: string;
    };
export type BringSendReactionFields = {
      entity_id: string;
      reaction: string;
    };
export type BrowserBrowseUrlFields = {
      url: string;
    };
export type ButtonPressFields = Record<string, never>;
export type CalendarCreateEventFields = {
      summary: string;
      description?: string;
      start_date_time?: string;
      end_date_time?: string;
      start_date?: string;
      end_date?: string;
      in?: unknown;
      location?: string;
    };
export type CalendarGetEventsFields = {
      start_date_time?: string;
      end_date_time?: string;
      duration?: Record<string, unknown>;
    };
export type CameraTurnOffFields = Record<string, never>;
export type CameraTurnOnFields = Record<string, never>;
export type CameraEnableMotionDetectionFields = Record<string, never>;
export type CameraDisableMotionDetectionFields = Record<string, never>;
export type CameraSnapshotFields = {
      filename: string;
    };
export type CameraPlayStreamFields = {
      media_player: string;
      format?: string;
    };
export type CameraRecordFields = {
      filename: string;
      duration?: number;
      lookback?: number;
    };
export type CastShowLovelaceViewFields = {
      entity_id: string;
      dashboard_path?: string;
      view_path: string;
    };
export type ChannelsSeekForwardFields = Record<string, never>;
export type ChannelsSeekBackwardFields = Record<string, never>;
export type ChannelsSeekByFields = {
      seconds: number;
    };
export type ClimateSetPresetModeFields = {
      preset_mode: string;
    };
export type ClimateSetTemperatureFields = {
      temperature?: number;
      target_temp_high?: number;
      target_temp_low?: number;
      hvac_mode?: string;
    };
export type ClimateSetHumidityFields = {
      humidity: number;
    };
export type ClimateSetFanModeFields = {
      fan_mode: string;
    };
export type ClimateSetHvacModeFields = {
      hvac_mode?: unknown;
    };
export type ClimateSetSwingModeFields = {
      swing_mode: string;
    };
export type ClimateSetSwingHorizontalModeFields = {
      swing_horizontal_mode: string;
    };
export type ClimateTurnOnFields = Record<string, never>;
export type ClimateTurnOffFields = Record<string, never>;
export type ClimateToggleFields = Record<string, never>;
export type CloudRemoteConnectFields = Record<string, never>;
export type CloudRemoteDisconnectFields = Record<string, never>;
export type CloudflareUpdateRecordsFields = Record<string, never>;
export type ColorExtractorTurnOnFields = {
      color_extract_url?: string;
      color_extract_path?: string;
    };
export type CommandLineReloadFields = Record<string, never>;
export type ConversationProcessFields = {
      text: string;
      language?: string;
      agent_id?: unknown;
      conversation_id?: string;
    };
export type ConversationReloadFields = {
      language?: string;
      agent_id?: unknown;
    };
export type CounterDecrementFields = Record<string, never>;
export type CounterIncrementFields = Record<string, never>;
export type CounterResetFields = Record<string, never>;
export type CounterSetValueFields = {
      value: number;
    };
export type CoverOpenCoverFields = Record<string, never>;
export type CoverCloseCoverFields = Record<string, never>;
export type CoverToggleFields = Record<string, never>;
export type CoverSetCoverPositionFields = {
      position: number;
    };
export type CoverStopCoverFields = Record<string, never>;
export type CoverOpenCoverTiltFields = Record<string, never>;
export type CoverCloseCoverTiltFields = Record<string, never>;
export type CoverToggleCoverTiltFields = Record<string, never>;
export type CoverSetCoverTiltPositionFields = {
      tilt_position: number;
    };
export type CoverStopCoverTiltFields = Record<string, never>;
export type DateSetValueFields = {
      date: string;
    };
export type DatetimeSetValueFields = {
      datetime: string;
    };
export type DebugpyStartFields = Record<string, never>;
export type DeconzConfigureFields = {
      entity?: string;
      field?: string;
      data: Record<string, unknown>;
      bridgeid?: string;
    };
export type DeconzDeviceRefreshFields = {
      bridgeid?: string;
    };
export type DeconzRemoveOrphanedEntriesFields = {
      bridgeid?: string;
    };
export type DemoRandomizeDeviceTrackerDataFields = Record<string, never>;
export type DenonavrGetCommandFields = {
      command: string;
    };
export type DenonavrSetDynamicEqFields = {
      dynamic_eq?: boolean;
    };
export type DenonavrUpdateAudysseyFields = Record<string, never>;
export type DerivativeReloadFields = Record<string, never>;
export type DeviceTrackerSeeFields = {
      mac?: string;
      dev_id?: string;
      host_name?: string;
      location_name?: string;
      gps?: Record<string, unknown>;
      gps_accuracy?: number;
      battery?: number;
    };
export type DownloaderDownloadFileFields = {
      url: string;
      subdir?: string;
      filename?: string;
      overwrite?: boolean;
    };
export type DuckdnsSetTxtFields = {
      config_entry_id?: unknown;
      txt?: string;
    };
export type DynaliteRequestAreaPresetFields = {
      host?: string;
      area: number;
      channel?: number;
    };
export type DynaliteRequestChannelLevelFields = {
      host?: string;
      area: number;
      channel: number;
    };
export type EasyenergyGetGasPricesFields = {
      config_entry: unknown;
      incl_vat: boolean;
      start?: string;
      end?: string;
    };
export type EasyenergyGetEnergyUsagePricesFields = {
      config_entry: unknown;
      incl_vat: boolean;
      start?: string;
      end?: string;
    };
export type EasyenergyGetEnergyReturnPricesFields = {
      config_entry: unknown;
      start?: string;
      end?: string;
    };
export type EbusdWriteFields = {
      call: Record<string, unknown>;
    };
export type EcobeeCreateVacationFields = {
      entity_id: string;
      vacation_name: string;
      cool_temp: number;
      heat_temp: number;
      start_date?: string;
      start_time?: string;
      end_date?: string;
      end_time?: string;
      fan_mode?: string;
      fan_min_on_time?: number;
    };
export type EcobeeDeleteVacationFields = {
      entity_id: string;
      vacation_name: string;
    };
export type EcobeeResumeProgramFields = {
      entity_id?: string;
      resume_all?: boolean;
    };
export type EcobeeSetFanMinOnTimeFields = {
      entity_id?: string;
      fan_min_on_time: number;
    };
export type EcobeeSetDstModeFields = {
      dst_enabled: boolean;
    };
export type EcobeeSetMicModeFields = {
      mic_enabled: boolean;
    };
export type EcobeeSetOccupancyModesFields = {
      auto_away?: boolean;
      follow_me?: boolean;
    };
export type EcobeeSetSensorsUsedInClimateFields = {
      preset_mode?: string;
      device_ids: string;
    };
export type EcovacsRawGetPositionsFields = Record<string, never>;
export type ElgatoIdentifyFields = Record<string, never>;
export type Elkm1AlarmBypassFields = {
      code: string;
    };
export type Elkm1AlarmClearBypassFields = {
      code: string;
    };
export type Elkm1AlarmArmHomeInstantFields = {
      code: string;
    };
export type Elkm1AlarmArmNightInstantFields = {
      code: string;
    };
export type Elkm1AlarmArmVacationFields = {
      code: string;
    };
export type Elkm1AlarmDisplayMessageFields = {
      clear?: number;
      beep?: boolean;
      timeout?: number;
      line1?: string;
      line2?: string;
    };
export type Elkm1SetTimeFields = {
      prefix?: string;
    };
export type Elkm1SpeakPhraseFields = {
      number: string;
      prefix?: string;
    };
export type Elkm1SpeakWordFields = {
      number: number;
      prefix?: string;
    };
export type Elkm1SensorCounterRefreshFields = Record<string, never>;
export type Elkm1SensorCounterSetFields = {
      value: number;
    };
export type Elkm1SensorZoneBypassFields = {
      code: string;
    };
export type Elkm1SensorZoneTriggerFields = Record<string, never>;
export type EnergyzeroGetGasPricesFields = {
      config_entry: unknown;
      incl_vat: boolean;
      start?: string;
      end?: string;
    };
export type EnergyzeroGetEnergyPricesFields = {
      config_entry: unknown;
      incl_vat: boolean;
      start?: string;
      end?: string;
    };
export type EnvironmentCanadaGetForecastsFields = Record<string, never>;
export type EnvironmentCanadaSetRadarTypeFields = {
      radar_type: string;
    };
export type EnvisalinkAlarmKeypressFields = {
      entity_id: string;
      keypress: string;
    };
export type EnvisalinkInvokeCustomFunctionFields = {
      partition: string;
      pgm: number;
    };
export type EpsonSelectCmodeFields = {
      cmode: string;
    };
export type EvohomeSetSystemModeFields = {
      mode?: string;
      period?: Record<string, unknown>;
      duration?: Record<string, unknown>;
    };
export type EvohomeResetSystemFields = Record<string, never>;
export type EvohomeRefreshSystemFields = Record<string, never>;
export type EvohomeSetZoneOverrideFields = {
      entity_id: string;
      setpoint: number;
      duration?: Record<string, unknown>;
    };
export type EvohomeClearZoneOverrideFields = {
      entity_id: string;
    };
export type EzvizSetAlarmDetectionSensibilityFields = {
      level: number;
      type_value: string;
    };
export type EzvizWakeDeviceFields = Record<string, never>;
export type FanSetPresetModeFields = {
      preset_mode: string;
    };
export type FanSetPercentageFields = {
      percentage: number;
    };
export type FanTurnOnFields = {
      percentage?: number;
      preset_mode?: string;
    };
export type FanTurnOffFields = Record<string, never>;
export type FanOscillateFields = {
      oscillating: boolean;
    };
export type FanToggleFields = Record<string, never>;
export type FanSetDirectionFields = {
      direction: string;
    };
export type FanIncreaseSpeedFields = {
      percentage_step?: number;
    };
export type FanDecreaseSpeedFields = {
      percentage_step?: number;
    };
export type FfmpegRestartFields = {
      entity_id?: string;
    };
export type FfmpegStartFields = {
      entity_id?: string;
    };
export type FfmpegStopFields = {
      entity_id?: string;
    };
export type FileReadFileFields = {
      file_name?: string;
      file_encoding?: string;
    };
export type FilterReloadFields = Record<string, never>;
export type FloSetSleepModeFields = {
      sleep_minutes?: string;
      revert_to_mode?: string;
    };
export type FloSetAwayModeFields = Record<string, never>;
export type FloSetHomeModeFields = Record<string, never>;
export type FloRunHealthTestFields = Record<string, never>;
export type FlumeListNotificationsFields = {
      config_entry: unknown;
    };
export type FluxLedSetCustomEffectFields = {
      colors: Record<string, unknown>;
      speed_pct?: number;
      transition?: string;
    };
export type FluxLedSetZonesFields = {
      colors: Record<string, unknown>;
      speed_pct?: number;
      effect?: string;
    };
export type FluxLedSetMusicModeFields = {
      sensitivity?: number;
      brightness?: number;
      light_screen?: boolean;
      effect?: number;
      foreground_color?: string;
      background_color?: string;
    };
export type FoscamPtzFields = {
      movement: string;
      travel_time?: number;
    };
export type FoscamPtzPresetFields = {
      preset_name: string;
    };
/** Check a user into a Foursquare venue. */
export type FoursquareCheckinFields = {
      /** Altitude of the user's location, in meters. */
      alt?: string;
      /** Vertical accuracy of the user's location, in meters. */
      altAcc?: string;
      /** Who to broadcast this check-in to. Accepts a comma-delimited list of values: private (off the grid) or public (share with friends), facebook share on facebook, twitter share on twitter, followers share with followers (celebrity mode users only), If no valid value is found, the default is public. */
      broadcast?: string;
      /** The event the user is checking in to. */
      eventId?: string;
      /** Latitude and longitude of the user's location. Only specify this field if you have a GPS or other device reported location for the user at the time of check-in. */
      ll?: string;
      /** Accuracy of the user's latitude and longitude, in meters. */
      llAcc?: string;
      /** Mentions in your check-in. This parameter is a semicolon-delimited list of mentions. A single mention is of the form "start,end,userid", where start is the index of the first character in the shout representing the mention, end is the index of the first character in the shout after the mention, and userid is the userid of the user being mentioned. If userid is prefixed with "fbu-", this indicates a Facebook userid that is being mention. Character indices in shouts are 0-based. [Optional] */
      mentions?: string;
      /** A message about your check-in. The maximum length of this field is 140 characters. */
      shout?: string;
      /** The Foursquare venue where the user is checking in. */
      venueId: string;
    };
export type FreeboxRebootFields = Record<string, never>;
export type FritzSetGuestWifiPasswordFields = {
      device_id: string;
      password?: string;
      length?: number;
    };
export type FritzDialFields = {
      device_id: string;
      number: string;
      max_ring_seconds: number;
    };
export type FrontendSetThemeFields = {
      name: string;
      mode?: string;
    };
export type FrontendReloadThemesFields = Record<string, never>;
export type FullyKioskLoadUrlFields = {
      device_id: string;
      url: string;
    };
export type FullyKioskSetConfigFields = {
      device_id: string;
      key: string;
      value: string;
    };
export type FullyKioskStartApplicationFields = {
      application: string;
      device_id: string;
    };
export type GenericReloadFields = Record<string, never>;
export type GenericThermostatReloadFields = Record<string, never>;
export type GeniushubSetZoneModeFields = {
      entity_id: string;
      mode: string;
    };
export type GeniushubSetZoneOverrideFields = {
      entity_id: string;
      temperature: number;
      duration?: Record<string, unknown>;
    };
export type GeniushubSetSwitchOverrideFields = {
      duration?: Record<string, unknown>;
    };
export type GoogleAddEventFields = {
      calendar_id: string;
      summary: string;
      description?: string;
      start_date_time?: string;
      end_date_time?: string;
      start_date?: string;
      end_date?: string;
      in?: Record<string, unknown>;
    };
export type GoogleCreateEventFields = {
      summary: string;
      description?: string;
      start_date_time?: string;
      end_date_time?: string;
      start_date?: string;
      end_date?: string;
      in?: Record<string, unknown>;
      location?: string;
    };
export type GoogleAssistantRequestSyncFields = {
      agent_user_id?: string;
    };
export type GoogleAssistantSdkSendTextCommandFields = {
      command?: string;
      media_player?: string;
    };
export type GoogleGenerativeAiConversationGenerateContentFields = {
      prompt: string;
      filenames?: string;
    };
export type GoogleMailSetVacationFields = {
      enabled: boolean;
      title?: string;
      message: string;
      plain_text?: boolean;
      restrict_contacts?: boolean;
      restrict_domain?: boolean;
      start?: string;
      end?: string;
    };
export type GooglePhotosUploadFields = {
      config_entry_id: unknown;
      filename?: Record<string, unknown>;
      album: string;
    };
export type GoogleSheetsAppendSheetFields = {
      config_entry: unknown;
      worksheet?: string;
      add_created_column?: boolean;
      data: Record<string, unknown>;
    };
export type GoogleSheetsGetSheetFields = {
      config_entry: unknown;
      worksheet?: string;
      rows: number;
    };
export type GroupReloadFields = Record<string, never>;
export type GroupSetFields = {
      object_id: string;
      name?: string;
      icon?: string;
      entities?: string;
      add_entities?: string;
      remove_entities?: string;
      all?: boolean;
    };
export type GroupRemoveFields = {
      object_id: Record<string, unknown>;
    };
export type GuardianPairSensorFields = {
      device_id: string;
      uid: string;
    };
export type GuardianUnpairSensorFields = {
      device_id: string;
      uid: string;
    };
export type GuardianUpgradeFirmwareFields = {
      device_id: string;
      url?: string;
      port?: number;
      filename?: string;
    };
export type HabiticaCastSkillFields = {
      config_entry: unknown;
      skill: string;
      task: string;
    };
export type HabiticaAcceptQuestFields = {
      config_entry: unknown;
    };
export type HabiticaRejectQuestFields = {
      config_entry: unknown;
    };
export type HabiticaStartQuestFields = {
      config_entry: unknown;
    };
export type HabiticaCancelQuestFields = {
      config_entry: unknown;
    };
export type HabiticaAbortQuestFields = {
      config_entry: unknown;
    };
export type HabiticaLeaveQuestFields = {
      config_entry: unknown;
    };
export type HabiticaScoreHabitFields = {
      config_entry: unknown;
      task: string;
      direction: string;
    };
export type HabiticaScoreRewardFields = {
      config_entry: unknown;
      task: string;
    };
export type HabiticaTransformationFields = {
      config_entry: unknown;
      item: string;
      target: string;
    };
export type HabiticaGetTasksFields = {
      config_entry: unknown;
      filter?: unknown;
    };
export type HabiticaUpdateRewardFields = {
      config_entry: unknown;
      task: string;
      rename?: string;
      notes?: string;
      cost?: number;
      tag_options?: unknown;
      developer_options?: unknown;
    };
export type HabiticaCreateRewardFields = {
      config_entry: unknown;
      name: string;
      notes?: string;
      cost: number;
      tag?: string;
      developer_options?: unknown;
    };
export type HabiticaUpdateHabitFields = {
      config_entry: unknown;
      task: string;
      rename?: string;
      notes?: string;
      up_down?: string;
      priority?: string;
      frequency?: string;
      tag_options?: unknown;
      developer_options?: unknown;
    };
export type HabiticaCreateHabitFields = {
      config_entry: unknown;
      name: string;
      notes?: string;
      up_down?: string;
      priority?: string;
      frequency?: string;
      tag?: string;
      developer_options?: unknown;
    };
export type HabiticaUpdateTodoFields = {
      config_entry: unknown;
      task: string;
      rename?: string;
      notes?: string;
      checklist_options?: unknown;
      priority?: string;
      duedate_options?: unknown;
      reminder_options?: unknown;
      tag_options?: unknown;
      developer_options?: unknown;
    };
export type HabiticaCreateTodoFields = {
      config_entry: unknown;
      name: string;
      notes?: string;
      add_checklist_item?: string;
      collapse_checklist?: string;
      priority?: string;
      date?: string;
      reminder?: string;
      tag?: string;
      developer_options?: unknown;
    };
export type HabiticaUpdateDailyFields = {
      config_entry: unknown;
      task: string;
      rename?: string;
      notes?: string;
      checklist_options?: unknown;
      priority?: string;
      start_date?: string;
      frequency?: string;
      every_x?: number;
      repeat_weekly_options?: unknown;
      repeat_monthly_options?: unknown;
      reminder_options?: unknown;
      tag_options?: unknown;
      developer_options?: unknown;
    };
export type HabiticaCreateDailyFields = {
      config_entry: unknown;
      name: string;
      notes?: string;
      add_checklist_item?: string;
      collapse_checklist?: string;
      priority?: string;
      start_date?: string;
      frequency?: string;
      every_x?: number;
      repeat_weekly_options?: unknown;
      repeat_monthly_options?: unknown;
      reminder?: string;
      tag?: string;
      developer_options?: unknown;
    };
export type HarmonySyncFields = Record<string, never>;
export type HarmonyChangeChannelFields = {
      channel: number;
    };
export type HassioAddonStartFields = {
      addon: Record<string, unknown>;
    };
export type HassioAddonRestartFields = {
      addon: Record<string, unknown>;
    };
export type HassioAddonStdinFields = {
      addon: Record<string, unknown>;
    };
export type HassioAddonStopFields = {
      addon: Record<string, unknown>;
    };
export type HassioHostRebootFields = Record<string, never>;
export type HassioHostShutdownFields = Record<string, never>;
export type HassioBackupFullFields = {
      name?: string;
      password?: string;
      compressed?: boolean;
      location?: Record<string, unknown>;
      homeassistant_exclude_database?: boolean;
    };
export type HassioBackupPartialFields = {
      homeassistant?: boolean;
      homeassistant_exclude_database?: boolean;
      addons?: Record<string, unknown>;
      folders?: Record<string, unknown>;
      name?: string;
      password?: string;
      compressed?: boolean;
      location?: Record<string, unknown>;
    };
export type HassioRestoreFullFields = {
      slug: string;
      password?: string;
    };
export type HassioRestorePartialFields = {
      slug: string;
      homeassistant?: boolean;
      folders?: Record<string, unknown>;
      addons?: Record<string, unknown>;
      password?: string;
    };
export type HdmiCecPowerOnFields = Record<string, never>;
export type HdmiCecSelectDeviceFields = {
      device: string;
    };
export type HdmiCecSendCommandFields = {
      att?: Record<string, unknown>;
      cmd?: string;
      dst?: string;
      raw?: string;
      src?: string;
    };
export type HdmiCecStandbyFields = Record<string, never>;
export type HdmiCecUpdateFields = Record<string, never>;
export type HdmiCecVolumeFields = {
      down?: number;
      mute?: string;
      up?: number;
    };
export type HeosGetQueueFields = Record<string, never>;
export type HeosRemoveFromQueueFields = {
      queue_ids: string;
    };
export type HeosMoveQueueItemFields = {
      queue_ids: string;
      destination_position: number;
    };
export type HeosGroupVolumeSetFields = {
      volume_level: number;
    };
export type HeosGroupVolumeDownFields = Record<string, never>;
export type HeosGroupVolumeUpFields = Record<string, never>;
export type HeosSignInFields = {
      username: string;
      password: string;
    };
export type HeosSignOutFields = Record<string, never>;
export type HistoryStatsReloadFields = Record<string, never>;
export type HiveBoostHeatingOnFields = {
      time_period: string;
      temperature?: number;
    };
export type HiveBoostHeatingOffFields = {
      entity_id: string;
    };
export type HiveBoostHotWaterFields = {
      entity_id: string;
      time_period: string;
      on_off: string;
    };
export type HomeConnectSetProgramAndOptionsFields = {
      device_id: string;
      affects_to: string;
      program?: string;
      air_conditioner_options?: unknown;
      cleaning_robot_options?: unknown;
      coffee_maker_options?: unknown;
      dish_washer_options?: unknown;
      dryer_options?: unknown;
      hood_options?: unknown;
      oven_options?: unknown;
      warming_drawer_options?: unknown;
      washer_options?: unknown;
    };
export type HomeConnectChangeSettingFields = {
      device_id: string;
      key: string;
      value: Record<string, unknown>;
    };
export type HomeassistantCheckConfigFields = Record<string, never>;
export type HomeassistantReloadCoreConfigFields = Record<string, never>;
export type HomeassistantRestartFields = Record<string, never>;
export type HomeassistantSetLocationFields = {
      latitude: number;
      longitude: number;
      elevation?: number;
    };
export type HomeassistantStopFields = Record<string, never>;
export type HomeassistantToggleFields = Record<string, never>;
export type HomeassistantTurnOnFields = Record<string, never>;
export type HomeassistantTurnOffFields = Record<string, never>;
export type HomeassistantUpdateEntityFields = {
      entity_id: string;
    };
export type HomeassistantReloadCustomTemplatesFields = Record<string, never>;
export type HomeassistantReloadConfigEntryFields = {
      entry_id?: unknown;
    };
export type HomeassistantSavePersistentStatesFields = Record<string, never>;
export type HomeassistantReloadAllFields = Record<string, never>;
export type HomekitReloadFields = Record<string, never>;
export type HomekitResetAccessoryFields = {
      entity_id: string;
    };
export type HomekitUnpairFields = {
      device_id: string;
    };
export type HomematicVirtualkeyFields = {
      address: string;
      channel: number;
      param: string;
      interface?: string;
    };
export type HomematicSetVariableValueFields = {
      entity_id?: string;
      name: string;
      value: string;
    };
export type HomematicSetDeviceValueFields = {
      address: string;
      channel: number;
      param: string;
      interface?: string;
      value: string;
      value_type?: string;
    };
export type HomematicReconnectFields = Record<string, never>;
export type HomematicSetInstallModeFields = {
      interface: string;
      mode?: number;
      time?: number;
      address?: string;
    };
export type HomematicPutParamsetFields = {
      interface: string;
      address: string;
      paramset_key: string;
      paramset: Record<string, unknown>;
      rx_mode?: string;
    };
export type HomematicipCloudActivateEcoModeWithDurationFields = {
      duration: number;
      accesspoint_id?: string;
    };
export type HomematicipCloudActivateEcoModeWithPeriodFields = {
      endtime: string;
      accesspoint_id?: string;
    };
export type HomematicipCloudActivateVacationFields = {
      endtime: string;
      temperature: number;
      accesspoint_id?: string;
    };
export type HomematicipCloudDeactivateEcoModeFields = {
      accesspoint_id?: string;
    };
export type HomematicipCloudDeactivateVacationFields = {
      accesspoint_id?: string;
    };
export type HomematicipCloudSetActiveClimateProfileFields = {
      entity_id: string;
      climate_profile_index: number;
    };
export type HomematicipCloudDumpHapConfigFields = {
      config_output_path?: string;
      config_output_file_prefix?: string;
      anonymize?: boolean;
    };
export type HomematicipCloudResetEnergyCounterFields = {
      entity_id: string;
    };
export type HomematicipCloudSetHomeCoolingModeFields = {
      cooling?: boolean;
      accesspoint_id?: string;
    };
export type HomeworksSendCommandFields = {
      controller_id: string;
      command: string;
    };
export type Html5DismissFields = {
      target?: Record<string, unknown>;
      data?: Record<string, unknown>;
    };
export type HuaweiLteResumeIntegrationFields = {
      url?: string;
    };
export type HuaweiLteSuspendIntegrationFields = {
      url?: string;
    };
export type HueHueActivateSceneFields = {
      group_name?: string;
      scene_name?: string;
      dynamic?: boolean;
    };
export type HueActivateSceneFields = {
      transition?: number;
      dynamic?: boolean;
      speed?: number;
      brightness?: number;
    };
export type HumidifierSetModeFields = {
      mode: string;
    };
export type HumidifierSetHumidityFields = {
      humidity: number;
    };
export type HumidifierTurnOnFields = Record<string, never>;
export type HumidifierTurnOffFields = Record<string, never>;
export type HumidifierToggleFields = Record<string, never>;
export type HusqvarnaAutomowerOverrideScheduleFields = {
      duration: Record<string, unknown>;
      override_mode: string;
    };
export type HusqvarnaAutomowerOverrideScheduleWorkAreaFields = {
      duration: Record<string, unknown>;
      work_area_id: string;
    };
export type HydrawiseStartWateringFields = {
      duration?: number;
    };
export type HydrawiseSuspendFields = {
      until: string;
    };
export type HydrawiseResumeFields = Record<string, never>;
export type IcloudUpdateFields = {
      account: string;
    };
export type IcloudPlaySoundFields = {
      account: string;
      device_name: string;
    };
export type IcloudDisplayMessageFields = {
      account: string;
      device_name: string;
      message: string;
      sound?: boolean;
    };
export type IcloudLostDeviceFields = {
      account: string;
      device_name: string;
      number: string;
      message: string;
    };
export type IftttPushAlarmStateFields = {
      entity_id: string;
      state: string;
    };
export type IftttTriggerFields = {
      event: string;
      value1?: string;
      value2?: string;
      value3?: string;
    };
export type IhcSetRuntimeValueBoolFields = {
      controller_id?: number;
      ihc_id: number;
      value: boolean;
    };
export type IhcSetRuntimeValueIntFields = {
      controller_id?: number;
      ihc_id: number;
      value: number;
    };
export type IhcSetRuntimeValueFloatFields = {
      controller_id?: number;
      ihc_id: number;
      value: number;
    };
export type IhcPulseFields = {
      controller_id?: number;
      ihc_id: number;
    };
export type ImageSnapshotFields = {
      filename: string;
    };
export type ImageProcessingScanFields = Record<string, never>;
export type ImapSeenFields = {
      entry: unknown;
      uid: string;
    };
export type ImapMoveFields = {
      entry: unknown;
      uid: string;
      seen?: boolean;
      target_folder: string;
    };
export type ImapDeleteFields = {
      entry: unknown;
      uid: string;
    };
export type ImapFetchFields = {
      entry: unknown;
      uid: string;
    };
export type ImapFetchPartFields = {
      entry: unknown;
      uid: string;
      part: string;
    };
export type ImmichUploadFileFields = {
      config_entry_id: unknown;
      file: string;
      album_id?: string;
    };
export type InputBooleanToggleFields = Record<string, never>;
export type InputBooleanTurnOffFields = Record<string, never>;
export type InputBooleanTurnOnFields = Record<string, never>;
export type InputBooleanReloadFields = Record<string, never>;
export type InputButtonPressFields = Record<string, never>;
export type InputButtonReloadFields = Record<string, never>;
export type InputDatetimeSetDatetimeFields = {
      date?: string;
      time?: string;
      datetime?: string;
      timestamp?: number;
    };
export type InputDatetimeReloadFields = Record<string, never>;
export type InputNumberDecrementFields = Record<string, never>;
export type InputNumberIncrementFields = Record<string, never>;
export type InputNumberSetValueFields = {
      value: number;
    };
export type InputNumberReloadFields = Record<string, never>;
export type InputSelectSelectNextFields = {
      cycle?: boolean;
    };
export type InputSelectSelectOptionFields = {
      option: unknown;
    };
export type InputSelectSelectPreviousFields = {
      cycle?: boolean;
    };
export type InputSelectSelectFirstFields = Record<string, never>;
export type InputSelectSelectLastFields = Record<string, never>;
export type InputSelectSetOptionsFields = {
      options: string;
    };
export type InputSelectReloadFields = Record<string, never>;
export type InputTextSetValueFields = {
      value: string;
    };
export type InputTextReloadFields = Record<string, never>;
export type InsteonAddAllLinkFields = {
      group: number;
      mode: string;
    };
export type InsteonDeleteAllLinkFields = {
      group: number;
    };
export type InsteonLoadAllLinkDatabaseFields = {
      entity_id: string;
      reload?: boolean;
    };
export type InsteonPrintAllLinkDatabaseFields = {
      entity_id: string;
    };
export type InsteonPrintImAllLinkDatabaseFields = Record<string, never>;
export type InsteonX10AllUnitsOffFields = {
      housecode: string;
    };
export type InsteonX10AllLightsOnFields = {
      housecode: string;
    };
export type InsteonX10AllLightsOffFields = {
      housecode: string;
    };
export type InsteonSceneOnFields = {
      group: number;
    };
export type InsteonSceneOffFields = {
      group: number;
    };
export type InsteonAddDefaultLinksFields = {
      entity_id: string;
    };
export type IntentScriptReloadFields = Record<string, never>;
export type Iperf3SpeedtestFields = {
      host?: string;
    };
export type Isy994SendRawNodeCommandFields = {
      command: string;
      value?: number;
      parameters?: Record<string, unknown>;
      unit_of_measurement?: number;
    };
export type Isy994SendNodeCommandFields = {
      command: string;
    };
export type Isy994GetZwaveParameterFields = {
      parameter?: number;
    };
export type Isy994SetZwaveParameterFields = {
      parameter: number;
      value: string;
      size: string;
    };
export type Isy994SetZwaveLockUserCodeFields = {
      user_num: number;
      code: number;
    };
export type Isy994DeleteZwaveLockUserCodeFields = {
      user_num: number;
    };
export type Isy994RenameNodeFields = {
      name: string;
    };
export type Isy994SendProgramCommandFields = {
      address?: string;
      name?: string;
      command: string;
      isy?: string;
    };
export type IzoneAirflowMinFields = {
      airflow: number;
    };
export type IzoneAirflowMaxFields = {
      airflow: number;
    };
export type JewishCalendarCountOmerFields = {
      date?: string;
      after_sunset?: boolean;
      nusach: string;
      language?: unknown;
    };
export type KebaRequestDataFields = Record<string, never>;
export type KebaAuthorizeFields = Record<string, never>;
export type KebaDeauthorizeFields = Record<string, never>;
export type KebaSetEnergyFields = {
      energy?: number;
    };
export type KebaSetCurrentFields = {
      current?: number;
    };
export type KebaEnableFields = Record<string, never>;
export type KebaDisableFields = Record<string, never>;
export type KebaSetFailsafeFields = {
      failsafe_timeout?: number;
      failsafe_fallback?: number;
      failsafe_persist?: number;
    };
export type KefUpdateDspFields = Record<string, never>;
export type KefSetModeFields = {
      desk_mode?: boolean;
      wall_mode?: boolean;
      phase_correction?: boolean;
      high_pass?: boolean;
      sub_polarity?: string;
      bass_extension?: string;
    };
export type KefSetDeskDbFields = {
      db_value?: number;
    };
export type KefSetWallDbFields = {
      db_value?: number;
    };
export type KefSetTrebleDbFields = {
      db_value?: number;
    };
export type KefSetHighHzFields = {
      hz_value?: number;
    };
export type KefSetLowHzFields = {
      hz_value?: number;
    };
export type KefSetSubDbFields = {
      db_value?: number;
    };
export type KeymittBleCalibrateFields = {
      entity_id?: string;
      depth: number;
      duration: number;
      mode: string;
    };
export type KitchenSinkTestService1Fields = {
      field_1: number;
      field_2: string;
      advanced_fields?: unknown;
    };
export type KnxSendFields = {
      address: Record<string, unknown>;
      payload: Record<string, unknown>;
      type?: string;
      response: boolean;
    };
export type KnxReadFields = {
      address: Record<string, unknown>;
    };
export type KnxEventRegisterFields = {
      address: Record<string, unknown>;
      type?: string;
      remove: boolean;
    };
export type KnxExposureRegisterFields = {
      address: string;
      type: string;
      entity_id: string;
      attribute?: string;
      default?: Record<string, unknown>;
      remove: boolean;
    };
export type KnxReloadFields = Record<string, never>;
export type KodiAddToPlaylistFields = {
      media_type: string;
      media_id?: string;
      media_name?: string;
      artist_name?: string;
    };
export type KodiCallMethodFields = {
      method: string;
    };
export type LametricChartFields = {
      device_id: string;
      data: Record<string, unknown>;
      sound?: string;
      cycles?: number;
      icon_type?: string;
      priority?: string;
    };
export type LametricMessageFields = {
      device_id: string;
      message: string;
      icon?: string;
      sound?: string;
      cycles?: number;
      icon_type?: string;
      priority?: string;
    };
export type LawnMowerStartMowingFields = Record<string, never>;
export type LawnMowerDockFields = Record<string, never>;
export type LawnMowerPauseFields = Record<string, never>;
export type LcnOutputAbsFields = {
      device_id: string;
      output: string;
      brightness: number;
      transition?: number;
    };
export type LcnOutputRelFields = {
      device_id: string;
      output: string;
      brightness: number;
    };
export type LcnOutputToggleFields = {
      device_id: string;
      output: string;
      transition?: number;
    };
export type LcnRelaysFields = {
      device_id: string;
      state: string;
    };
export type LcnLedFields = {
      device_id: string;
      led: string;
      state: string;
    };
export type LcnVarAbsFields = {
      device_id: string;
      variable: string;
      value?: number;
      unit_of_measurement?: string;
    };
export type LcnVarResetFields = {
      device_id: string;
      variable: string;
    };
export type LcnVarRelFields = {
      device_id: string;
      variable: string;
      value?: number;
      unit_of_measurement?: string;
      value_reference?: string;
    };
export type LcnLockRegulatorFields = {
      device_id: string;
      setpoint: string;
      state?: boolean;
    };
export type LcnSendKeysFields = {
      device_id: string;
      keys: string;
      state?: string;
      time?: number;
      time_unit?: string;
    };
export type LcnLockKeysFields = {
      device_id: string;
      table?: string;
      state: string;
      time?: number;
      time_unit?: string;
    };
export type LcnDynTextFields = {
      device_id: string;
      row: number;
      text: string;
    };
export type LcnPckFields = {
      device_id: string;
      pck: string;
    };
export type LifxSetHevCycleStateFields = {
      power: boolean;
      duration?: number;
    };
export type LifxSetStateFields = {
      infrared?: number;
      zones?: Record<string, unknown>;
      transition?: number;
      power?: boolean;
    };
export type LifxEffectPulseFields = {
      mode?: string;
      brightness?: number;
      brightness_pct?: number;
      color_name?: string;
      rgb_color?: Record<string, unknown>;
      period?: number;
      cycles?: number;
      power_on?: boolean;
    };
export type LifxEffectColorloopFields = {
      brightness?: number;
      brightness_pct?: number;
      saturation_min?: number;
      saturation_max?: number;
      transition?: number;
      period?: number;
      change?: number;
      spread?: number;
      power_on?: boolean;
    };
export type LifxEffectMoveFields = {
      speed?: number;
      direction?: string;
      theme?: string;
      power_on?: boolean;
    };
export type LifxEffectFlameFields = {
      speed?: number;
      power_on?: boolean;
    };
export type LifxEffectMorphFields = {
      speed?: number;
      palette?: Record<string, unknown>;
      theme?: string;
      power_on?: boolean;
    };
export type LifxEffectSkyFields = {
      power_on?: boolean;
      speed?: number;
      sky_type?: string;
      cloud_saturation_min?: number;
      cloud_saturation_max?: number;
      palette?: Record<string, unknown>;
    };
export type LifxEffectStopFields = Record<string, never>;
export type LifxPaintThemeFields = {
      palette?: Record<string, unknown>;
      theme?: string;
      transition?: number;
      power_on?: boolean;
    };
export type LightTurnOnFields = {
      transition?: number;
      rgb_color?: string;
      color_temp_kelvin?: string;
      brightness_pct?: number;
      brightness_step_pct?: number;
      effect?: string;
      advanced_fields?: unknown;
    };
export type LightTurnOffFields = {
      transition?: number;
      advanced_fields?: unknown;
    };
export type LightToggleFields = {
      transition?: number;
      rgb_color?: string;
      color_temp_kelvin?: string;
      brightness_pct?: number;
      effect?: string;
      advanced_fields?: unknown;
    };
export type LinkplayPlayPresetFields = {
      preset_number: number;
    };
export type LitterrobotSetSleepModeFields = {
      enabled: boolean;
      start_time?: string;
    };
export type LocalFileUpdateFilePathFields = {
      file_path: string;
    };
export type LockLockFields = {
      code?: string;
    };
export type LockOpenFields = {
      code?: string;
    };
export type LockUnlockFields = {
      code?: string;
    };
export type LogbookLogFields = {
      name: string;
      message: string;
      entity_id?: string;
      domain?: string;
    };
export type LoggerSetDefaultLevelFields = {
      level?: string;
    };
export type LoggerSetLevelFields = Record<string, never>;
export type LovelaceReloadResourcesFields = Record<string, never>;
export type LyricSetHoldTimeFields = {
      time_period: string;
    };
export type MastodonPostFields = {
      config_entry_id: unknown;
      status: string;
      visibility?: string;
      idempotency_key?: string;
      content_warning?: string;
      language?: unknown;
      media?: string;
      media_description?: string;
      media_warning: boolean;
    };
export type MatrixSendMessageFields = {
      message: string;
      target: string;
      data?: Record<string, unknown>;
    };
export type MatrixReactFields = {
      reaction: string;
      room: string;
      message_id: string;
    };
export type MatterWaterHeaterBoostFields = {
      duration: number;
      emergency_boost?: boolean;
      temporary_setpoint?: number;
    };
export type MealieGetMealplanFields = {
      config_entry_id: unknown;
      start_date?: string;
      end_date?: string;
    };
export type MealieGetRecipeFields = {
      config_entry_id: unknown;
      recipe_id: string;
    };
export type MealieGetRecipesFields = {
      config_entry_id: unknown;
      search_terms?: string;
      result_limit?: number;
    };
export type MealieImportRecipeFields = {
      config_entry_id: unknown;
      url: string;
      include_tags?: boolean;
    };
export type MealieSetRandomMealplanFields = {
      config_entry_id: unknown;
      date?: string;
      entry_type?: string;
    };
export type MealieSetMealplanFields = {
      config_entry_id: unknown;
      date?: string;
      entry_type?: string;
      recipe_id?: string;
      note_title?: string;
      note_text?: string;
    };
export type MediaExtractorPlayMediaFields = {
      media_content_id: string;
      media_content_type: string;
    };
export type MediaExtractorExtractMediaUrlFields = {
      url: string;
      format_query?: string;
    };
export type MediaPlayerTurnOnFields = Record<string, never>;
export type MediaPlayerTurnOffFields = Record<string, never>;
export type MediaPlayerToggleFields = Record<string, never>;
export type MediaPlayerVolumeUpFields = Record<string, never>;
export type MediaPlayerVolumeDownFields = Record<string, never>;
export type MediaPlayerVolumeMuteFields = {
      is_volume_muted: boolean;
    };
export type MediaPlayerVolumeSetFields = {
      volume_level: number;
    };
export type MediaPlayerMediaPlayPauseFields = Record<string, never>;
export type MediaPlayerMediaPlayFields = Record<string, never>;
export type MediaPlayerMediaPauseFields = Record<string, never>;
export type MediaPlayerMediaStopFields = Record<string, never>;
export type MediaPlayerMediaNextTrackFields = Record<string, never>;
export type MediaPlayerMediaPreviousTrackFields = Record<string, never>;
export type MediaPlayerMediaSeekFields = {
      seek_position: number;
    };
export type MediaPlayerPlayMediaFields = {
      media: string;
      enqueue?: string;
      announce?: boolean;
    };
export type MediaPlayerBrowseMediaFields = {
      media_content_type?: string;
      media_content_id?: string;
    };
export type MediaPlayerSearchMediaFields = {
      search_query: string;
      media_content_type?: string;
      media_content_id?: string;
      media_filter_classes?: string;
    };
export type MediaPlayerSelectSourceFields = {
      source: string;
    };
export type MediaPlayerSelectSoundModeFields = {
      sound_mode?: string;
    };
export type MediaPlayerClearPlaylistFields = Record<string, never>;
export type MediaPlayerShuffleSetFields = {
      shuffle: boolean;
    };
export type MediaPlayerRepeatSetFields = {
      repeat: string;
    };
export type MediaPlayerJoinFields = {
      group_members: string;
    };
export type MediaPlayerUnjoinFields = Record<string, never>;
export type MelcloudSetVaneHorizontalFields = {
      position: string;
    };
export type MelcloudSetVaneVerticalFields = {
      position: string;
    };
export type MicrosoftFaceCreateGroupFields = {
      name: string;
    };
export type MicrosoftFaceCreatePersonFields = {
      group: string;
      name: string;
    };
export type MicrosoftFaceDeleteGroupFields = {
      name: string;
    };
export type MicrosoftFaceDeletePersonFields = {
      group: string;
      name: string;
    };
export type MicrosoftFaceFacePersonFields = {
      camera_entity: string;
      group: string;
      person: string;
    };
export type MicrosoftFaceTrainGroupFields = {
      group: string;
    };
export type MieleGetProgramsFields = {
      device_id: string;
    };
export type MieleSetProgramFields = {
      device_id: string;
      program_id: number;
    };
export type MieleSetProgramOvenFields = {
      device_id: string;
      program_id: number;
      temperature?: number;
      duration?: Record<string, unknown>;
    };
export type MillSetRoomTemperatureFields = {
      room_name: string;
      away_temp?: number;
      comfort_temp?: number;
      sleep_temp?: number;
    };
export type MinMaxReloadFields = Record<string, never>;
export type MinioGetFields = {
      bucket: string;
      key: string;
      file_path: string;
    };
export type MinioPutFields = {
      bucket: string;
      key: string;
      file_path: string;
    };
export type MinioRemoveFields = {
      bucket: string;
      key: string;
    };
export type ModbusReloadFields = Record<string, never>;
export type ModbusWriteCoilFields = {
      address: number;
      state: Record<string, unknown>;
      slave?: number;
      hub?: string;
    };
export type ModbusWriteRegisterFields = {
      address: number;
      slave?: number;
      value: Record<string, unknown>;
      hub?: string;
    };
export type ModbusStopFields = {
      hub?: string;
    };
export type ModbusRestartFields = {
      hub?: string;
    };
export type ModernFormsSetLightSleepTimerFields = {
      sleep_time: number;
    };
export type ModernFormsClearLightSleepTimerFields = Record<string, never>;
export type ModernFormsSetFanSleepTimerFields = {
      sleep_time: number;
    };
export type ModernFormsClearFanSleepTimerFields = Record<string, never>;
export type MonopriceSnapshotFields = Record<string, never>;
export type MonopriceRestoreFields = Record<string, never>;
export type MotionBlindsSetAbsolutePositionFields = {
      absolute_position: number;
      tilt_position?: number;
      width?: number;
    };
export type MotioneyeSetTextOverlayFields = {
      left_text?: string;
      custom_left_text?: string;
      right_text?: string;
      custom_right_text?: string;
    };
export type MotioneyeActionFields = {
      action: string;
    };
export type MotioneyeSnapshotFields = Record<string, never>;
export type MqttPublishFields = {
      topic: string;
      payload?: unknown;
      evaluate_payload?: boolean;
      qos?: string;
      retain?: boolean;
    };
export type MqttDumpFields = {
      topic?: string;
      duration?: number;
    };
export type MqttReloadFields = Record<string, never>;
export type MusicAssistantPlayMediaFields = {
      media_id: Record<string, unknown>;
      media_type?: string;
      artist?: string;
      album?: string;
      enqueue?: string;
      radio_mode?: boolean;
    };
export type MusicAssistantPlayAnnouncementFields = {
      url: string;
      use_pre_announce?: boolean;
      announce_volume?: number;
    };
export type MusicAssistantTransferQueueFields = {
      source_player?: string;
      auto_play?: boolean;
    };
export type MusicAssistantGetQueueFields = Record<string, never>;
export type MusicAssistantSearchFields = {
      config_entry_id: unknown;
      name: string;
      media_type?: string;
      artist?: string;
      album?: string;
      limit?: number;
      library_only?: boolean;
    };
export type MusicAssistantGetLibraryFields = {
      config_entry_id: unknown;
      media_type: string;
      favorite?: boolean;
      search?: string;
      limit?: number;
      offset?: number;
      order_by?: string;
      album_type?: string;
      album_artists_only?: boolean;
    };
export type NeatoCustomCleaningFields = {
      mode?: number;
      navigation?: number;
      category?: number;
      zone?: string;
    };
export type NessAlarmAuxFields = {
      output_id: number;
      state?: boolean;
    };
export type NessAlarmPanicFields = {
      code: string;
    };
export type NetatmoSetCameraLightFields = {
      camera_light_mode: string;
    };
export type NetatmoSetScheduleFields = {
      schedule_name: string;
    };
export type NetatmoSetPresetModeWithEndDatetimeFields = {
      preset_mode: string;
      end_datetime: string;
    };
export type NetatmoSetTemperatureWithEndDatetimeFields = {
      target_temperature: number;
      end_datetime: string;
    };
export type NetatmoSetTemperatureWithTimePeriodFields = {
      target_temperature: number;
      time_period: Record<string, unknown>;
    };
export type NetatmoClearTemperatureSettingFields = Record<string, never>;
export type NetatmoSetPersonsHomeFields = {
      persons: Record<string, unknown>;
    };
export type NetatmoSetPersonAwayFields = {
      person?: string;
    };
export type NetatmoRegisterWebhookFields = Record<string, never>;
export type NetatmoUnregisterWebhookFields = Record<string, never>;
export type NetgearLteDeleteSmsFields = {
      host?: string;
      sms_id: Record<string, unknown>;
    };
export type NetgearLteSetOptionFields = {
      host?: string;
      failover?: string;
      autoconnect?: string;
    };
export type NetgearLteConnectLteFields = {
      host?: string;
    };
export type NetgearLteDisconnectLteFields = {
      host?: string;
    };
export type NexiaSetAircleanerModeFields = {
      aircleaner_mode: string;
    };
export type NexiaSetHumidifySetpointFields = {
      humidity: number;
    };
export type NexiaSetDehumidifySetpointFields = {
      humidity: number;
    };
export type NexiaSetHvacRunModeFields = {
      run_mode?: string;
      hvac_mode?: string;
    };
export type NintendoParentalControlsAddBonusTimeFields = {
      bonus_time: number;
      device_id: string;
    };
export type NissanLeafStartChargeFields = {
      vin: string;
    };
export type NissanLeafUpdateFields = {
      vin: string;
    };
export type NordpoolGetPricesForDateFields = {
      config_entry: unknown;
      date: string;
      areas?: string;
      currency?: string;
    };
export type NordpoolGetPriceIndicesForDateFields = {
      config_entry: unknown;
      date: string;
      areas?: string;
      currency?: string;
      resolution?: string;
    };
export type NotifyNotifyFields = {
      message: string;
      title?: string;
      target?: Record<string, unknown>;
      data?: Record<string, unknown>;
    };
export type NotifySendMessageFields = {
      message: string;
      title?: string;
    };
export type NotifyPersistentNotificationFields = {
      message: string;
      title?: string;
      data?: Record<string, unknown>;
    };
export type NtfyPublishFields = {
      title?: string;
      message?: string;
      markdown?: unknown;
      tags?: string;
      priority?: string;
      click?: string;
      delay?: Record<string, unknown>;
      attach?: string;
      email?: string;
      call?: string;
      icon?: string;
    };
export type NukiLockNGoFields = {
      unlatch?: boolean;
    };
export type NukiSetContinuousModeFields = {
      enable?: boolean;
    };
export type NumberSetValueFields = {
      value: string;
    };
export type NwsGetForecastsExtraFields = {
      type: string;
    };
export type Nx584BypassZoneFields = {
      zone: number;
    };
export type Nx584UnbypassZoneFields = {
      zone: number;
    };
export type NzbgetPauseFields = Record<string, never>;
export type NzbgetResumeFields = Record<string, never>;
export type NzbgetSetSpeedFields = {
      speed?: number;
    };
export type OctoprintPrinterConnectFields = {
      device_id: string;
      profile_name?: string;
      port?: string;
      baudrate?: string;
    };
export type OhmeListChargeSlotsFields = {
      config_entry: unknown;
    };
export type OhmeSetPriceCapFields = {
      config_entry: unknown;
      price_cap: number;
    };
export type OmbiSubmitMovieRequestFields = {
      name: string;
    };
export type OmbiSubmitTvRequestFields = {
      name: string;
      season?: string;
    };
export type OmbiSubmitMusicRequestFields = {
      name: string;
    };
export type OmnilogicSetPumpSpeedFields = {
      speed: number;
    };
export type OnedriveUploadFields = {
      config_entry_id: unknown;
      filename?: Record<string, unknown>;
      destination_folder: string;
    };
export type OnvifPtzFields = {
      tilt?: string;
      pan?: string;
      zoom?: string;
      distance?: number;
      speed?: number;
      continuous_duration?: number;
      preset?: string;
      move_mode?: string;
    };
export type OpenaiConversationGenerateImageFields = {
      config_entry: unknown;
      prompt: string;
      size?: string;
      quality?: string;
      style?: string;
    };
export type OpenaiConversationGenerateContentFields = {
      config_entry: unknown;
      prompt: string;
      filenames?: string;
    };
export type OpenhomeInvokePinFields = {
      pin: number;
    };
export type OpenthermGwResetGatewayFields = {
      gateway_id: string;
    };
export type OpenthermGwSetCentralHeatingOvrdFields = {
      gateway_id: string;
      ch_override: boolean;
    };
export type OpenthermGwSetClockFields = {
      gateway_id: string;
      date?: string;
      time?: string;
    };
export type OpenthermGwSetControlSetpointFields = {
      gateway_id: string;
      temperature: number;
    };
export type OpenthermGwSetHotWaterOvrdFields = {
      gateway_id: string;
      dhw_override: string;
    };
export type OpenthermGwSetHotWaterSetpointFields = {
      gateway_id: string;
      temperature?: number;
    };
export type OpenthermGwSetGpioModeFields = {
      gateway_id: string;
      id: string;
      mode: number;
    };
export type OpenthermGwSetLedModeFields = {
      gateway_id: string;
      id: string;
      mode: string;
    };
export type OpenthermGwSetMaxModulationFields = {
      gateway_id: string;
      level: number;
    };
export type OpenthermGwSetOutsideTemperatureFields = {
      gateway_id: string;
      temperature: number;
    };
export type OpenthermGwSetSetbackTemperatureFields = {
      gateway_id: string;
      temperature: number;
    };
export type OpenthermGwSendTransparentCommandFields = {
      gateway_id: string;
      transp_cmd: string;
      transp_arg: string;
    };
export type OpenweathermapGetMinuteForecastFields = Record<string, never>;
export type OsoenergyGetProfileFields = Record<string, never>;
export type OsoenergySetProfileFields = {
      hour_00?: number;
      hour_01?: number;
      hour_02?: number;
      hour_03?: number;
      hour_04?: number;
      hour_05?: number;
      hour_06?: number;
      hour_07?: number;
      hour_08?: number;
      hour_09?: number;
      hour_10?: number;
      hour_11?: number;
      hour_12?: number;
      hour_13?: number;
      hour_14?: number;
      hour_15?: number;
      hour_16?: number;
      hour_17?: number;
      hour_18?: number;
      hour_19?: number;
      hour_20?: number;
      hour_21?: number;
      hour_22?: number;
      hour_23?: number;
    };
export type OsoenergySetV40MinFields = {
      v40_min: number;
    };
export type OsoenergyTurnAwayModeOnFields = {
      duration_days: number;
    };
export type OsoenergyTurnOffFields = {
      until_temp_limit: boolean;
    };
export type OsoenergyTurnOnFields = {
      until_temp_limit: boolean;
    };
export type OverseerrGetRequestsFields = {
      config_entry_id: unknown;
      status?: string;
      sort_order?: string;
      requested_by?: number;
    };
export type PersistentNotificationCreateFields = {
      message: string;
      title?: string;
      notification_id?: string;
    };
export type PersistentNotificationDismissFields = {
      notification_id: string;
    };
export type PersistentNotificationDismissAllFields = Record<string, never>;
export type PersonReloadFields = Record<string, never>;
export type PiHoleDisableFields = {
      duration: string;
    };
export type PicnicAddProductFields = {
      config_entry_id: unknown;
      product_id?: string;
      product_name?: string;
      amount?: number;
    };
export type PilightSendFields = {
      protocol: Record<string, unknown>;
    };
export type PlexRefreshLibraryFields = {
      server_name?: string;
      library_name: string;
    };
export type ProfilerStartFields = {
      seconds?: number;
    };
export type ProfilerMemoryFields = {
      seconds?: number;
    };
export type ProfilerStartLogObjectsFields = {
      scan_interval?: number;
    };
export type ProfilerStopLogObjectsFields = Record<string, never>;
export type ProfilerDumpLogObjectsFields = {
      type: string;
    };
export type ProfilerStartLogObjectSourcesFields = {
      scan_interval?: number;
      max_objects?: number;
    };
export type ProfilerStopLogObjectSourcesFields = Record<string, never>;
export type ProfilerLruStatsFields = Record<string, never>;
export type ProfilerDumpSocketsFields = Record<string, never>;
export type ProfilerLogThreadFramesFields = Record<string, never>;
export type ProfilerLogEventLoopScheduledFields = Record<string, never>;
export type ProfilerSetAsyncioDebugFields = {
      enabled?: boolean;
    };
export type ProfilerLogCurrentTasksFields = Record<string, never>;
export type ProsegurRequestImageFields = Record<string, never>;
export type Ps4SendCommandFields = {
      entity_id: string;
      command: string;
    };
export type PythonScriptReloadFields = Record<string, never>;
export type QbittorrentGetTorrentsFields = {
      device_id: string;
      torrent_filter: string;
    };
export type QbittorrentGetAllTorrentsFields = {
      torrent_filter: string;
    };
export type QvrProStartRecordFields = {
      guid: string;
    };
export type QvrProStopRecordFields = {
      guid: string;
    };
export type RachioSetZoneMoisturePercentFields = {
      percent: number;
    };
export type RachioStartWateringFields = {
      duration?: Record<string, unknown>;
    };
export type RachioStartMultipleZoneScheduleFields = {
      duration: Record<string, unknown>;
    };
export type RachioPauseWateringFields = {
      devices?: string;
      duration?: number;
    };
export type RachioResumeWateringFields = {
      devices?: string;
    };
export type RachioStopWateringFields = {
      devices?: string;
    };
export type RainbirdStartIrrigationFields = {
      duration: number;
    };
export type RainbirdSetRainDelayFields = {
      config_entry_id: unknown;
      duration: number;
    };
export type RainmachinePauseWateringFields = {
      device_id: string;
      seconds: number;
    };
export type RainmachineRestrictWateringFields = {
      device_id: string;
      duration: string;
    };
export type RainmachineStartProgramFields = Record<string, never>;
export type RainmachineStartZoneFields = {
      zone_run_time?: number;
    };
export type RainmachineStopAllFields = {
      device_id: string;
    };
export type RainmachineStopProgramFields = Record<string, never>;
export type RainmachineStopZoneFields = Record<string, never>;
export type RainmachineUnpauseWateringFields = {
      device_id: string;
    };
export type RainmachinePushFlowMeterDataFields = {
      device_id: string;
      value: number;
      unit_of_measurement?: string;
    };
export type RainmachinePushWeatherDataFields = {
      device_id: string;
      timestamp?: string;
      mintemp?: number;
      maxtemp?: number;
      temperature?: number;
      wind?: number;
      solarrad?: number;
      et?: number;
      qpf?: number;
      rain?: number;
      minrh?: number;
      maxrh?: number;
      condition?: string;
      pressure?: number;
      dewpoint?: number;
    };
export type RainmachineUnrestrictWateringFields = {
      device_id: string;
    };
export type RecorderPurgeFields = {
      keep_days?: number;
      repack?: boolean;
      apply_filter?: boolean;
    };
export type RecorderPurgeEntitiesFields = {
      entity_id?: string;
      domains?: Record<string, unknown>;
      entity_globs?: Record<string, unknown>;
      keep_days?: number;
    };
export type RecorderDisableFields = Record<string, never>;
export type RecorderEnableFields = Record<string, never>;
export type RecorderGetStatisticsFields = {
      start_time: string;
      end_time?: string;
      statistic_ids: unknown;
      period: string;
      types: string;
      units?: Record<string, unknown>;
    };
export type RememberTheMilkCreateTaskFields = {
      name: string;
      id?: string;
    };
export type RememberTheMilkCompleteTaskFields = {
      id: string;
    };
export type RemoteTurnOnFields = {
      activity?: string;
    };
export type RemoteToggleFields = Record<string, never>;
export type RemoteTurnOffFields = Record<string, never>;
export type RemoteSendCommandFields = {
      device?: string;
      command: Record<string, unknown>;
      num_repeats?: number;
      delay_secs?: number;
      hold_secs?: number;
    };
export type RemoteLearnCommandFields = {
      device?: string;
      command?: Record<string, unknown>;
      command_type?: string;
      alternative?: boolean;
      timeout?: number;
    };
export type RemoteDeleteCommandFields = {
      device?: string;
      command: Record<string, unknown>;
    };
export type RenaultAcStartFields = {
      vehicle: string;
      temperature: number;
      when?: string;
    };
export type RenaultAcCancelFields = {
      vehicle: string;
    };
export type RenaultAcSetSchedulesFields = {
      vehicle: string;
      schedules: Record<string, unknown>;
    };
export type RenaultChargeSetSchedulesFields = {
      vehicle: string;
      schedules: Record<string, unknown>;
    };
export type RensonSetTimerLevelFields = {
      timer_level: string;
      minutes: number;
    };
export type RensonSetBreezeFields = {
      breeze_level?: string;
      temperature?: number;
      activate: boolean;
    };
export type RensonSetPollutionSettingsFields = {
      day_pollution_level?: string;
      night_pollution_level?: string;
      humidity_control?: boolean;
      airquality_control?: boolean;
      co2_control?: boolean;
      co2_threshold?: number;
      co2_hysteresis?: number;
    };
export type ReolinkPtzMoveFields = {
      speed: number;
    };
export type ReolinkPlayChimeFields = {
      device_id: string;
      ringtone: string;
    };
export type RestReloadFields = Record<string, never>;
export type RestCommandReloadFields = Record<string, never>;
export type RflinkSendCommandFields = {
      command: string;
      device_id: string;
    };
export type RfxtrxSendFields = {
      event: string;
    };
export type RoborockGetMapsFields = Record<string, never>;
export type RoborockSetVacuumGotoPositionFields = {
      x: string;
      y: string;
    };
export type RoborockGetVacuumCurrentPositionFields = Record<string, never>;
export type RokuSearchFields = {
      keyword: string;
    };
export type RoonTransferFields = {
      transfer_id: string;
    };
export type Route53UpdateRecordsFields = Record<string, never>;
export type SceneTurnOnFields = {
      transition?: number;
    };
export type SceneReloadFields = Record<string, never>;
export type SceneApplyFields = {
      entities: Record<string, unknown>;
      transition?: number;
    };
export type SceneCreateFields = {
      scene_id: string;
      entities?: Record<string, unknown>;
      snapshot_entities?: string;
    };
export type SceneDeleteFields = Record<string, never>;
export type ScheduleReloadFields = Record<string, never>;
export type ScheduleGetScheduleFields = Record<string, never>;
export type ScreenlogicSetColorModeFields = {
      config_entry: unknown;
      color_mode: string;
    };
export type ScreenlogicStartSuperChlorinationFields = {
      config_entry: unknown;
      runtime?: number;
    };
export type ScreenlogicStopSuperChlorinationFields = {
      config_entry: unknown;
    };
export type ScriptReloadFields = Record<string, never>;
export type ScriptTurnOnFields = Record<string, never>;
export type ScriptTurnOffFields = Record<string, never>;
export type ScriptToggleFields = Record<string, never>;
export type SelectSelectFirstFields = Record<string, never>;
export type SelectSelectLastFields = Record<string, never>;
export type SelectSelectNextFields = {
      cycle?: boolean;
    };
export type SelectSelectOptionFields = {
      option: unknown;
    };
export type SelectSelectPreviousFields = {
      cycle?: boolean;
    };
export type SensiboAssumeStateFields = {
      state: string;
    };
export type SensiboEnableTimerFields = {
      minutes?: number;
    };
export type SensiboEnablePureBoostFields = {
      ac_integration: boolean;
      geo_integration: boolean;
      indoor_integration: boolean;
      outdoor_integration: boolean;
      sensitivity: string;
    };
export type SensiboFullStateFields = {
      mode: string;
      target_temperature?: number;
      fan_mode?: string;
      swing_mode?: string;
      horizontal_swing_mode?: string;
      light?: string;
    };
export type SensiboEnableClimateReactFields = {
      high_temperature_threshold: number;
      high_temperature_state: Record<string, unknown>;
      low_temperature_threshold: number;
      low_temperature_state: Record<string, unknown>;
      smart_type: string;
    };
export type SensiboGetDeviceCapabilitiesFields = {
      hvac_mode: string;
    };
export type SeventeentrackGetPackagesFields = {
      package_state?: string;
      config_entry_id: unknown;
    };
export type SeventeentrackAddPackageFields = {
      package_tracking_number: string;
      package_friendly_name: string;
      config_entry_id: unknown;
    };
export type SeventeentrackArchivePackageFields = {
      package_tracking_number: string;
      config_entry_id: unknown;
    };
export type SharkiqCleanRoomFields = {
      rooms: string;
    };
export type ShoppingListAddItemFields = {
      name: string;
    };
export type ShoppingListRemoveItemFields = {
      name: string;
    };
export type ShoppingListCompleteItemFields = {
      name: string;
    };
export type ShoppingListIncompleteItemFields = {
      name: string;
    };
export type ShoppingListCompleteAllFields = Record<string, never>;
export type ShoppingListIncompleteAllFields = Record<string, never>;
export type ShoppingListClearCompletedItemsFields = Record<string, never>;
export type ShoppingListSortFields = {
      reverse?: boolean;
    };
export type SimplisafeRemovePinFields = {
      device_id: string;
      label_or_pin: string;
    };
export type SimplisafeSetPinFields = {
      device_id: string;
      label: string;
      pin: string;
    };
export type SimplisafeSetSystemPropertiesFields = {
      device_id: string;
      alarm_duration?: number;
      alarm_volume?: string;
      chime_volume?: string;
      entry_delay_away?: number;
      entry_delay_home?: number;
      exit_delay_away?: number;
      exit_delay_home?: number;
      light?: boolean;
      voice_prompt_volume?: string;
    };
export type SirenTurnOnFields = {
      tone?: string;
      volume_level?: number;
      duration?: string;
    };
export type SirenTurnOffFields = Record<string, never>;
export type SirenToggleFields = Record<string, never>;
export type SmarttubSetPrimaryFiltrationFields = {
      duration?: number;
      start_hour?: number;
    };
export type SmarttubSetSecondaryFiltrationFields = {
      mode: string;
    };
export type SmarttubSnoozeReminderFields = {
      days: number;
    };
export type SmarttubResetReminderFields = {
      days: number;
    };
export type SmtpReloadFields = Record<string, never>;
export type SnapcastJoinFields = {
      master: string;
      entity_id?: Record<string, unknown>;
    };
export type SnapcastUnjoinFields = Record<string, never>;
export type SnapcastSnapshotFields = Record<string, never>;
export type SnapcastRestoreFields = Record<string, never>;
export type SnapcastSetLatencyFields = {
      latency: number;
    };
export type SnoozTransitionOnFields = {
      duration?: number;
      volume?: number;
    };
export type SnoozTransitionOffFields = {
      duration?: number;
    };
export type SongpalSetSoundSettingFields = {
      name: string;
      value: string;
    };
export type SonosSnapshotFields = {
      entity_id?: string;
      with_group?: boolean;
    };
export type SonosRestoreFields = {
      entity_id?: string;
      with_group?: boolean;
    };
export type SonosSetSleepTimerFields = {
      sleep_time?: number;
    };
export type SonosClearSleepTimerFields = Record<string, never>;
export type SonosPlayQueueFields = {
      queue_position?: number;
    };
export type SonosRemoveFromQueueFields = {
      queue_position?: number;
    };
export type SonosGetQueueFields = Record<string, never>;
export type SonosUpdateAlarmFields = {
      alarm_id: number;
      time?: string;
      volume?: number;
      enabled?: boolean;
      include_linked_zones?: boolean;
    };
export type SoundtouchPlayEverywhereFields = {
      master: string;
    };
export type SoundtouchCreateZoneFields = {
      master: string;
      slaves: string;
    };
export type SoundtouchAddZoneSlaveFields = {
      master: string;
      slaves: string;
    };
export type SoundtouchRemoveZoneSlaveFields = {
      master: string;
      slaves: string;
    };
export type SqlQueryFields = {
      query: string;
      db_url?: string;
    };
export type SqueezeboxCallMethodFields = {
      command: string;
      parameters?: Record<string, unknown>;
    };
export type SqueezeboxCallQueryFields = {
      command: string;
      parameters?: Record<string, unknown>;
    };
export type StarlineUpdateStateFields = Record<string, never>;
export type StarlineSetScanIntervalFields = {
      scan_interval?: number;
    };
export type StarlineSetScanObdIntervalFields = {
      scan_interval?: number;
    };
export type StatisticsReloadFields = Record<string, never>;
export type StookwijzerGetForecastFields = {
      config_entry_id: unknown;
    };
export type StreamlabswaterSetAwayModeFields = {
      away_mode: string;
      location_id?: string;
    };
export type SubaruUnlockSpecificDoorFields = {
      door: string;
    };
export type SurepetcareSetLockStateFields = {
      flap_id: string;
      lock_state: string;
    };
export type SurepetcareSetPetLocationFields = {
      pet_name: string;
      location: string;
    };
export type SwissPublicTransportFetchConnectionsFields = {
      config_entry_id: unknown;
      limit?: number;
    };
export type SwitchTurnOnFields = Record<string, never>;
export type SwitchTurnOffFields = Record<string, never>;
export type SwitchToggleFields = Record<string, never>;
export type SwitcherKisSetAutoOffFields = {
      auto_off: string;
    };
export type SwitcherKisTurnOnWithTimerFields = {
      timer_minutes: number;
    };
export type SynologyDsmRebootFields = {
      serial?: string;
    };
export type SynologyDsmShutdownFields = {
      serial?: string;
    };
export type SystemBridgeGetProcessByIdFields = {
      bridge: string;
      id: number;
    };
export type SystemBridgeGetProcessesByNameFields = {
      bridge: string;
      name: string;
    };
export type SystemBridgeOpenPathFields = {
      bridge: string;
      path: string;
    };
export type SystemBridgeOpenUrlFields = {
      bridge: string;
      url: string;
    };
export type SystemBridgeSendKeypressFields = {
      bridge: string;
      key: string;
    };
export type SystemBridgeSendTextFields = {
      bridge: string;
      text: string;
    };
export type SystemBridgePowerCommandFields = {
      bridge: string;
      command: string;
    };
export type SystemLogClearFields = Record<string, never>;
export type SystemLogWriteFields = {
      message: string;
      level?: string;
      logger?: string;
    };
export type TadoSetClimateTimerFields = {
      temperature: number;
      time_period?: string;
      requested_overlay?: string;
    };
export type TadoSetWaterHeaterTimerFields = {
      time_period: string;
      temperature?: number;
    };
export type TadoSetClimateTemperatureOffsetFields = {
      offset?: number;
    };
export type TadoAddMeterReadingFields = {
      config_entry: unknown;
      reading: number;
    };
export type TelegramReloadFields = Record<string, never>;
export type TelegramBotSendMessageFields = {
      config_entry_id?: unknown;
      message: string;
      title?: string;
      target?: string;
      parse_mode?: string;
      disable_notification?: boolean;
      disable_web_page_preview?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendChatActionFields = {
      config_entry_id?: unknown;
      chat_action?: string;
      target?: string;
      message_thread_id?: number;
    };
export type TelegramBotSendPhotoFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      target?: string;
      parse_mode?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendStickerFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      sticker_id?: string;
      target?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendAnimationFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      target?: string;
      parse_mode?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendVideoFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      target?: string;
      parse_mode?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendVoiceFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      target?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendDocumentFields = {
      config_entry_id?: unknown;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      target?: string;
      parse_mode?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendLocationFields = {
      config_entry_id?: unknown;
      latitude: number;
      longitude: number;
      target?: string;
      disable_notification?: boolean;
      timeout?: number;
      keyboard?: string;
      inline_keyboard?: Record<string, unknown>;
      message_tag?: string;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotSendPollFields = {
      config_entry_id?: unknown;
      target?: string;
      question: string;
      options: string;
      is_anonymous?: boolean;
      allows_multiple_answers?: boolean;
      open_period?: number;
      disable_notification?: boolean;
      timeout?: number;
      reply_to_message_id?: number;
      message_thread_id?: number;
    };
export type TelegramBotEditMessageFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
      message?: string;
      title?: string;
      parse_mode?: string;
      disable_web_page_preview?: boolean;
      inline_keyboard?: Record<string, unknown>;
    };
export type TelegramBotEditMessageMediaFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
      timeout?: number;
      media_type?: string;
      url?: string;
      url_options?: unknown;
      file?: string;
      caption?: string;
      inline_keyboard?: Record<string, unknown>;
    };
export type TelegramBotEditCaptionFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
      caption: string;
      inline_keyboard?: Record<string, unknown>;
    };
export type TelegramBotEditReplymarkupFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
      inline_keyboard: Record<string, unknown>;
    };
export type TelegramBotAnswerCallbackQueryFields = {
      config_entry_id?: unknown;
      message: string;
      callback_query_id: string;
      show_alert: boolean;
      timeout?: number;
    };
export type TelegramBotDeleteMessageFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
    };
export type TelegramBotLeaveChatFields = {
      config_entry_id?: unknown;
      chat_id: string;
    };
export type TelegramBotSetMessageReactionFields = {
      config_entry_id?: unknown;
      message_id: string;
      chat_id: string;
      reaction: string;
      is_big?: boolean;
    };
export type TemplateReloadFields = Record<string, never>;
export type TeslemetryNavigationGpsRequestFields = {
      device_id: string;
      gps: Record<string, unknown>;
      order?: number;
    };
export type TeslemetryTimeOfUseFields = {
      device_id: string;
      tou_settings: Record<string, unknown>;
    };
export type TeslemetrySetScheduledChargingFields = {
      device_id: string;
      enable: boolean;
      time?: string;
    };
export type TeslemetrySetScheduledDepartureFields = {
      device_id: string;
      enable?: boolean;
      preconditioning_enabled?: boolean;
      preconditioning_weekdays_only?: boolean;
      departure_time?: string;
      off_peak_charging_enabled?: boolean;
      off_peak_charging_weekdays_only?: boolean;
      end_off_peak_time?: string;
    };
export type TeslemetryValetModeFields = {
      device_id: string;
      enable: boolean;
      pin: number;
    };
export type TeslemetrySpeedLimitFields = {
      device_id: string;
      enable: boolean;
      pin: number;
    };
export type TeslemetryAddChargeScheduleFields = {
      device_id: string;
      days_of_week: string;
      enable: boolean;
      location?: Record<string, unknown>;
      start_time?: string;
      end_time?: string;
      one_time?: boolean;
      id?: number;
      name?: string;
    };
export type TeslemetryRemoveChargeScheduleFields = {
      device_id: string;
      id: number;
    };
export type TeslemetryAddPreconditionScheduleFields = {
      device_id: string;
      days_of_week: string;
      enable: boolean;
      location?: Record<string, unknown>;
      precondition_time: string;
      id?: number;
      one_time?: boolean;
      name?: string;
    };
export type TeslemetryRemovePreconditionScheduleFields = {
      device_id: string;
      id: number;
    };
export type TextSetValueFields = {
      value: string;
    };
export type TibberGetPricesFields = {
      start?: string;
      end?: string;
    };
export type TimeSetValueFields = {
      time: string;
    };
export type TimerStartFields = {
      duration?: string;
    };
export type TimerPauseFields = Record<string, never>;
export type TimerCancelFields = Record<string, never>;
export type TimerFinishFields = Record<string, never>;
export type TimerChangeFields = {
      duration: string;
    };
export type TimerReloadFields = Record<string, never>;
export type TodoGetItemsFields = {
      status?: string;
    };
export type TodoAddItemFields = {
      item: string;
      due_date?: string;
      due_datetime?: string;
      description?: string;
    };
export type TodoUpdateItemFields = {
      item: string;
      rename?: string;
      status?: string;
      due_date?: string;
      due_datetime?: string;
      description?: string;
    };
export type TodoRemoveItemFields = {
      item: string;
    };
export type TodoRemoveCompletedItemsFields = Record<string, never>;
export type TodoistNewTaskFields = {
      content: string;
      description?: string;
      project?: string;
      section?: string;
      labels?: string;
      assignee?: string;
      priority?: number;
      due_date_string?: string;
      due_date_lang?: string;
      due_date?: string;
      reminder_date_string?: string;
      reminder_date_lang?: string;
      reminder_date?: string;
    };
export type ToonUpdateFields = {
      display?: string;
    };
export type TotalconnectArmAwayInstantFields = Record<string, never>;
export type TotalconnectArmHomeInstantFields = Record<string, never>;
export type TplinkSequenceEffectFields = {
      sequence: Record<string, unknown>;
      segments?: Record<string, unknown>;
      brightness?: number;
      duration?: number;
      repeat_times?: number;
      transition?: number;
      spread?: number;
      direction?: number;
    };
export type TplinkRandomEffectFields = {
      init_states: Record<string, unknown>;
      backgrounds?: Record<string, unknown>;
      segments?: Record<string, unknown>;
      brightness?: number;
      duration?: number;
      transition?: number;
      fadeoff?: number;
      hue_range?: Record<string, unknown>;
      saturation_range?: Record<string, unknown>;
      brightness_range?: Record<string, unknown>;
      transition_range?: Record<string, unknown>;
      random_seed?: number;
    };
export type TplinkOmadaReconnectClientFields = {
      mac: string;
    };
export type TransmissionAddTorrentFields = {
      entry_id: unknown;
      torrent: string;
      download_path?: string;
    };
export type TransmissionRemoveTorrentFields = {
      entry_id: unknown;
      id: string;
      delete_data: boolean;
    };
export type TransmissionStartTorrentFields = {
      entry_id: unknown;
      id: string;
    };
export type TransmissionStopTorrentFields = {
      entry_id: unknown;
      id: string;
    };
export type TrendReloadFields = Record<string, never>;
export type TtsSayFields = {
      entity_id: string;
      message: string;
      cache?: boolean;
      language?: string;
      options?: Record<string, unknown>;
    };
export type TtsSpeakFields = {
      media_player_entity_id: string;
      message: string;
      cache?: boolean;
      language?: string;
      options?: Record<string, unknown>;
    };
export type TtsClearCacheFields = Record<string, never>;
export type UnifiReconnectClientFields = {
      device_id: string;
    };
export type UnifiRemoveClientsFields = Record<string, never>;
export type UnifiprotectAddDoorbellTextFields = {
      device_id: string;
      message: string;
    };
export type UnifiprotectRemoveDoorbellTextFields = {
      device_id: string;
      message: string;
    };
export type UnifiprotectSetChimePairedDoorbellsFields = {
      device_id: string;
      doorbells?: Record<string, unknown>;
    };
export type UnifiprotectRemovePrivacyZoneFields = {
      device_id: string;
      name: string;
    };
export type UnifiprotectGetUserKeyringInfoFields = {
      device_id: string;
    };
export type UniversalReloadFields = Record<string, never>;
export type UpbLightFadeStartFields = {
      brightness?: number;
      brightness_pct?: number;
      rate?: number;
    };
export type UpbLightFadeStopFields = Record<string, never>;
export type UpbLightBlinkFields = {
      rate?: number;
    };
export type UpbLinkDeactivateFields = Record<string, never>;
export type UpbLinkGotoFields = {
      brightness?: number;
      brightness_pct?: number;
      rate?: number;
    };
export type UpbLinkFadeStartFields = {
      brightness?: number;
      brightness_pct?: number;
      rate?: number;
    };
export type UpbLinkFadeStopFields = Record<string, never>;
export type UpbLinkBlinkFields = {
      blink_rate?: number;
    };
export type UpdateInstallFields = {
      version?: string;
      backup?: boolean;
    };
export type UpdateSkipFields = Record<string, never>;
export type UpdateClearSkippedFields = Record<string, never>;
export type UtilityMeterResetFields = Record<string, never>;
export type UtilityMeterCalibrateFields = {
      value: string;
    };
export type VacuumTurnOnFields = Record<string, never>;
export type VacuumTurnOffFields = Record<string, never>;
export type VacuumToggleFields = Record<string, never>;
export type VacuumStopFields = Record<string, never>;
export type VacuumLocateFields = Record<string, never>;
export type VacuumStartPauseFields = Record<string, never>;
export type VacuumStartFields = Record<string, never>;
export type VacuumPauseFields = Record<string, never>;
export type VacuumReturnToBaseFields = Record<string, never>;
export type VacuumCleanSpotFields = Record<string, never>;
export type VacuumSendCommandFields = {
      command: string;
      params?: Record<string, unknown>;
    };
export type VacuumSetFanSpeedFields = {
      fan_speed: string;
    };
export type ValloxSetProfileFanSpeedHomeFields = {
      fan_speed: number;
    };
export type ValloxSetProfileFanSpeedAwayFields = {
      fan_speed: number;
    };
export type ValloxSetProfileFanSpeedBoostFields = {
      fan_speed: number;
    };
export type ValloxSetProfileFields = {
      profile: string;
      duration?: number;
    };
export type ValveOpenValveFields = Record<string, never>;
export type ValveCloseValveFields = Record<string, never>;
export type ValveToggleFields = Record<string, never>;
export type ValveSetValvePositionFields = {
      position: number;
    };
export type ValveStopValveFields = Record<string, never>;
export type VelbusSyncClockFields = {
      config_entry?: unknown;
    };
export type VelbusScanFields = {
      config_entry?: unknown;
    };
export type VelbusClearCacheFields = {
      config_entry?: unknown;
      address?: number;
    };
export type VelbusSetMemoTextFields = {
      config_entry?: unknown;
      address: number;
      memo_text?: string;
    };
export type VeluxRebootGatewayFields = Record<string, never>;
export type VerisureCaptureSmartcamFields = Record<string, never>;
export type VerisureEnableAutolockFields = Record<string, never>;
export type VerisureDisableAutolockFields = Record<string, never>;
export type VesyncUpdateDevicesFields = Record<string, never>;
export type VicareSetVicareModeFields = {
      vicare_mode: string;
    };
export type VizioUpdateSettingFields = {
      setting_type: string;
      setting_name: string;
      new_value: string;
    };
export type WakeOnLanSendMagicPacketFields = {
      mac: string;
      broadcast_address?: string;
      broadcast_port?: number;
    };
export type WaterHeaterSetAwayModeFields = {
      away_mode: boolean;
    };
export type WaterHeaterSetTemperatureFields = {
      temperature: number;
      operation_mode?: string;
    };
export type WaterHeaterSetOperationModeFields = {
      operation_mode: string;
    };
export type WaterHeaterTurnOnFields = Record<string, never>;
export type WaterHeaterTurnOffFields = Record<string, never>;
export type WazeTravelTimeGetTravelTimesFields = {
      origin: string;
      destination: string;
      region: string;
      units?: string;
      vehicle_type?: string;
      realtime?: boolean;
      avoid_toll_roads?: boolean;
      avoid_ferries?: boolean;
      avoid_subscription_roads?: boolean;
      incl_filter?: string;
      excl_filter?: string;
    };
export type WeatherGetForecastFields = {
      type: string;
    };
export type WeatherGetForecastsFields = {
      type: string;
    };
export type WebostvButtonFields = {
      entity_id: string;
      button: string;
    };
export type WebostvCommandFields = {
      entity_id: string;
      command: string;
      payload?: Record<string, unknown>;
    };
export type WebostvSelectSoundOutputFields = {
      entity_id: string;
      sound_output: string;
    };
export type WemoSetHumidityFields = {
      target_humidity: number;
    };
export type WemoResetFilterLifeFields = Record<string, never>;
export type WilightSetWateringTimeFields = {
      watering_time?: unknown;
    };
export type WilightSetPauseTimeFields = {
      pause_time?: unknown;
    };
export type WilightSetTriggerFields = {
      trigger_index?: unknown;
      trigger?: unknown;
    };
export type WorkdayCheckDateFields = {
      check_date?: string;
    };
export type XiaomiAqaraAddDeviceFields = {
      gw_mac: string;
    };
export type XiaomiAqaraPlayRingtoneFields = {
      gw_mac: string;
      ringtone_id: string;
      ringtone_vol?: number;
    };
export type XiaomiAqaraRemoveDeviceFields = {
      device_id: string;
      gw_mac: string;
    };
export type XiaomiAqaraStopRingtoneFields = {
      gw_mac: string;
    };
export type XiaomiMiioFanResetFilterFields = {
      entity_id?: string;
    };
export type XiaomiMiioFanSetExtraFeaturesFields = {
      entity_id?: string;
      features: number;
    };
export type XiaomiMiioLightSetSceneFields = {
      entity_id?: string;
      scene: number;
    };
export type XiaomiMiioLightSetDelayedTurnOffFields = {
      entity_id?: string;
      time_period: Record<string, unknown>;
    };
export type XiaomiMiioLightReminderOnFields = {
      entity_id?: string;
    };
export type XiaomiMiioLightReminderOffFields = {
      entity_id?: string;
    };
export type XiaomiMiioLightNightLightModeOnFields = {
      entity_id?: string;
    };
export type XiaomiMiioLightNightLightModeOffFields = {
      entity_id?: string;
    };
export type XiaomiMiioLightEyecareModeOnFields = {
      entity_id?: string;
    };
export type XiaomiMiioLightEyecareModeOffFields = {
      entity_id?: string;
    };
export type XiaomiMiioRemoteLearnCommandFields = {
      slot?: number;
      timeout?: number;
    };
export type XiaomiMiioRemoteSetLedOnFields = Record<string, never>;
export type XiaomiMiioRemoteSetLedOffFields = Record<string, never>;
export type XiaomiMiioSwitchSetWifiLedOnFields = {
      entity_id?: string;
    };
export type XiaomiMiioSwitchSetWifiLedOffFields = {
      entity_id?: string;
    };
export type XiaomiMiioSwitchSetPowerPriceFields = {
      entity_id?: string;
      mode: number;
    };
export type XiaomiMiioSwitchSetPowerModeFields = {
      entity_id?: string;
      mode: string;
    };
export type XiaomiMiioVacuumRemoteControlStartFields = Record<string, never>;
export type XiaomiMiioVacuumRemoteControlStopFields = Record<string, never>;
export type XiaomiMiioVacuumRemoteControlMoveFields = {
      velocity?: number;
      rotation?: number;
      duration?: number;
    };
export type XiaomiMiioVacuumRemoteControlMoveStepFields = {
      velocity?: number;
      rotation?: number;
      duration?: number;
    };
export type XiaomiMiioVacuumCleanZoneFields = {
      zone?: Record<string, unknown>;
      repeats?: number;
    };
export type XiaomiMiioVacuumGotoFields = {
      x_coord?: string;
      y_coord?: string;
    };
export type XiaomiMiioVacuumCleanSegmentFields = {
      segments?: Record<string, unknown>;
    };
export type YamahaEnableOutputFields = {
      port: string;
      enabled: boolean;
    };
export type YamahaMenuCursorFields = {
      cursor?: string;
    };
export type YamahaSelectSceneFields = {
      scene: string;
    };
export type YardianStartIrrigationFields = {
      duration: number;
    };
export type YeelightSetModeFields = {
      mode: string;
    };
export type YeelightSetColorSceneFields = {
      rgb_color?: string;
      brightness?: number;
    };
export type YeelightSetHsvSceneFields = {
      hs_color?: Record<string, unknown>;
      brightness?: number;
    };
export type YeelightSetColorTempSceneFields = {
      kelvin?: number;
      brightness?: number;
    };
export type YeelightSetColorFlowSceneFields = {
      count?: number;
      action?: string;
      transitions?: Record<string, unknown>;
    };
export type YeelightSetAutoDelayOffSceneFields = {
      minutes?: number;
      brightness?: number;
    };
export type YeelightStartFlowFields = {
      count?: number;
      action?: string;
      transitions?: Record<string, unknown>;
    };
export type YeelightSetMusicModeFields = {
      music_mode: boolean;
    };
export type YolinkPlayOnSpeakerHubFields = {
      target_device: string;
      message: string;
      tone?: string;
      volume?: number;
      repeat?: number;
    };
export type ZhaPermitFields = {
      duration?: number;
      ieee?: string;
      source_ieee?: string;
      install_code?: string;
      qr_code?: string;
    };
export type ZhaRemoveFields = {
      ieee: string;
    };
export type ZhaReconfigureDeviceFields = {
      ieee: string;
    };
export type ZhaSetZigbeeClusterAttributeFields = {
      ieee: string;
      endpoint_id: number;
      cluster_id: number;
      cluster_type?: string;
      attribute: number;
      value: string;
      manufacturer?: string;
    };
export type ZhaIssueZigbeeClusterCommandFields = {
      ieee: string;
      endpoint_id: number;
      cluster_id: number;
      cluster_type?: string;
      command: number;
      command_type: string;
      args?: Record<string, unknown>;
      params?: Record<string, unknown>;
      manufacturer?: string;
    };
export type ZhaIssueZigbeeGroupCommandFields = {
      group: string;
      cluster_id: number;
      cluster_type?: string;
      command: number;
      args?: Record<string, unknown>;
      manufacturer?: string;
    };
export type ZhaWarningDeviceSquawkFields = {
      ieee: string;
      mode?: number;
      strobe?: number;
      level?: number;
    };
export type ZhaWarningDeviceWarnFields = {
      ieee: string;
      mode?: number;
      strobe?: number;
      level?: number;
      duration?: number;
      duty_cycle?: number;
      intensity?: number;
    };
export type ZhaClearLockUserCodeFields = {
      code_slot: string;
    };
export type ZhaEnableLockUserCodeFields = {
      code_slot: string;
    };
export type ZhaDisableLockUserCodeFields = {
      code_slot: string;
    };
export type ZhaSetLockUserCodeFields = {
      code_slot: string;
      user_code: string;
    };
export type ZoneReloadFields = Record<string, never>;
export type ZoneminderSetRunStateFields = {
      name: string;
    };
export type ZwaveJsClearLockUsercodeFields = {
      code_slot: string;
    };
export type ZwaveJsSetLockUsercodeFields = {
      code_slot: string;
      usercode: string;
    };
export type ZwaveJsSetLockConfigurationFields = {
      operation_type: string;
      lock_timeout?: number;
      auto_relock_time?: number;
      hold_and_release_time?: number;
      twist_assist?: boolean;
      block_to_block?: boolean;
    };
export type ZwaveJsSetConfigParameterFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      endpoint?: string;
      parameter: string;
      bitmask?: string;
      value: string;
      value_size?: number;
      value_format?: number;
    };
export type ZwaveJsBulkSetPartialConfigParametersFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      endpoint?: string;
      parameter: string;
      value: Record<string, unknown>;
    };
export type ZwaveJsRefreshValueFields = {
      entity_id: string;
      refresh_all_values?: boolean;
    };
export type ZwaveJsSetValueFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      command_class: string;
      endpoint?: string;
      property: string;
      property_key?: string;
      value: Record<string, unknown>;
      options?: Record<string, unknown>;
      wait_for_result?: boolean;
    };
export type ZwaveJsMulticastSetValueFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      broadcast?: boolean;
      command_class: string;
      endpoint?: string;
      property: string;
      property_key?: string;
      options?: Record<string, unknown>;
      value: Record<string, unknown>;
    };
export type ZwaveJsPingFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
    };
export type ZwaveJsResetMeterFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      meter_type?: string;
      value?: string;
    };
export type ZwaveJsInvokeCcApiFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      command_class: string;
      endpoint?: string;
      method_name: string;
      parameters: Record<string, unknown>;
    };
export type ZwaveJsRefreshNotificationsFields = {
      area_id?: string;
      device_id?: string;
      entity_id?: string;
      notification_type: number;
      notification_event?: number;
    };
/** Service call types for the abode domain. */
export type AbodeServices = {
      capture_image: AbodeCaptureImageFields;
      change_setting: AbodeChangeSettingFields;
      trigger_automation: AbodeTriggerAutomationFields;
    };
/** Service call types for the adguard domain. */
export type AdguardServices = {
      add_url: AdguardAddUrlFields;
      remove_url: AdguardRemoveUrlFields;
      enable_url: AdguardEnableUrlFields;
      disable_url: AdguardDisableUrlFields;
      refresh: AdguardRefreshFields;
    };
/** Service call types for the ads domain. */
export type AdsServices = {
      write_data_by_name: AdsWriteDataByNameFields;
    };
/** Service call types for the advantage_air domain. */
export type AdvantageAirServices = {
      set_time_to: AdvantageAirSetTimeToFields;
    };
/** Service call types for the aftership domain. */
export type AftershipServices = {
      add_tracking: AftershipAddTrackingFields;
      remove_tracking: AftershipRemoveTrackingFields;
    };
/** Service call types for the agent_dvr domain. */
export type AgentDvrServices = {
      start_recording: AgentDvrStartRecordingFields;
      stop_recording: AgentDvrStopRecordingFields;
      enable_alerts: AgentDvrEnableAlertsFields;
      disable_alerts: AgentDvrDisableAlertsFields;
      snapshot: AgentDvrSnapshotFields;
    };
/** Service call types for the ai_task domain. */
export type AiTaskServices = {
      generate_data: AiTaskGenerateDataFields;
      generate_image: AiTaskGenerateImageFields;
    };
/** Service call types for the alarm_control_panel domain. */
export type AlarmControlPanelServices = {
      alarm_disarm: AlarmControlPanelAlarmDisarmFields;
      alarm_arm_custom_bypass: AlarmControlPanelAlarmArmCustomBypassFields;
      alarm_arm_home: AlarmControlPanelAlarmArmHomeFields;
      alarm_arm_away: AlarmControlPanelAlarmArmAwayFields;
      alarm_arm_night: AlarmControlPanelAlarmArmNightFields;
      alarm_arm_vacation: AlarmControlPanelAlarmArmVacationFields;
      alarm_trigger: AlarmControlPanelAlarmTriggerFields;
    };
/** Service call types for the alarmdecoder domain. */
export type AlarmdecoderServices = {
      alarm_keypress: AlarmdecoderAlarmKeypressFields;
      alarm_toggle_chime: AlarmdecoderAlarmToggleChimeFields;
    };
/** Service call types for the alert domain. */
export type AlertServices = {
      toggle: AlertToggleFields;
      turn_off: AlertTurnOffFields;
      turn_on: AlertTurnOnFields;
    };
/** Service call types for the alexa_devices domain. */
export type AlexaDevicesServices = {
      send_text_command: AlexaDevicesSendTextCommandFields;
      send_sound: AlexaDevicesSendSoundFields;
    };
/** Service call types for the amberelectric domain. */
export type AmberelectricServices = {
      get_forecasts: AmberelectricGetForecastsFields;
    };
/** Service call types for the amcrest domain. */
export type AmcrestServices = {
      enable_recording: AmcrestEnableRecordingFields;
      disable_recording: AmcrestDisableRecordingFields;
      enable_audio: AmcrestEnableAudioFields;
      disable_audio: AmcrestDisableAudioFields;
      enable_motion_recording: AmcrestEnableMotionRecordingFields;
      disable_motion_recording: AmcrestDisableMotionRecordingFields;
      goto_preset: AmcrestGotoPresetFields;
      set_color_bw: AmcrestSetColorBwFields;
      start_tour: AmcrestStartTourFields;
      stop_tour: AmcrestStopTourFields;
      ptz_control: AmcrestPtzControlFields;
    };
/** Service call types for the androidtv domain. */
export type AndroidtvServices = {
      adb_command: AndroidtvAdbCommandFields;
      download: AndroidtvDownloadFields;
      upload: AndroidtvUploadFields;
      learn_sendevent: AndroidtvLearnSendeventFields;
    };
/** Service call types for the assist_satellite domain. */
export type AssistSatelliteServices = {
      announce: AssistSatelliteAnnounceFields;
      start_conversation: AssistSatelliteStartConversationFields;
      ask_question: AssistSatelliteAskQuestionFields;
    };
/** Service call types for the automation domain. */
export type AutomationServices = {
      turn_on: AutomationTurnOnFields;
      turn_off: AutomationTurnOffFields;
      toggle: AutomationToggleFields;
      trigger: AutomationTriggerFields;
      reload: AutomationReloadFields;
    };
/** Service call types for the backup domain. */
export type BackupServices = {
      create: BackupCreateFields;
      create_automatic: BackupCreateAutomaticFields;
    };
/** Service call types for the bang_olufsen domain. */
export type BangOlufsenServices = {
      beolink_allstandby: BangOlufsenBeolinkAllstandbyFields;
      beolink_expand: BangOlufsenBeolinkExpandFields;
      beolink_join: BangOlufsenBeolinkJoinFields;
      beolink_leave: BangOlufsenBeolinkLeaveFields;
      beolink_unexpand: BangOlufsenBeolinkUnexpandFields;
    };
/** Service call types for the bayesian domain. */
export type BayesianServices = {
      reload: BayesianReloadFields;
    };
/** Service call types for the blackbird domain. */
export type BlackbirdServices = {
      set_all_zones: BlackbirdSetAllZonesFields;
    };
/** Service call types for the blink domain. */
export type BlinkServices = {
      record: BlinkRecordFields;
      trigger_camera: BlinkTriggerCameraFields;
      save_video: BlinkSaveVideoFields;
      save_recent_clips: BlinkSaveRecentClipsFields;
      send_pin: BlinkSendPinFields;
    };
/** Service call types for the blue_current domain. */
export type BlueCurrentServices = {
      start_charge_session: BlueCurrentStartChargeSessionFields;
    };
/** Service call types for the bluesound domain. */
export type BluesoundServices = {
      join: BluesoundJoinFields;
      unjoin: BluesoundUnjoinFields;
      set_sleep_timer: BluesoundSetSleepTimerFields;
      clear_sleep_timer: BluesoundClearSleepTimerFields;
    };
/** Service call types for the bond domain. */
export type BondServices = {
      set_fan_speed_tracked_state: BondSetFanSpeedTrackedStateFields;
      set_switch_power_tracked_state: BondSetSwitchPowerTrackedStateFields;
      set_light_power_tracked_state: BondSetLightPowerTrackedStateFields;
      set_light_brightness_tracked_state: BondSetLightBrightnessTrackedStateFields;
      start_increasing_brightness: BondStartIncreasingBrightnessFields;
      start_decreasing_brightness: BondStartDecreasingBrightnessFields;
      stop: BondStopFields;
    };
/** Service call types for the bosch_alarm domain. */
export type BoschAlarmServices = {
      set_date_time: BoschAlarmSetDateTimeFields;
    };
/** Service call types for the bring domain. */
export type BringServices = {
      send_message: BringSendMessageFields;
      send_reaction: BringSendReactionFields;
    };
/** Service call types for the browser domain. */
export type BrowserServices = {
      browse_url: BrowserBrowseUrlFields;
    };
/** Service call types for the button domain. */
export type ButtonServices = {
      press: ButtonPressFields;
    };
/** Service call types for the calendar domain. */
export type CalendarServices = {
      create_event: CalendarCreateEventFields;
      get_events: CalendarGetEventsFields;
    };
/** Service call types for the camera domain. */
export type CameraServices = {
      turn_off: CameraTurnOffFields;
      turn_on: CameraTurnOnFields;
      enable_motion_detection: CameraEnableMotionDetectionFields;
      disable_motion_detection: CameraDisableMotionDetectionFields;
      snapshot: CameraSnapshotFields;
      play_stream: CameraPlayStreamFields;
      record: CameraRecordFields;
    };
/** Service call types for the cast domain. */
export type CastServices = {
      show_lovelace_view: CastShowLovelaceViewFields;
    };
/** Service call types for the channels domain. */
export type ChannelsServices = {
      seek_forward: ChannelsSeekForwardFields;
      seek_backward: ChannelsSeekBackwardFields;
      seek_by: ChannelsSeekByFields;
    };
/** Service call types for the climate domain. */
export type ClimateServices = {
      set_preset_mode: ClimateSetPresetModeFields;
      set_temperature: ClimateSetTemperatureFields;
      set_humidity: ClimateSetHumidityFields;
      set_fan_mode: ClimateSetFanModeFields;
      set_hvac_mode: ClimateSetHvacModeFields;
      set_swing_mode: ClimateSetSwingModeFields;
      set_swing_horizontal_mode: ClimateSetSwingHorizontalModeFields;
      turn_on: ClimateTurnOnFields;
      turn_off: ClimateTurnOffFields;
      toggle: ClimateToggleFields;
    };
/** Service call types for the cloud domain. */
export type CloudServices = {
      remote_connect: CloudRemoteConnectFields;
      remote_disconnect: CloudRemoteDisconnectFields;
    };
/** Service call types for the cloudflare domain. */
export type CloudflareServices = {
      update_records: CloudflareUpdateRecordsFields;
    };
/** Service call types for the color_extractor domain. */
export type ColorExtractorServices = {
      turn_on: ColorExtractorTurnOnFields;
    };
/** Service call types for the command_line domain. */
export type CommandLineServices = {
      reload: CommandLineReloadFields;
    };
/** Service call types for the conversation domain. */
export type ConversationServices = {
      process: ConversationProcessFields;
      reload: ConversationReloadFields;
    };
/** Service call types for the counter domain. */
export type CounterServices = {
      decrement: CounterDecrementFields;
      increment: CounterIncrementFields;
      reset: CounterResetFields;
      set_value: CounterSetValueFields;
    };
/** Service call types for the cover domain. */
export type CoverServices = {
      open_cover: CoverOpenCoverFields;
      close_cover: CoverCloseCoverFields;
      toggle: CoverToggleFields;
      set_cover_position: CoverSetCoverPositionFields;
      stop_cover: CoverStopCoverFields;
      open_cover_tilt: CoverOpenCoverTiltFields;
      close_cover_tilt: CoverCloseCoverTiltFields;
      toggle_cover_tilt: CoverToggleCoverTiltFields;
      set_cover_tilt_position: CoverSetCoverTiltPositionFields;
      stop_cover_tilt: CoverStopCoverTiltFields;
    };
/** Service call types for the date domain. */
export type DateServices = {
      set_value: DateSetValueFields;
    };
/** Service call types for the datetime domain. */
export type DatetimeServices = {
      set_value: DatetimeSetValueFields;
    };
/** Service call types for the debugpy domain. */
export type DebugpyServices = {
      start: DebugpyStartFields;
    };
/** Service call types for the deconz domain. */
export type DeconzServices = {
      configure: DeconzConfigureFields;
      device_refresh: DeconzDeviceRefreshFields;
      remove_orphaned_entries: DeconzRemoveOrphanedEntriesFields;
    };
/** Service call types for the demo domain. */
export type DemoServices = {
      randomize_device_tracker_data: DemoRandomizeDeviceTrackerDataFields;
    };
/** Service call types for the denonavr domain. */
export type DenonavrServices = {
      get_command: DenonavrGetCommandFields;
      set_dynamic_eq: DenonavrSetDynamicEqFields;
      update_audyssey: DenonavrUpdateAudysseyFields;
    };
/** Service call types for the derivative domain. */
export type DerivativeServices = {
      reload: DerivativeReloadFields;
    };
/** Service call types for the device_tracker domain. */
export type DeviceTrackerServices = {
      see: DeviceTrackerSeeFields;
    };
/** Service call types for the downloader domain. */
export type DownloaderServices = {
      download_file: DownloaderDownloadFileFields;
    };
/** Service call types for the duckdns domain. */
export type DuckdnsServices = {
      set_txt: DuckdnsSetTxtFields;
    };
/** Service call types for the dynalite domain. */
export type DynaliteServices = {
      request_area_preset: DynaliteRequestAreaPresetFields;
      request_channel_level: DynaliteRequestChannelLevelFields;
    };
/** Service call types for the easyenergy domain. */
export type EasyenergyServices = {
      get_gas_prices: EasyenergyGetGasPricesFields;
      get_energy_usage_prices: EasyenergyGetEnergyUsagePricesFields;
      get_energy_return_prices: EasyenergyGetEnergyReturnPricesFields;
    };
/** Service call types for the ebusd domain. */
export type EbusdServices = {
      write: EbusdWriteFields;
    };
/** Service call types for the ecobee domain. */
export type EcobeeServices = {
      create_vacation: EcobeeCreateVacationFields;
      delete_vacation: EcobeeDeleteVacationFields;
      resume_program: EcobeeResumeProgramFields;
      set_fan_min_on_time: EcobeeSetFanMinOnTimeFields;
      set_dst_mode: EcobeeSetDstModeFields;
      set_mic_mode: EcobeeSetMicModeFields;
      set_occupancy_modes: EcobeeSetOccupancyModesFields;
      set_sensors_used_in_climate: EcobeeSetSensorsUsedInClimateFields;
    };
/** Service call types for the ecovacs domain. */
export type EcovacsServices = {
      raw_get_positions: EcovacsRawGetPositionsFields;
    };
/** Service call types for the elgato domain. */
export type ElgatoServices = {
      identify: ElgatoIdentifyFields;
    };
/** Service call types for the elkm1 domain. */
export type Elkm1Services = {
      alarm_bypass: Elkm1AlarmBypassFields;
      alarm_clear_bypass: Elkm1AlarmClearBypassFields;
      alarm_arm_home_instant: Elkm1AlarmArmHomeInstantFields;
      alarm_arm_night_instant: Elkm1AlarmArmNightInstantFields;
      alarm_arm_vacation: Elkm1AlarmArmVacationFields;
      alarm_display_message: Elkm1AlarmDisplayMessageFields;
      set_time: Elkm1SetTimeFields;
      speak_phrase: Elkm1SpeakPhraseFields;
      speak_word: Elkm1SpeakWordFields;
      sensor_counter_refresh: Elkm1SensorCounterRefreshFields;
      sensor_counter_set: Elkm1SensorCounterSetFields;
      sensor_zone_bypass: Elkm1SensorZoneBypassFields;
      sensor_zone_trigger: Elkm1SensorZoneTriggerFields;
    };
/** Service call types for the energyzero domain. */
export type EnergyzeroServices = {
      get_gas_prices: EnergyzeroGetGasPricesFields;
      get_energy_prices: EnergyzeroGetEnergyPricesFields;
    };
/** Service call types for the environment_canada domain. */
export type EnvironmentCanadaServices = {
      get_forecasts: EnvironmentCanadaGetForecastsFields;
      set_radar_type: EnvironmentCanadaSetRadarTypeFields;
    };
/** Service call types for the envisalink domain. */
export type EnvisalinkServices = {
      alarm_keypress: EnvisalinkAlarmKeypressFields;
      invoke_custom_function: EnvisalinkInvokeCustomFunctionFields;
    };
/** Service call types for the epson domain. */
export type EpsonServices = {
      select_cmode: EpsonSelectCmodeFields;
    };
/** Service call types for the evohome domain. */
export type EvohomeServices = {
      set_system_mode: EvohomeSetSystemModeFields;
      reset_system: EvohomeResetSystemFields;
      refresh_system: EvohomeRefreshSystemFields;
      set_zone_override: EvohomeSetZoneOverrideFields;
      clear_zone_override: EvohomeClearZoneOverrideFields;
    };
/** Service call types for the ezviz domain. */
export type EzvizServices = {
      set_alarm_detection_sensibility: EzvizSetAlarmDetectionSensibilityFields;
      wake_device: EzvizWakeDeviceFields;
    };
/** Service call types for the fan domain. */
export type FanServices = {
      set_preset_mode: FanSetPresetModeFields;
      set_percentage: FanSetPercentageFields;
      turn_on: FanTurnOnFields;
      turn_off: FanTurnOffFields;
      oscillate: FanOscillateFields;
      toggle: FanToggleFields;
      set_direction: FanSetDirectionFields;
      increase_speed: FanIncreaseSpeedFields;
      decrease_speed: FanDecreaseSpeedFields;
    };
/** Service call types for the ffmpeg domain. */
export type FfmpegServices = {
      restart: FfmpegRestartFields;
      start: FfmpegStartFields;
      stop: FfmpegStopFields;
    };
/** Service call types for the file domain. */
export type FileServices = {
      read_file: FileReadFileFields;
    };
/** Service call types for the filter domain. */
export type FilterServices = {
      reload: FilterReloadFields;
    };
/** Service call types for the flo domain. */
export type FloServices = {
      set_sleep_mode: FloSetSleepModeFields;
      set_away_mode: FloSetAwayModeFields;
      set_home_mode: FloSetHomeModeFields;
      run_health_test: FloRunHealthTestFields;
    };
/** Service call types for the flume domain. */
export type FlumeServices = {
      list_notifications: FlumeListNotificationsFields;
    };
/** Service call types for the flux_led domain. */
export type FluxLedServices = {
      set_custom_effect: FluxLedSetCustomEffectFields;
      set_zones: FluxLedSetZonesFields;
      set_music_mode: FluxLedSetMusicModeFields;
    };
/** Service call types for the foscam domain. */
export type FoscamServices = {
      ptz: FoscamPtzFields;
      ptz_preset: FoscamPtzPresetFields;
    };
/** Service call types for the foursquare domain. */
export type FoursquareServices = {
      checkin: FoursquareCheckinFields;
    };
/** Service call types for the freebox domain. */
export type FreeboxServices = {
      reboot: FreeboxRebootFields;
    };
/** Service call types for the fritz domain. */
export type FritzServices = {
      set_guest_wifi_password: FritzSetGuestWifiPasswordFields;
      dial: FritzDialFields;
    };
/** Service call types for the frontend domain. */
export type FrontendServices = {
      set_theme: FrontendSetThemeFields;
      reload_themes: FrontendReloadThemesFields;
    };
/** Service call types for the fully_kiosk domain. */
export type FullyKioskServices = {
      load_url: FullyKioskLoadUrlFields;
      set_config: FullyKioskSetConfigFields;
      start_application: FullyKioskStartApplicationFields;
    };
/** Service call types for the generic domain. */
export type GenericServices = {
      reload: GenericReloadFields;
    };
/** Service call types for the generic_thermostat domain. */
export type GenericThermostatServices = {
      reload: GenericThermostatReloadFields;
    };
/** Service call types for the geniushub domain. */
export type GeniushubServices = {
      set_zone_mode: GeniushubSetZoneModeFields;
      set_zone_override: GeniushubSetZoneOverrideFields;
      set_switch_override: GeniushubSetSwitchOverrideFields;
    };
/** Service call types for the google domain. */
export type GoogleServices = {
      add_event: GoogleAddEventFields;
      create_event: GoogleCreateEventFields;
    };
/** Service call types for the google_assistant domain. */
export type GoogleAssistantServices = {
      request_sync: GoogleAssistantRequestSyncFields;
    };
/** Service call types for the google_assistant_sdk domain. */
export type GoogleAssistantSdkServices = {
      send_text_command: GoogleAssistantSdkSendTextCommandFields;
    };
/** Service call types for the google_generative_ai_conversation domain. */
export type GoogleGenerativeAiConversationServices = {
      generate_content: GoogleGenerativeAiConversationGenerateContentFields;
    };
/** Service call types for the google_mail domain. */
export type GoogleMailServices = {
      set_vacation: GoogleMailSetVacationFields;
    };
/** Service call types for the google_photos domain. */
export type GooglePhotosServices = {
      upload: GooglePhotosUploadFields;
    };
/** Service call types for the google_sheets domain. */
export type GoogleSheetsServices = {
      append_sheet: GoogleSheetsAppendSheetFields;
      get_sheet: GoogleSheetsGetSheetFields;
    };
/** Service call types for the group domain. */
export type GroupServices = {
      reload: GroupReloadFields;
      set: GroupSetFields;
      remove: GroupRemoveFields;
    };
/** Service call types for the guardian domain. */
export type GuardianServices = {
      pair_sensor: GuardianPairSensorFields;
      unpair_sensor: GuardianUnpairSensorFields;
      upgrade_firmware: GuardianUpgradeFirmwareFields;
    };
/** Service call types for the habitica domain. */
export type HabiticaServices = {
      cast_skill: HabiticaCastSkillFields;
      accept_quest: HabiticaAcceptQuestFields;
      reject_quest: HabiticaRejectQuestFields;
      start_quest: HabiticaStartQuestFields;
      cancel_quest: HabiticaCancelQuestFields;
      abort_quest: HabiticaAbortQuestFields;
      leave_quest: HabiticaLeaveQuestFields;
      score_habit: HabiticaScoreHabitFields;
      score_reward: HabiticaScoreRewardFields;
      transformation: HabiticaTransformationFields;
      get_tasks: HabiticaGetTasksFields;
      update_reward: HabiticaUpdateRewardFields;
      create_reward: HabiticaCreateRewardFields;
      update_habit: HabiticaUpdateHabitFields;
      create_habit: HabiticaCreateHabitFields;
      update_todo: HabiticaUpdateTodoFields;
      create_todo: HabiticaCreateTodoFields;
      update_daily: HabiticaUpdateDailyFields;
      create_daily: HabiticaCreateDailyFields;
    };
/** Service call types for the harmony domain. */
export type HarmonyServices = {
      sync: HarmonySyncFields;
      change_channel: HarmonyChangeChannelFields;
    };
/** Service call types for the hassio domain. */
export type HassioServices = {
      addon_start: HassioAddonStartFields;
      addon_restart: HassioAddonRestartFields;
      addon_stdin: HassioAddonStdinFields;
      addon_stop: HassioAddonStopFields;
      host_reboot: HassioHostRebootFields;
      host_shutdown: HassioHostShutdownFields;
      backup_full: HassioBackupFullFields;
      backup_partial: HassioBackupPartialFields;
      restore_full: HassioRestoreFullFields;
      restore_partial: HassioRestorePartialFields;
    };
/** Service call types for the hdmi_cec domain. */
export type HdmiCecServices = {
      power_on: HdmiCecPowerOnFields;
      select_device: HdmiCecSelectDeviceFields;
      send_command: HdmiCecSendCommandFields;
      standby: HdmiCecStandbyFields;
      update: HdmiCecUpdateFields;
      volume: HdmiCecVolumeFields;
    };
/** Service call types for the heos domain. */
export type HeosServices = {
      get_queue: HeosGetQueueFields;
      remove_from_queue: HeosRemoveFromQueueFields;
      move_queue_item: HeosMoveQueueItemFields;
      group_volume_set: HeosGroupVolumeSetFields;
      group_volume_down: HeosGroupVolumeDownFields;
      group_volume_up: HeosGroupVolumeUpFields;
      sign_in: HeosSignInFields;
      sign_out: HeosSignOutFields;
    };
/** Service call types for the history_stats domain. */
export type HistoryStatsServices = {
      reload: HistoryStatsReloadFields;
    };
/** Service call types for the hive domain. */
export type HiveServices = {
      boost_heating_on: HiveBoostHeatingOnFields;
      boost_heating_off: HiveBoostHeatingOffFields;
      boost_hot_water: HiveBoostHotWaterFields;
    };
/** Service call types for the home_connect domain. */
export type HomeConnectServices = {
      set_program_and_options: HomeConnectSetProgramAndOptionsFields;
      change_setting: HomeConnectChangeSettingFields;
    };
/** Service call types for the homeassistant domain. */
export type HomeassistantServices = {
      check_config: HomeassistantCheckConfigFields;
      reload_core_config: HomeassistantReloadCoreConfigFields;
      restart: HomeassistantRestartFields;
      set_location: HomeassistantSetLocationFields;
      stop: HomeassistantStopFields;
      toggle: HomeassistantToggleFields;
      turn_on: HomeassistantTurnOnFields;
      turn_off: HomeassistantTurnOffFields;
      update_entity: HomeassistantUpdateEntityFields;
      reload_custom_templates: HomeassistantReloadCustomTemplatesFields;
      reload_config_entry: HomeassistantReloadConfigEntryFields;
      save_persistent_states: HomeassistantSavePersistentStatesFields;
      reload_all: HomeassistantReloadAllFields;
    };
/** Service call types for the homekit domain. */
export type HomekitServices = {
      reload: HomekitReloadFields;
      reset_accessory: HomekitResetAccessoryFields;
      unpair: HomekitUnpairFields;
    };
/** Service call types for the homematic domain. */
export type HomematicServices = {
      virtualkey: HomematicVirtualkeyFields;
      set_variable_value: HomematicSetVariableValueFields;
      set_device_value: HomematicSetDeviceValueFields;
      reconnect: HomematicReconnectFields;
      set_install_mode: HomematicSetInstallModeFields;
      put_paramset: HomematicPutParamsetFields;
    };
/** Service call types for the homematicip_cloud domain. */
export type HomematicipCloudServices = {
      activate_eco_mode_with_duration: HomematicipCloudActivateEcoModeWithDurationFields;
      activate_eco_mode_with_period: HomematicipCloudActivateEcoModeWithPeriodFields;
      activate_vacation: HomematicipCloudActivateVacationFields;
      deactivate_eco_mode: HomematicipCloudDeactivateEcoModeFields;
      deactivate_vacation: HomematicipCloudDeactivateVacationFields;
      set_active_climate_profile: HomematicipCloudSetActiveClimateProfileFields;
      dump_hap_config: HomematicipCloudDumpHapConfigFields;
      reset_energy_counter: HomematicipCloudResetEnergyCounterFields;
      set_home_cooling_mode: HomematicipCloudSetHomeCoolingModeFields;
    };
/** Service call types for the homeworks domain. */
export type HomeworksServices = {
      send_command: HomeworksSendCommandFields;
    };
/** Service call types for the html5 domain. */
export type Html5Services = {
      dismiss: Html5DismissFields;
    };
/** Service call types for the huawei_lte domain. */
export type HuaweiLteServices = {
      resume_integration: HuaweiLteResumeIntegrationFields;
      suspend_integration: HuaweiLteSuspendIntegrationFields;
    };
/** Service call types for the hue domain. */
export type HueServices = {
      hue_activate_scene: HueHueActivateSceneFields;
      activate_scene: HueActivateSceneFields;
    };
/** Service call types for the humidifier domain. */
export type HumidifierServices = {
      set_mode: HumidifierSetModeFields;
      set_humidity: HumidifierSetHumidityFields;
      turn_on: HumidifierTurnOnFields;
      turn_off: HumidifierTurnOffFields;
      toggle: HumidifierToggleFields;
    };
/** Service call types for the husqvarna_automower domain. */
export type HusqvarnaAutomowerServices = {
      override_schedule: HusqvarnaAutomowerOverrideScheduleFields;
      override_schedule_work_area: HusqvarnaAutomowerOverrideScheduleWorkAreaFields;
    };
/** Service call types for the hydrawise domain. */
export type HydrawiseServices = {
      start_watering: HydrawiseStartWateringFields;
      suspend: HydrawiseSuspendFields;
      resume: HydrawiseResumeFields;
    };
/** Service call types for the icloud domain. */
export type IcloudServices = {
      update: IcloudUpdateFields;
      play_sound: IcloudPlaySoundFields;
      display_message: IcloudDisplayMessageFields;
      lost_device: IcloudLostDeviceFields;
    };
/** Service call types for the ifttt domain. */
export type IftttServices = {
      push_alarm_state: IftttPushAlarmStateFields;
      trigger: IftttTriggerFields;
    };
/** Service call types for the ihc domain. */
export type IhcServices = {
      set_runtime_value_bool: IhcSetRuntimeValueBoolFields;
      set_runtime_value_int: IhcSetRuntimeValueIntFields;
      set_runtime_value_float: IhcSetRuntimeValueFloatFields;
      pulse: IhcPulseFields;
    };
/** Service call types for the image domain. */
export type ImageServices = {
      snapshot: ImageSnapshotFields;
    };
/** Service call types for the image_processing domain. */
export type ImageProcessingServices = {
      scan: ImageProcessingScanFields;
    };
/** Service call types for the imap domain. */
export type ImapServices = {
      seen: ImapSeenFields;
      move: ImapMoveFields;
      delete: ImapDeleteFields;
      fetch: ImapFetchFields;
      fetch_part: ImapFetchPartFields;
    };
/** Service call types for the immich domain. */
export type ImmichServices = {
      upload_file: ImmichUploadFileFields;
    };
/** Service call types for the input_boolean domain. */
export type InputBooleanServices = {
      toggle: InputBooleanToggleFields;
      turn_off: InputBooleanTurnOffFields;
      turn_on: InputBooleanTurnOnFields;
      reload: InputBooleanReloadFields;
    };
/** Service call types for the input_button domain. */
export type InputButtonServices = {
      press: InputButtonPressFields;
      reload: InputButtonReloadFields;
    };
/** Service call types for the input_datetime domain. */
export type InputDatetimeServices = {
      set_datetime: InputDatetimeSetDatetimeFields;
      reload: InputDatetimeReloadFields;
    };
/** Service call types for the input_number domain. */
export type InputNumberServices = {
      decrement: InputNumberDecrementFields;
      increment: InputNumberIncrementFields;
      set_value: InputNumberSetValueFields;
      reload: InputNumberReloadFields;
    };
/** Service call types for the input_select domain. */
export type InputSelectServices = {
      select_next: InputSelectSelectNextFields;
      select_option: InputSelectSelectOptionFields;
      select_previous: InputSelectSelectPreviousFields;
      select_first: InputSelectSelectFirstFields;
      select_last: InputSelectSelectLastFields;
      set_options: InputSelectSetOptionsFields;
      reload: InputSelectReloadFields;
    };
/** Service call types for the input_text domain. */
export type InputTextServices = {
      set_value: InputTextSetValueFields;
      reload: InputTextReloadFields;
    };
/** Service call types for the insteon domain. */
export type InsteonServices = {
      add_all_link: InsteonAddAllLinkFields;
      delete_all_link: InsteonDeleteAllLinkFields;
      load_all_link_database: InsteonLoadAllLinkDatabaseFields;
      print_all_link_database: InsteonPrintAllLinkDatabaseFields;
      print_im_all_link_database: InsteonPrintImAllLinkDatabaseFields;
      x10_all_units_off: InsteonX10AllUnitsOffFields;
      x10_all_lights_on: InsteonX10AllLightsOnFields;
      x10_all_lights_off: InsteonX10AllLightsOffFields;
      scene_on: InsteonSceneOnFields;
      scene_off: InsteonSceneOffFields;
      add_default_links: InsteonAddDefaultLinksFields;
    };
/** Service call types for the intent_script domain. */
export type IntentScriptServices = {
      reload: IntentScriptReloadFields;
    };
/** Service call types for the iperf3 domain. */
export type Iperf3Services = {
      speedtest: Iperf3SpeedtestFields;
    };
/** Service call types for the isy994 domain. */
export type Isy994Services = {
      send_raw_node_command: Isy994SendRawNodeCommandFields;
      send_node_command: Isy994SendNodeCommandFields;
      get_zwave_parameter: Isy994GetZwaveParameterFields;
      set_zwave_parameter: Isy994SetZwaveParameterFields;
      set_zwave_lock_user_code: Isy994SetZwaveLockUserCodeFields;
      delete_zwave_lock_user_code: Isy994DeleteZwaveLockUserCodeFields;
      rename_node: Isy994RenameNodeFields;
      send_program_command: Isy994SendProgramCommandFields;
    };
/** Service call types for the izone domain. */
export type IzoneServices = {
      airflow_min: IzoneAirflowMinFields;
      airflow_max: IzoneAirflowMaxFields;
    };
/** Service call types for the jewish_calendar domain. */
export type JewishCalendarServices = {
      count_omer: JewishCalendarCountOmerFields;
    };
/** Service call types for the keba domain. */
export type KebaServices = {
      request_data: KebaRequestDataFields;
      authorize: KebaAuthorizeFields;
      deauthorize: KebaDeauthorizeFields;
      set_energy: KebaSetEnergyFields;
      set_current: KebaSetCurrentFields;
      enable: KebaEnableFields;
      disable: KebaDisableFields;
      set_failsafe: KebaSetFailsafeFields;
    };
/** Service call types for the kef domain. */
export type KefServices = {
      update_dsp: KefUpdateDspFields;
      set_mode: KefSetModeFields;
      set_desk_db: KefSetDeskDbFields;
      set_wall_db: KefSetWallDbFields;
      set_treble_db: KefSetTrebleDbFields;
      set_high_hz: KefSetHighHzFields;
      set_low_hz: KefSetLowHzFields;
      set_sub_db: KefSetSubDbFields;
    };
/** Service call types for the keymitt_ble domain. */
export type KeymittBleServices = {
      calibrate: KeymittBleCalibrateFields;
    };
/** Service call types for the kitchen_sink domain. */
export type KitchenSinkServices = {
      test_service_1: KitchenSinkTestService1Fields;
    };
/** Service call types for the knx domain. */
export type KnxServices = {
      send: KnxSendFields;
      read: KnxReadFields;
      event_register: KnxEventRegisterFields;
      exposure_register: KnxExposureRegisterFields;
      reload: KnxReloadFields;
    };
/** Service call types for the kodi domain. */
export type KodiServices = {
      add_to_playlist: KodiAddToPlaylistFields;
      call_method: KodiCallMethodFields;
    };
/** Service call types for the lametric domain. */
export type LametricServices = {
      chart: LametricChartFields;
      message: LametricMessageFields;
    };
/** Service call types for the lawn_mower domain. */
export type LawnMowerServices = {
      start_mowing: LawnMowerStartMowingFields;
      dock: LawnMowerDockFields;
      pause: LawnMowerPauseFields;
    };
/** Service call types for the lcn domain. */
export type LcnServices = {
      output_abs: LcnOutputAbsFields;
      output_rel: LcnOutputRelFields;
      output_toggle: LcnOutputToggleFields;
      relays: LcnRelaysFields;
      led: LcnLedFields;
      var_abs: LcnVarAbsFields;
      var_reset: LcnVarResetFields;
      var_rel: LcnVarRelFields;
      lock_regulator: LcnLockRegulatorFields;
      send_keys: LcnSendKeysFields;
      lock_keys: LcnLockKeysFields;
      dyn_text: LcnDynTextFields;
      pck: LcnPckFields;
    };
/** Service call types for the lifx domain. */
export type LifxServices = {
      set_hev_cycle_state: LifxSetHevCycleStateFields;
      set_state: LifxSetStateFields;
      effect_pulse: LifxEffectPulseFields;
      effect_colorloop: LifxEffectColorloopFields;
      effect_move: LifxEffectMoveFields;
      effect_flame: LifxEffectFlameFields;
      effect_morph: LifxEffectMorphFields;
      effect_sky: LifxEffectSkyFields;
      effect_stop: LifxEffectStopFields;
      paint_theme: LifxPaintThemeFields;
    };
/** Service call types for the light domain. */
export type LightServices = {
      turn_on: LightTurnOnFields;
      turn_off: LightTurnOffFields;
      toggle: LightToggleFields;
    };
/** Service call types for the linkplay domain. */
export type LinkplayServices = {
      play_preset: LinkplayPlayPresetFields;
    };
/** Service call types for the litterrobot domain. */
export type LitterrobotServices = {
      set_sleep_mode: LitterrobotSetSleepModeFields;
    };
/** Service call types for the local_file domain. */
export type LocalFileServices = {
      update_file_path: LocalFileUpdateFilePathFields;
    };
/** Service call types for the lock domain. */
export type LockServices = {
      lock: LockLockFields;
      open: LockOpenFields;
      unlock: LockUnlockFields;
    };
/** Service call types for the logbook domain. */
export type LogbookServices = {
      log: LogbookLogFields;
    };
/** Service call types for the logger domain. */
export type LoggerServices = {
      set_default_level: LoggerSetDefaultLevelFields;
      set_level: LoggerSetLevelFields;
    };
/** Service call types for the lovelace domain. */
export type LovelaceServices = {
      reload_resources: LovelaceReloadResourcesFields;
    };
/** Service call types for the lyric domain. */
export type LyricServices = {
      set_hold_time: LyricSetHoldTimeFields;
    };
/** Service call types for the mastodon domain. */
export type MastodonServices = {
      post: MastodonPostFields;
    };
/** Service call types for the matrix domain. */
export type MatrixServices = {
      send_message: MatrixSendMessageFields;
      react: MatrixReactFields;
    };
/** Service call types for the matter domain. */
export type MatterServices = {
      water_heater_boost: MatterWaterHeaterBoostFields;
    };
/** Service call types for the mealie domain. */
export type MealieServices = {
      get_mealplan: MealieGetMealplanFields;
      get_recipe: MealieGetRecipeFields;
      get_recipes: MealieGetRecipesFields;
      import_recipe: MealieImportRecipeFields;
      set_random_mealplan: MealieSetRandomMealplanFields;
      set_mealplan: MealieSetMealplanFields;
    };
/** Service call types for the media_extractor domain. */
export type MediaExtractorServices = {
      play_media: MediaExtractorPlayMediaFields;
      extract_media_url: MediaExtractorExtractMediaUrlFields;
    };
/** Service call types for the media_player domain. */
export type MediaPlayerServices = {
      turn_on: MediaPlayerTurnOnFields;
      turn_off: MediaPlayerTurnOffFields;
      toggle: MediaPlayerToggleFields;
      volume_up: MediaPlayerVolumeUpFields;
      volume_down: MediaPlayerVolumeDownFields;
      volume_mute: MediaPlayerVolumeMuteFields;
      volume_set: MediaPlayerVolumeSetFields;
      media_play_pause: MediaPlayerMediaPlayPauseFields;
      media_play: MediaPlayerMediaPlayFields;
      media_pause: MediaPlayerMediaPauseFields;
      media_stop: MediaPlayerMediaStopFields;
      media_next_track: MediaPlayerMediaNextTrackFields;
      media_previous_track: MediaPlayerMediaPreviousTrackFields;
      media_seek: MediaPlayerMediaSeekFields;
      play_media: MediaPlayerPlayMediaFields;
      browse_media: MediaPlayerBrowseMediaFields;
      search_media: MediaPlayerSearchMediaFields;
      select_source: MediaPlayerSelectSourceFields;
      select_sound_mode: MediaPlayerSelectSoundModeFields;
      clear_playlist: MediaPlayerClearPlaylistFields;
      shuffle_set: MediaPlayerShuffleSetFields;
      repeat_set: MediaPlayerRepeatSetFields;
      join: MediaPlayerJoinFields;
      unjoin: MediaPlayerUnjoinFields;
    };
/** Service call types for the melcloud domain. */
export type MelcloudServices = {
      set_vane_horizontal: MelcloudSetVaneHorizontalFields;
      set_vane_vertical: MelcloudSetVaneVerticalFields;
    };
/** Service call types for the microsoft_face domain. */
export type MicrosoftFaceServices = {
      create_group: MicrosoftFaceCreateGroupFields;
      create_person: MicrosoftFaceCreatePersonFields;
      delete_group: MicrosoftFaceDeleteGroupFields;
      delete_person: MicrosoftFaceDeletePersonFields;
      face_person: MicrosoftFaceFacePersonFields;
      train_group: MicrosoftFaceTrainGroupFields;
    };
/** Service call types for the miele domain. */
export type MieleServices = {
      get_programs: MieleGetProgramsFields;
      set_program: MieleSetProgramFields;
      set_program_oven: MieleSetProgramOvenFields;
    };
/** Service call types for the mill domain. */
export type MillServices = {
      set_room_temperature: MillSetRoomTemperatureFields;
    };
/** Service call types for the min_max domain. */
export type MinMaxServices = {
      reload: MinMaxReloadFields;
    };
/** Service call types for the minio domain. */
export type MinioServices = {
      get: MinioGetFields;
      put: MinioPutFields;
      remove: MinioRemoveFields;
    };
/** Service call types for the modbus domain. */
export type ModbusServices = {
      reload: ModbusReloadFields;
      write_coil: ModbusWriteCoilFields;
      write_register: ModbusWriteRegisterFields;
      stop: ModbusStopFields;
      restart: ModbusRestartFields;
    };
/** Service call types for the modern_forms domain. */
export type ModernFormsServices = {
      set_light_sleep_timer: ModernFormsSetLightSleepTimerFields;
      clear_light_sleep_timer: ModernFormsClearLightSleepTimerFields;
      set_fan_sleep_timer: ModernFormsSetFanSleepTimerFields;
      clear_fan_sleep_timer: ModernFormsClearFanSleepTimerFields;
    };
/** Service call types for the monoprice domain. */
export type MonopriceServices = {
      snapshot: MonopriceSnapshotFields;
      restore: MonopriceRestoreFields;
    };
/** Service call types for the motion_blinds domain. */
export type MotionBlindsServices = {
      set_absolute_position: MotionBlindsSetAbsolutePositionFields;
    };
/** Service call types for the motioneye domain. */
export type MotioneyeServices = {
      set_text_overlay: MotioneyeSetTextOverlayFields;
      action: MotioneyeActionFields;
      snapshot: MotioneyeSnapshotFields;
    };
/** Service call types for the mqtt domain. */
export type MqttServices = {
      publish: MqttPublishFields;
      dump: MqttDumpFields;
      reload: MqttReloadFields;
    };
/** Service call types for the music_assistant domain. */
export type MusicAssistantServices = {
      play_media: MusicAssistantPlayMediaFields;
      play_announcement: MusicAssistantPlayAnnouncementFields;
      transfer_queue: MusicAssistantTransferQueueFields;
      get_queue: MusicAssistantGetQueueFields;
      search: MusicAssistantSearchFields;
      get_library: MusicAssistantGetLibraryFields;
    };
/** Service call types for the neato domain. */
export type NeatoServices = {
      custom_cleaning: NeatoCustomCleaningFields;
    };
/** Service call types for the ness_alarm domain. */
export type NessAlarmServices = {
      aux: NessAlarmAuxFields;
      panic: NessAlarmPanicFields;
    };
/** Service call types for the netatmo domain. */
export type NetatmoServices = {
      set_camera_light: NetatmoSetCameraLightFields;
      set_schedule: NetatmoSetScheduleFields;
      set_preset_mode_with_end_datetime: NetatmoSetPresetModeWithEndDatetimeFields;
      set_temperature_with_end_datetime: NetatmoSetTemperatureWithEndDatetimeFields;
      set_temperature_with_time_period: NetatmoSetTemperatureWithTimePeriodFields;
      clear_temperature_setting: NetatmoClearTemperatureSettingFields;
      set_persons_home: NetatmoSetPersonsHomeFields;
      set_person_away: NetatmoSetPersonAwayFields;
      register_webhook: NetatmoRegisterWebhookFields;
      unregister_webhook: NetatmoUnregisterWebhookFields;
    };
/** Service call types for the netgear_lte domain. */
export type NetgearLteServices = {
      delete_sms: NetgearLteDeleteSmsFields;
      set_option: NetgearLteSetOptionFields;
      connect_lte: NetgearLteConnectLteFields;
      disconnect_lte: NetgearLteDisconnectLteFields;
    };
/** Service call types for the nexia domain. */
export type NexiaServices = {
      set_aircleaner_mode: NexiaSetAircleanerModeFields;
      set_humidify_setpoint: NexiaSetHumidifySetpointFields;
      set_dehumidify_setpoint: NexiaSetDehumidifySetpointFields;
      set_hvac_run_mode: NexiaSetHvacRunModeFields;
    };
/** Service call types for the nintendo_parental_controls domain. */
export type NintendoParentalControlsServices = {
      add_bonus_time: NintendoParentalControlsAddBonusTimeFields;
    };
/** Service call types for the nissan_leaf domain. */
export type NissanLeafServices = {
      start_charge: NissanLeafStartChargeFields;
      update: NissanLeafUpdateFields;
    };
/** Service call types for the nordpool domain. */
export type NordpoolServices = {
      get_prices_for_date: NordpoolGetPricesForDateFields;
      get_price_indices_for_date: NordpoolGetPriceIndicesForDateFields;
    };
/** Service call types for the notify domain. */
export type NotifyServices = {
      notify: NotifyNotifyFields;
      send_message: NotifySendMessageFields;
      persistent_notification: NotifyPersistentNotificationFields;
    };
/** Service call types for the ntfy domain. */
export type NtfyServices = {
      publish: NtfyPublishFields;
    };
/** Service call types for the nuki domain. */
export type NukiServices = {
      lock_n_go: NukiLockNGoFields;
      set_continuous_mode: NukiSetContinuousModeFields;
    };
/** Service call types for the number domain. */
export type NumberServices = {
      set_value: NumberSetValueFields;
    };
/** Service call types for the nws domain. */
export type NwsServices = {
      get_forecasts_extra: NwsGetForecastsExtraFields;
    };
/** Service call types for the nx584 domain. */
export type Nx584Services = {
      bypass_zone: Nx584BypassZoneFields;
      unbypass_zone: Nx584UnbypassZoneFields;
    };
/** Service call types for the nzbget domain. */
export type NzbgetServices = {
      pause: NzbgetPauseFields;
      resume: NzbgetResumeFields;
      set_speed: NzbgetSetSpeedFields;
    };
/** Service call types for the octoprint domain. */
export type OctoprintServices = {
      printer_connect: OctoprintPrinterConnectFields;
    };
/** Service call types for the ohme domain. */
export type OhmeServices = {
      list_charge_slots: OhmeListChargeSlotsFields;
      set_price_cap: OhmeSetPriceCapFields;
    };
/** Service call types for the ombi domain. */
export type OmbiServices = {
      submit_movie_request: OmbiSubmitMovieRequestFields;
      submit_tv_request: OmbiSubmitTvRequestFields;
      submit_music_request: OmbiSubmitMusicRequestFields;
    };
/** Service call types for the omnilogic domain. */
export type OmnilogicServices = {
      set_pump_speed: OmnilogicSetPumpSpeedFields;
    };
/** Service call types for the onedrive domain. */
export type OnedriveServices = {
      upload: OnedriveUploadFields;
    };
/** Service call types for the onvif domain. */
export type OnvifServices = {
      ptz: OnvifPtzFields;
    };
/** Service call types for the openai_conversation domain. */
export type OpenaiConversationServices = {
      generate_image: OpenaiConversationGenerateImageFields;
      generate_content: OpenaiConversationGenerateContentFields;
    };
/** Service call types for the openhome domain. */
export type OpenhomeServices = {
      invoke_pin: OpenhomeInvokePinFields;
    };
/** Service call types for the opentherm_gw domain. */
export type OpenthermGwServices = {
      reset_gateway: OpenthermGwResetGatewayFields;
      set_central_heating_ovrd: OpenthermGwSetCentralHeatingOvrdFields;
      set_clock: OpenthermGwSetClockFields;
      set_control_setpoint: OpenthermGwSetControlSetpointFields;
      set_hot_water_ovrd: OpenthermGwSetHotWaterOvrdFields;
      set_hot_water_setpoint: OpenthermGwSetHotWaterSetpointFields;
      set_gpio_mode: OpenthermGwSetGpioModeFields;
      set_led_mode: OpenthermGwSetLedModeFields;
      set_max_modulation: OpenthermGwSetMaxModulationFields;
      set_outside_temperature: OpenthermGwSetOutsideTemperatureFields;
      set_setback_temperature: OpenthermGwSetSetbackTemperatureFields;
      send_transparent_command: OpenthermGwSendTransparentCommandFields;
    };
/** Service call types for the openweathermap domain. */
export type OpenweathermapServices = {
      get_minute_forecast: OpenweathermapGetMinuteForecastFields;
    };
/** Service call types for the osoenergy domain. */
export type OsoenergyServices = {
      get_profile: OsoenergyGetProfileFields;
      set_profile: OsoenergySetProfileFields;
      set_v40_min: OsoenergySetV40MinFields;
      turn_away_mode_on: OsoenergyTurnAwayModeOnFields;
      turn_off: OsoenergyTurnOffFields;
      turn_on: OsoenergyTurnOnFields;
    };
/** Service call types for the overseerr domain. */
export type OverseerrServices = {
      get_requests: OverseerrGetRequestsFields;
    };
/** Service call types for the persistent_notification domain. */
export type PersistentNotificationServices = {
      create: PersistentNotificationCreateFields;
      dismiss: PersistentNotificationDismissFields;
      dismiss_all: PersistentNotificationDismissAllFields;
    };
/** Service call types for the person domain. */
export type PersonServices = {
      reload: PersonReloadFields;
    };
/** Service call types for the pi_hole domain. */
export type PiHoleServices = {
      disable: PiHoleDisableFields;
    };
/** Service call types for the picnic domain. */
export type PicnicServices = {
      add_product: PicnicAddProductFields;
    };
/** Service call types for the pilight domain. */
export type PilightServices = {
      send: PilightSendFields;
    };
/** Service call types for the plex domain. */
export type PlexServices = {
      refresh_library: PlexRefreshLibraryFields;
    };
/** Service call types for the profiler domain. */
export type ProfilerServices = {
      start: ProfilerStartFields;
      memory: ProfilerMemoryFields;
      start_log_objects: ProfilerStartLogObjectsFields;
      stop_log_objects: ProfilerStopLogObjectsFields;
      dump_log_objects: ProfilerDumpLogObjectsFields;
      start_log_object_sources: ProfilerStartLogObjectSourcesFields;
      stop_log_object_sources: ProfilerStopLogObjectSourcesFields;
      lru_stats: ProfilerLruStatsFields;
      dump_sockets: ProfilerDumpSocketsFields;
      log_thread_frames: ProfilerLogThreadFramesFields;
      log_event_loop_scheduled: ProfilerLogEventLoopScheduledFields;
      set_asyncio_debug: ProfilerSetAsyncioDebugFields;
      log_current_tasks: ProfilerLogCurrentTasksFields;
    };
/** Service call types for the prosegur domain. */
export type ProsegurServices = {
      request_image: ProsegurRequestImageFields;
    };
/** Service call types for the ps4 domain. */
export type Ps4Services = {
      send_command: Ps4SendCommandFields;
    };
/** Service call types for the python_script domain. */
export type PythonScriptServices = {
      reload: PythonScriptReloadFields;
    };
/** Service call types for the qbittorrent domain. */
export type QbittorrentServices = {
      get_torrents: QbittorrentGetTorrentsFields;
      get_all_torrents: QbittorrentGetAllTorrentsFields;
    };
/** Service call types for the qvr_pro domain. */
export type QvrProServices = {
      start_record: QvrProStartRecordFields;
      stop_record: QvrProStopRecordFields;
    };
/** Service call types for the rachio domain. */
export type RachioServices = {
      set_zone_moisture_percent: RachioSetZoneMoisturePercentFields;
      start_watering: RachioStartWateringFields;
      start_multiple_zone_schedule: RachioStartMultipleZoneScheduleFields;
      pause_watering: RachioPauseWateringFields;
      resume_watering: RachioResumeWateringFields;
      stop_watering: RachioStopWateringFields;
    };
/** Service call types for the rainbird domain. */
export type RainbirdServices = {
      start_irrigation: RainbirdStartIrrigationFields;
      set_rain_delay: RainbirdSetRainDelayFields;
    };
/** Service call types for the rainmachine domain. */
export type RainmachineServices = {
      pause_watering: RainmachinePauseWateringFields;
      restrict_watering: RainmachineRestrictWateringFields;
      start_program: RainmachineStartProgramFields;
      start_zone: RainmachineStartZoneFields;
      stop_all: RainmachineStopAllFields;
      stop_program: RainmachineStopProgramFields;
      stop_zone: RainmachineStopZoneFields;
      unpause_watering: RainmachineUnpauseWateringFields;
      push_flow_meter_data: RainmachinePushFlowMeterDataFields;
      push_weather_data: RainmachinePushWeatherDataFields;
      unrestrict_watering: RainmachineUnrestrictWateringFields;
    };
/** Service call types for the recorder domain. */
export type RecorderServices = {
      purge: RecorderPurgeFields;
      purge_entities: RecorderPurgeEntitiesFields;
      disable: RecorderDisableFields;
      enable: RecorderEnableFields;
      get_statistics: RecorderGetStatisticsFields;
    };
/** Service call types for the remember_the_milk domain. */
export type RememberTheMilkServices = {
      create_task: RememberTheMilkCreateTaskFields;
      complete_task: RememberTheMilkCompleteTaskFields;
    };
/** Service call types for the remote domain. */
export type RemoteServices = {
      turn_on: RemoteTurnOnFields;
      toggle: RemoteToggleFields;
      turn_off: RemoteTurnOffFields;
      send_command: RemoteSendCommandFields;
      learn_command: RemoteLearnCommandFields;
      delete_command: RemoteDeleteCommandFields;
    };
/** Service call types for the renault domain. */
export type RenaultServices = {
      ac_start: RenaultAcStartFields;
      ac_cancel: RenaultAcCancelFields;
      ac_set_schedules: RenaultAcSetSchedulesFields;
      charge_set_schedules: RenaultChargeSetSchedulesFields;
    };
/** Service call types for the renson domain. */
export type RensonServices = {
      set_timer_level: RensonSetTimerLevelFields;
      set_breeze: RensonSetBreezeFields;
      set_pollution_settings: RensonSetPollutionSettingsFields;
    };
/** Service call types for the reolink domain. */
export type ReolinkServices = {
      ptz_move: ReolinkPtzMoveFields;
      play_chime: ReolinkPlayChimeFields;
    };
/** Service call types for the rest domain. */
export type RestServices = {
      reload: RestReloadFields;
    };
/** Service call types for the rest_command domain. */
export type RestCommandServices = {
      reload: RestCommandReloadFields;
    };
/** Service call types for the rflink domain. */
export type RflinkServices = {
      send_command: RflinkSendCommandFields;
    };
/** Service call types for the rfxtrx domain. */
export type RfxtrxServices = {
      send: RfxtrxSendFields;
    };
/** Service call types for the roborock domain. */
export type RoborockServices = {
      get_maps: RoborockGetMapsFields;
      set_vacuum_goto_position: RoborockSetVacuumGotoPositionFields;
      get_vacuum_current_position: RoborockGetVacuumCurrentPositionFields;
    };
/** Service call types for the roku domain. */
export type RokuServices = {
      search: RokuSearchFields;
    };
/** Service call types for the roon domain. */
export type RoonServices = {
      transfer: RoonTransferFields;
    };
/** Service call types for the route53 domain. */
export type Route53Services = {
      update_records: Route53UpdateRecordsFields;
    };
/** Service call types for the scene domain. */
export type SceneServices = {
      turn_on: SceneTurnOnFields;
      reload: SceneReloadFields;
      apply: SceneApplyFields;
      create: SceneCreateFields;
      delete: SceneDeleteFields;
    };
/** Service call types for the schedule domain. */
export type ScheduleServices = {
      reload: ScheduleReloadFields;
      get_schedule: ScheduleGetScheduleFields;
    };
/** Service call types for the screenlogic domain. */
export type ScreenlogicServices = {
      set_color_mode: ScreenlogicSetColorModeFields;
      start_super_chlorination: ScreenlogicStartSuperChlorinationFields;
      stop_super_chlorination: ScreenlogicStopSuperChlorinationFields;
    };
/** Service call types for the script domain. */
export type ScriptServices = {
      reload: ScriptReloadFields;
      turn_on: ScriptTurnOnFields;
      turn_off: ScriptTurnOffFields;
      toggle: ScriptToggleFields;
    };
/** Service call types for the select domain. */
export type SelectServices = {
      select_first: SelectSelectFirstFields;
      select_last: SelectSelectLastFields;
      select_next: SelectSelectNextFields;
      select_option: SelectSelectOptionFields;
      select_previous: SelectSelectPreviousFields;
    };
/** Service call types for the sensibo domain. */
export type SensiboServices = {
      assume_state: SensiboAssumeStateFields;
      enable_timer: SensiboEnableTimerFields;
      enable_pure_boost: SensiboEnablePureBoostFields;
      full_state: SensiboFullStateFields;
      enable_climate_react: SensiboEnableClimateReactFields;
      get_device_capabilities: SensiboGetDeviceCapabilitiesFields;
    };
/** Service call types for the seventeentrack domain. */
export type SeventeentrackServices = {
      get_packages: SeventeentrackGetPackagesFields;
      add_package: SeventeentrackAddPackageFields;
      archive_package: SeventeentrackArchivePackageFields;
    };
/** Service call types for the sharkiq domain. */
export type SharkiqServices = {
      clean_room: SharkiqCleanRoomFields;
    };
/** Service call types for the shopping_list domain. */
export type ShoppingListServices = {
      add_item: ShoppingListAddItemFields;
      remove_item: ShoppingListRemoveItemFields;
      complete_item: ShoppingListCompleteItemFields;
      incomplete_item: ShoppingListIncompleteItemFields;
      complete_all: ShoppingListCompleteAllFields;
      incomplete_all: ShoppingListIncompleteAllFields;
      clear_completed_items: ShoppingListClearCompletedItemsFields;
      sort: ShoppingListSortFields;
    };
/** Service call types for the simplisafe domain. */
export type SimplisafeServices = {
      remove_pin: SimplisafeRemovePinFields;
      set_pin: SimplisafeSetPinFields;
      set_system_properties: SimplisafeSetSystemPropertiesFields;
    };
/** Service call types for the siren domain. */
export type SirenServices = {
      turn_on: SirenTurnOnFields;
      turn_off: SirenTurnOffFields;
      toggle: SirenToggleFields;
    };
/** Service call types for the smarttub domain. */
export type SmarttubServices = {
      set_primary_filtration: SmarttubSetPrimaryFiltrationFields;
      set_secondary_filtration: SmarttubSetSecondaryFiltrationFields;
      snooze_reminder: SmarttubSnoozeReminderFields;
      reset_reminder: SmarttubResetReminderFields;
    };
/** Service call types for the smtp domain. */
export type SmtpServices = {
      reload: SmtpReloadFields;
    };
/** Service call types for the snapcast domain. */
export type SnapcastServices = {
      join: SnapcastJoinFields;
      unjoin: SnapcastUnjoinFields;
      snapshot: SnapcastSnapshotFields;
      restore: SnapcastRestoreFields;
      set_latency: SnapcastSetLatencyFields;
    };
/** Service call types for the snooz domain. */
export type SnoozServices = {
      transition_on: SnoozTransitionOnFields;
      transition_off: SnoozTransitionOffFields;
    };
/** Service call types for the songpal domain. */
export type SongpalServices = {
      set_sound_setting: SongpalSetSoundSettingFields;
    };
/** Service call types for the sonos domain. */
export type SonosServices = {
      snapshot: SonosSnapshotFields;
      restore: SonosRestoreFields;
      set_sleep_timer: SonosSetSleepTimerFields;
      clear_sleep_timer: SonosClearSleepTimerFields;
      play_queue: SonosPlayQueueFields;
      remove_from_queue: SonosRemoveFromQueueFields;
      get_queue: SonosGetQueueFields;
      update_alarm: SonosUpdateAlarmFields;
    };
/** Service call types for the soundtouch domain. */
export type SoundtouchServices = {
      play_everywhere: SoundtouchPlayEverywhereFields;
      create_zone: SoundtouchCreateZoneFields;
      add_zone_slave: SoundtouchAddZoneSlaveFields;
      remove_zone_slave: SoundtouchRemoveZoneSlaveFields;
    };
/** Service call types for the sql domain. */
export type SqlServices = {
      query: SqlQueryFields;
    };
/** Service call types for the squeezebox domain. */
export type SqueezeboxServices = {
      call_method: SqueezeboxCallMethodFields;
      call_query: SqueezeboxCallQueryFields;
    };
/** Service call types for the starline domain. */
export type StarlineServices = {
      update_state: StarlineUpdateStateFields;
      set_scan_interval: StarlineSetScanIntervalFields;
      set_scan_obd_interval: StarlineSetScanObdIntervalFields;
    };
/** Service call types for the statistics domain. */
export type StatisticsServices = {
      reload: StatisticsReloadFields;
    };
/** Service call types for the stookwijzer domain. */
export type StookwijzerServices = {
      get_forecast: StookwijzerGetForecastFields;
    };
/** Service call types for the streamlabswater domain. */
export type StreamlabswaterServices = {
      set_away_mode: StreamlabswaterSetAwayModeFields;
    };
/** Service call types for the subaru domain. */
export type SubaruServices = {
      unlock_specific_door: SubaruUnlockSpecificDoorFields;
    };
/** Service call types for the surepetcare domain. */
export type SurepetcareServices = {
      set_lock_state: SurepetcareSetLockStateFields;
      set_pet_location: SurepetcareSetPetLocationFields;
    };
/** Service call types for the swiss_public_transport domain. */
export type SwissPublicTransportServices = {
      fetch_connections: SwissPublicTransportFetchConnectionsFields;
    };
/** Service call types for the switch domain. */
export type SwitchServices = {
      turn_on: SwitchTurnOnFields;
      turn_off: SwitchTurnOffFields;
      toggle: SwitchToggleFields;
    };
/** Service call types for the switcher_kis domain. */
export type SwitcherKisServices = {
      set_auto_off: SwitcherKisSetAutoOffFields;
      turn_on_with_timer: SwitcherKisTurnOnWithTimerFields;
    };
/** Service call types for the synology_dsm domain. */
export type SynologyDsmServices = {
      reboot: SynologyDsmRebootFields;
      shutdown: SynologyDsmShutdownFields;
    };
/** Service call types for the system_bridge domain. */
export type SystemBridgeServices = {
      get_process_by_id: SystemBridgeGetProcessByIdFields;
      get_processes_by_name: SystemBridgeGetProcessesByNameFields;
      open_path: SystemBridgeOpenPathFields;
      open_url: SystemBridgeOpenUrlFields;
      send_keypress: SystemBridgeSendKeypressFields;
      send_text: SystemBridgeSendTextFields;
      power_command: SystemBridgePowerCommandFields;
    };
/** Service call types for the system_log domain. */
export type SystemLogServices = {
      clear: SystemLogClearFields;
      write: SystemLogWriteFields;
    };
/** Service call types for the tado domain. */
export type TadoServices = {
      set_climate_timer: TadoSetClimateTimerFields;
      set_water_heater_timer: TadoSetWaterHeaterTimerFields;
      set_climate_temperature_offset: TadoSetClimateTemperatureOffsetFields;
      add_meter_reading: TadoAddMeterReadingFields;
    };
/** Service call types for the telegram domain. */
export type TelegramServices = {
      reload: TelegramReloadFields;
    };
/** Service call types for the telegram_bot domain. */
export type TelegramBotServices = {
      send_message: TelegramBotSendMessageFields;
      send_chat_action: TelegramBotSendChatActionFields;
      send_photo: TelegramBotSendPhotoFields;
      send_sticker: TelegramBotSendStickerFields;
      send_animation: TelegramBotSendAnimationFields;
      send_video: TelegramBotSendVideoFields;
      send_voice: TelegramBotSendVoiceFields;
      send_document: TelegramBotSendDocumentFields;
      send_location: TelegramBotSendLocationFields;
      send_poll: TelegramBotSendPollFields;
      edit_message: TelegramBotEditMessageFields;
      edit_message_media: TelegramBotEditMessageMediaFields;
      edit_caption: TelegramBotEditCaptionFields;
      edit_replymarkup: TelegramBotEditReplymarkupFields;
      answer_callback_query: TelegramBotAnswerCallbackQueryFields;
      delete_message: TelegramBotDeleteMessageFields;
      leave_chat: TelegramBotLeaveChatFields;
      set_message_reaction: TelegramBotSetMessageReactionFields;
    };
/** Service call types for the template domain. */
export type TemplateServices = {
      reload: TemplateReloadFields;
    };
/** Service call types for the teslemetry domain. */
export type TeslemetryServices = {
      navigation_gps_request: TeslemetryNavigationGpsRequestFields;
      time_of_use: TeslemetryTimeOfUseFields;
      set_scheduled_charging: TeslemetrySetScheduledChargingFields;
      set_scheduled_departure: TeslemetrySetScheduledDepartureFields;
      valet_mode: TeslemetryValetModeFields;
      speed_limit: TeslemetrySpeedLimitFields;
      add_charge_schedule: TeslemetryAddChargeScheduleFields;
      remove_charge_schedule: TeslemetryRemoveChargeScheduleFields;
      add_precondition_schedule: TeslemetryAddPreconditionScheduleFields;
      remove_precondition_schedule: TeslemetryRemovePreconditionScheduleFields;
    };
/** Service call types for the text domain. */
export type TextServices = {
      set_value: TextSetValueFields;
    };
/** Service call types for the tibber domain. */
export type TibberServices = {
      get_prices: TibberGetPricesFields;
    };
/** Service call types for the time domain. */
export type TimeServices = {
      set_value: TimeSetValueFields;
    };
/** Service call types for the timer domain. */
export type TimerServices = {
      start: TimerStartFields;
      pause: TimerPauseFields;
      cancel: TimerCancelFields;
      finish: TimerFinishFields;
      change: TimerChangeFields;
      reload: TimerReloadFields;
    };
/** Service call types for the todo domain. */
export type TodoServices = {
      get_items: TodoGetItemsFields;
      add_item: TodoAddItemFields;
      update_item: TodoUpdateItemFields;
      remove_item: TodoRemoveItemFields;
      remove_completed_items: TodoRemoveCompletedItemsFields;
    };
/** Service call types for the todoist domain. */
export type TodoistServices = {
      new_task: TodoistNewTaskFields;
    };
/** Service call types for the toon domain. */
export type ToonServices = {
      update: ToonUpdateFields;
    };
/** Service call types for the totalconnect domain. */
export type TotalconnectServices = {
      arm_away_instant: TotalconnectArmAwayInstantFields;
      arm_home_instant: TotalconnectArmHomeInstantFields;
    };
/** Service call types for the tplink domain. */
export type TplinkServices = {
      sequence_effect: TplinkSequenceEffectFields;
      random_effect: TplinkRandomEffectFields;
    };
/** Service call types for the tplink_omada domain. */
export type TplinkOmadaServices = {
      reconnect_client: TplinkOmadaReconnectClientFields;
    };
/** Service call types for the transmission domain. */
export type TransmissionServices = {
      add_torrent: TransmissionAddTorrentFields;
      remove_torrent: TransmissionRemoveTorrentFields;
      start_torrent: TransmissionStartTorrentFields;
      stop_torrent: TransmissionStopTorrentFields;
    };
/** Service call types for the trend domain. */
export type TrendServices = {
      reload: TrendReloadFields;
    };
/** Service call types for the tts domain. */
export type TtsServices = {
      say: TtsSayFields;
      speak: TtsSpeakFields;
      clear_cache: TtsClearCacheFields;
    };
/** Service call types for the unifi domain. */
export type UnifiServices = {
      reconnect_client: UnifiReconnectClientFields;
      remove_clients: UnifiRemoveClientsFields;
    };
/** Service call types for the unifiprotect domain. */
export type UnifiprotectServices = {
      add_doorbell_text: UnifiprotectAddDoorbellTextFields;
      remove_doorbell_text: UnifiprotectRemoveDoorbellTextFields;
      set_chime_paired_doorbells: UnifiprotectSetChimePairedDoorbellsFields;
      remove_privacy_zone: UnifiprotectRemovePrivacyZoneFields;
      get_user_keyring_info: UnifiprotectGetUserKeyringInfoFields;
    };
/** Service call types for the universal domain. */
export type UniversalServices = {
      reload: UniversalReloadFields;
    };
/** Service call types for the upb domain. */
export type UpbServices = {
      light_fade_start: UpbLightFadeStartFields;
      light_fade_stop: UpbLightFadeStopFields;
      light_blink: UpbLightBlinkFields;
      link_deactivate: UpbLinkDeactivateFields;
      link_goto: UpbLinkGotoFields;
      link_fade_start: UpbLinkFadeStartFields;
      link_fade_stop: UpbLinkFadeStopFields;
      link_blink: UpbLinkBlinkFields;
    };
/** Service call types for the update domain. */
export type UpdateServices = {
      install: UpdateInstallFields;
      skip: UpdateSkipFields;
      clear_skipped: UpdateClearSkippedFields;
    };
/** Service call types for the utility_meter domain. */
export type UtilityMeterServices = {
      reset: UtilityMeterResetFields;
      calibrate: UtilityMeterCalibrateFields;
    };
/** Service call types for the vacuum domain. */
export type VacuumServices = {
      turn_on: VacuumTurnOnFields;
      turn_off: VacuumTurnOffFields;
      toggle: VacuumToggleFields;
      stop: VacuumStopFields;
      locate: VacuumLocateFields;
      start_pause: VacuumStartPauseFields;
      start: VacuumStartFields;
      pause: VacuumPauseFields;
      return_to_base: VacuumReturnToBaseFields;
      clean_spot: VacuumCleanSpotFields;
      send_command: VacuumSendCommandFields;
      set_fan_speed: VacuumSetFanSpeedFields;
    };
/** Service call types for the vallox domain. */
export type ValloxServices = {
      set_profile_fan_speed_home: ValloxSetProfileFanSpeedHomeFields;
      set_profile_fan_speed_away: ValloxSetProfileFanSpeedAwayFields;
      set_profile_fan_speed_boost: ValloxSetProfileFanSpeedBoostFields;
      set_profile: ValloxSetProfileFields;
    };
/** Service call types for the valve domain. */
export type ValveServices = {
      open_valve: ValveOpenValveFields;
      close_valve: ValveCloseValveFields;
      toggle: ValveToggleFields;
      set_valve_position: ValveSetValvePositionFields;
      stop_valve: ValveStopValveFields;
    };
/** Service call types for the velbus domain. */
export type VelbusServices = {
      sync_clock: VelbusSyncClockFields;
      scan: VelbusScanFields;
      clear_cache: VelbusClearCacheFields;
      set_memo_text: VelbusSetMemoTextFields;
    };
/** Service call types for the velux domain. */
export type VeluxServices = {
      reboot_gateway: VeluxRebootGatewayFields;
    };
/** Service call types for the verisure domain. */
export type VerisureServices = {
      capture_smartcam: VerisureCaptureSmartcamFields;
      enable_autolock: VerisureEnableAutolockFields;
      disable_autolock: VerisureDisableAutolockFields;
    };
/** Service call types for the vesync domain. */
export type VesyncServices = {
      update_devices: VesyncUpdateDevicesFields;
    };
/** Service call types for the vicare domain. */
export type VicareServices = {
      set_vicare_mode: VicareSetVicareModeFields;
    };
/** Service call types for the vizio domain. */
export type VizioServices = {
      update_setting: VizioUpdateSettingFields;
    };
/** Service call types for the wake_on_lan domain. */
export type WakeOnLanServices = {
      send_magic_packet: WakeOnLanSendMagicPacketFields;
    };
/** Service call types for the water_heater domain. */
export type WaterHeaterServices = {
      set_away_mode: WaterHeaterSetAwayModeFields;
      set_temperature: WaterHeaterSetTemperatureFields;
      set_operation_mode: WaterHeaterSetOperationModeFields;
      turn_on: WaterHeaterTurnOnFields;
      turn_off: WaterHeaterTurnOffFields;
    };
/** Service call types for the waze_travel_time domain. */
export type WazeTravelTimeServices = {
      get_travel_times: WazeTravelTimeGetTravelTimesFields;
    };
/** Service call types for the weather domain. */
export type WeatherServices = {
      get_forecast: WeatherGetForecastFields;
      get_forecasts: WeatherGetForecastsFields;
    };
/** Service call types for the webostv domain. */
export type WebostvServices = {
      button: WebostvButtonFields;
      command: WebostvCommandFields;
      select_sound_output: WebostvSelectSoundOutputFields;
    };
/** Service call types for the wemo domain. */
export type WemoServices = {
      set_humidity: WemoSetHumidityFields;
      reset_filter_life: WemoResetFilterLifeFields;
    };
/** Service call types for the wilight domain. */
export type WilightServices = {
      set_watering_time: WilightSetWateringTimeFields;
      set_pause_time: WilightSetPauseTimeFields;
      set_trigger: WilightSetTriggerFields;
    };
/** Service call types for the workday domain. */
export type WorkdayServices = {
      check_date: WorkdayCheckDateFields;
    };
/** Service call types for the xiaomi_aqara domain. */
export type XiaomiAqaraServices = {
      add_device: XiaomiAqaraAddDeviceFields;
      play_ringtone: XiaomiAqaraPlayRingtoneFields;
      remove_device: XiaomiAqaraRemoveDeviceFields;
      stop_ringtone: XiaomiAqaraStopRingtoneFields;
    };
/** Service call types for the xiaomi_miio domain. */
export type XiaomiMiioServices = {
      fan_reset_filter: XiaomiMiioFanResetFilterFields;
      fan_set_extra_features: XiaomiMiioFanSetExtraFeaturesFields;
      light_set_scene: XiaomiMiioLightSetSceneFields;
      light_set_delayed_turn_off: XiaomiMiioLightSetDelayedTurnOffFields;
      light_reminder_on: XiaomiMiioLightReminderOnFields;
      light_reminder_off: XiaomiMiioLightReminderOffFields;
      light_night_light_mode_on: XiaomiMiioLightNightLightModeOnFields;
      light_night_light_mode_off: XiaomiMiioLightNightLightModeOffFields;
      light_eyecare_mode_on: XiaomiMiioLightEyecareModeOnFields;
      light_eyecare_mode_off: XiaomiMiioLightEyecareModeOffFields;
      remote_learn_command: XiaomiMiioRemoteLearnCommandFields;
      remote_set_led_on: XiaomiMiioRemoteSetLedOnFields;
      remote_set_led_off: XiaomiMiioRemoteSetLedOffFields;
      switch_set_wifi_led_on: XiaomiMiioSwitchSetWifiLedOnFields;
      switch_set_wifi_led_off: XiaomiMiioSwitchSetWifiLedOffFields;
      switch_set_power_price: XiaomiMiioSwitchSetPowerPriceFields;
      switch_set_power_mode: XiaomiMiioSwitchSetPowerModeFields;
      vacuum_remote_control_start: XiaomiMiioVacuumRemoteControlStartFields;
      vacuum_remote_control_stop: XiaomiMiioVacuumRemoteControlStopFields;
      vacuum_remote_control_move: XiaomiMiioVacuumRemoteControlMoveFields;
      vacuum_remote_control_move_step: XiaomiMiioVacuumRemoteControlMoveStepFields;
      vacuum_clean_zone: XiaomiMiioVacuumCleanZoneFields;
      vacuum_goto: XiaomiMiioVacuumGotoFields;
      vacuum_clean_segment: XiaomiMiioVacuumCleanSegmentFields;
    };
/** Service call types for the yamaha domain. */
export type YamahaServices = {
      enable_output: YamahaEnableOutputFields;
      menu_cursor: YamahaMenuCursorFields;
      select_scene: YamahaSelectSceneFields;
    };
/** Service call types for the yardian domain. */
export type YardianServices = {
      start_irrigation: YardianStartIrrigationFields;
    };
/** Service call types for the yeelight domain. */
export type YeelightServices = {
      set_mode: YeelightSetModeFields;
      set_color_scene: YeelightSetColorSceneFields;
      set_hsv_scene: YeelightSetHsvSceneFields;
      set_color_temp_scene: YeelightSetColorTempSceneFields;
      set_color_flow_scene: YeelightSetColorFlowSceneFields;
      set_auto_delay_off_scene: YeelightSetAutoDelayOffSceneFields;
      start_flow: YeelightStartFlowFields;
      set_music_mode: YeelightSetMusicModeFields;
    };
/** Service call types for the yolink domain. */
export type YolinkServices = {
      play_on_speaker_hub: YolinkPlayOnSpeakerHubFields;
    };
/** Service call types for the zha domain. */
export type ZhaServices = {
      permit: ZhaPermitFields;
      remove: ZhaRemoveFields;
      reconfigure_device: ZhaReconfigureDeviceFields;
      set_zigbee_cluster_attribute: ZhaSetZigbeeClusterAttributeFields;
      issue_zigbee_cluster_command: ZhaIssueZigbeeClusterCommandFields;
      issue_zigbee_group_command: ZhaIssueZigbeeGroupCommandFields;
      warning_device_squawk: ZhaWarningDeviceSquawkFields;
      warning_device_warn: ZhaWarningDeviceWarnFields;
      clear_lock_user_code: ZhaClearLockUserCodeFields;
      enable_lock_user_code: ZhaEnableLockUserCodeFields;
      disable_lock_user_code: ZhaDisableLockUserCodeFields;
      set_lock_user_code: ZhaSetLockUserCodeFields;
    };
/** Service call types for the zone domain. */
export type ZoneServices = {
      reload: ZoneReloadFields;
    };
/** Service call types for the zoneminder domain. */
export type ZoneminderServices = {
      set_run_state: ZoneminderSetRunStateFields;
    };
/** Service call types for the zwave_js domain. */
export type ZwaveJsServices = {
      clear_lock_usercode: ZwaveJsClearLockUsercodeFields;
      set_lock_usercode: ZwaveJsSetLockUsercodeFields;
      set_lock_configuration: ZwaveJsSetLockConfigurationFields;
      set_config_parameter: ZwaveJsSetConfigParameterFields;
      bulk_set_partial_config_parameters: ZwaveJsBulkSetPartialConfigParametersFields;
      refresh_value: ZwaveJsRefreshValueFields;
      set_value: ZwaveJsSetValueFields;
      multicast_set_value: ZwaveJsMulticastSetValueFields;
      ping: ZwaveJsPingFields;
      reset_meter: ZwaveJsResetMeterFields;
      invoke_cc_api: ZwaveJsInvokeCcApiFields;
      refresh_notifications: ZwaveJsRefreshNotificationsFields;
    };
/** Complete map of all Home Assistant service calls. */
/** */
/** Use the ServiceCall<Domain, Service> helper type for type-safe service calls. */
/** */
/** @example */
/** ```typescript */
/** const lightCall: ServiceCall<'light', 'turn_on'> = { */
/**   brightness_pct: 50, */
/**   rgb_color: [255, 100, 100] */
/** }; */
/** ``` */
export type Services = {
      abode: AbodeServices;
      adguard: AdguardServices;
      ads: AdsServices;
      advantage_air: AdvantageAirServices;
      aftership: AftershipServices;
      agent_dvr: AgentDvrServices;
      ai_task: AiTaskServices;
      alarm_control_panel: AlarmControlPanelServices;
      alarmdecoder: AlarmdecoderServices;
      alert: AlertServices;
      alexa_devices: AlexaDevicesServices;
      amberelectric: AmberelectricServices;
      amcrest: AmcrestServices;
      androidtv: AndroidtvServices;
      assist_satellite: AssistSatelliteServices;
      automation: AutomationServices;
      backup: BackupServices;
      bang_olufsen: BangOlufsenServices;
      bayesian: BayesianServices;
      blackbird: BlackbirdServices;
      blink: BlinkServices;
      blue_current: BlueCurrentServices;
      bluesound: BluesoundServices;
      bond: BondServices;
      bosch_alarm: BoschAlarmServices;
      bring: BringServices;
      browser: BrowserServices;
      button: ButtonServices;
      calendar: CalendarServices;
      camera: CameraServices;
      cast: CastServices;
      channels: ChannelsServices;
      climate: ClimateServices;
      cloud: CloudServices;
      cloudflare: CloudflareServices;
      color_extractor: ColorExtractorServices;
      command_line: CommandLineServices;
      conversation: ConversationServices;
      counter: CounterServices;
      cover: CoverServices;
      date: DateServices;
      datetime: DatetimeServices;
      debugpy: DebugpyServices;
      deconz: DeconzServices;
      demo: DemoServices;
      denonavr: DenonavrServices;
      derivative: DerivativeServices;
      device_tracker: DeviceTrackerServices;
      downloader: DownloaderServices;
      duckdns: DuckdnsServices;
      dynalite: DynaliteServices;
      easyenergy: EasyenergyServices;
      ebusd: EbusdServices;
      ecobee: EcobeeServices;
      ecovacs: EcovacsServices;
      elgato: ElgatoServices;
      elkm1: Elkm1Services;
      energyzero: EnergyzeroServices;
      environment_canada: EnvironmentCanadaServices;
      envisalink: EnvisalinkServices;
      epson: EpsonServices;
      evohome: EvohomeServices;
      ezviz: EzvizServices;
      fan: FanServices;
      ffmpeg: FfmpegServices;
      file: FileServices;
      filter: FilterServices;
      flo: FloServices;
      flume: FlumeServices;
      flux_led: FluxLedServices;
      foscam: FoscamServices;
      foursquare: FoursquareServices;
      freebox: FreeboxServices;
      fritz: FritzServices;
      frontend: FrontendServices;
      fully_kiosk: FullyKioskServices;
      generic: GenericServices;
      generic_thermostat: GenericThermostatServices;
      geniushub: GeniushubServices;
      google: GoogleServices;
      google_assistant: GoogleAssistantServices;
      google_assistant_sdk: GoogleAssistantSdkServices;
      google_generative_ai_conversation: GoogleGenerativeAiConversationServices;
      google_mail: GoogleMailServices;
      google_photos: GooglePhotosServices;
      google_sheets: GoogleSheetsServices;
      group: GroupServices;
      guardian: GuardianServices;
      habitica: HabiticaServices;
      harmony: HarmonyServices;
      hassio: HassioServices;
      hdmi_cec: HdmiCecServices;
      heos: HeosServices;
      history_stats: HistoryStatsServices;
      hive: HiveServices;
      home_connect: HomeConnectServices;
      homeassistant: HomeassistantServices;
      homekit: HomekitServices;
      homematic: HomematicServices;
      homematicip_cloud: HomematicipCloudServices;
      homeworks: HomeworksServices;
      html5: Html5Services;
      huawei_lte: HuaweiLteServices;
      hue: HueServices;
      humidifier: HumidifierServices;
      husqvarna_automower: HusqvarnaAutomowerServices;
      hydrawise: HydrawiseServices;
      icloud: IcloudServices;
      ifttt: IftttServices;
      ihc: IhcServices;
      image: ImageServices;
      image_processing: ImageProcessingServices;
      imap: ImapServices;
      immich: ImmichServices;
      input_boolean: InputBooleanServices;
      input_button: InputButtonServices;
      input_datetime: InputDatetimeServices;
      input_number: InputNumberServices;
      input_select: InputSelectServices;
      input_text: InputTextServices;
      insteon: InsteonServices;
      intent_script: IntentScriptServices;
      iperf3: Iperf3Services;
      isy994: Isy994Services;
      izone: IzoneServices;
      jewish_calendar: JewishCalendarServices;
      keba: KebaServices;
      kef: KefServices;
      keymitt_ble: KeymittBleServices;
      kitchen_sink: KitchenSinkServices;
      knx: KnxServices;
      kodi: KodiServices;
      lametric: LametricServices;
      lawn_mower: LawnMowerServices;
      lcn: LcnServices;
      lifx: LifxServices;
      light: LightServices;
      linkplay: LinkplayServices;
      litterrobot: LitterrobotServices;
      local_file: LocalFileServices;
      lock: LockServices;
      logbook: LogbookServices;
      logger: LoggerServices;
      lovelace: LovelaceServices;
      lyric: LyricServices;
      mastodon: MastodonServices;
      matrix: MatrixServices;
      matter: MatterServices;
      mealie: MealieServices;
      media_extractor: MediaExtractorServices;
      media_player: MediaPlayerServices;
      melcloud: MelcloudServices;
      microsoft_face: MicrosoftFaceServices;
      miele: MieleServices;
      mill: MillServices;
      min_max: MinMaxServices;
      minio: MinioServices;
      modbus: ModbusServices;
      modern_forms: ModernFormsServices;
      monoprice: MonopriceServices;
      motion_blinds: MotionBlindsServices;
      motioneye: MotioneyeServices;
      mqtt: MqttServices;
      music_assistant: MusicAssistantServices;
      neato: NeatoServices;
      ness_alarm: NessAlarmServices;
      netatmo: NetatmoServices;
      netgear_lte: NetgearLteServices;
      nexia: NexiaServices;
      nintendo_parental_controls: NintendoParentalControlsServices;
      nissan_leaf: NissanLeafServices;
      nordpool: NordpoolServices;
      notify: NotifyServices;
      ntfy: NtfyServices;
      nuki: NukiServices;
      number: NumberServices;
      nws: NwsServices;
      nx584: Nx584Services;
      nzbget: NzbgetServices;
      octoprint: OctoprintServices;
      ohme: OhmeServices;
      ombi: OmbiServices;
      omnilogic: OmnilogicServices;
      onedrive: OnedriveServices;
      onvif: OnvifServices;
      openai_conversation: OpenaiConversationServices;
      openhome: OpenhomeServices;
      opentherm_gw: OpenthermGwServices;
      openweathermap: OpenweathermapServices;
      osoenergy: OsoenergyServices;
      overseerr: OverseerrServices;
      persistent_notification: PersistentNotificationServices;
      person: PersonServices;
      pi_hole: PiHoleServices;
      picnic: PicnicServices;
      pilight: PilightServices;
      plex: PlexServices;
      profiler: ProfilerServices;
      prosegur: ProsegurServices;
      ps4: Ps4Services;
      python_script: PythonScriptServices;
      qbittorrent: QbittorrentServices;
      qvr_pro: QvrProServices;
      rachio: RachioServices;
      rainbird: RainbirdServices;
      rainmachine: RainmachineServices;
      recorder: RecorderServices;
      remember_the_milk: RememberTheMilkServices;
      remote: RemoteServices;
      renault: RenaultServices;
      renson: RensonServices;
      reolink: ReolinkServices;
      rest: RestServices;
      rest_command: RestCommandServices;
      rflink: RflinkServices;
      rfxtrx: RfxtrxServices;
      roborock: RoborockServices;
      roku: RokuServices;
      roon: RoonServices;
      route53: Route53Services;
      scene: SceneServices;
      schedule: ScheduleServices;
      screenlogic: ScreenlogicServices;
      script: ScriptServices;
      select: SelectServices;
      sensibo: SensiboServices;
      seventeentrack: SeventeentrackServices;
      sharkiq: SharkiqServices;
      shopping_list: ShoppingListServices;
      simplisafe: SimplisafeServices;
      siren: SirenServices;
      smarttub: SmarttubServices;
      smtp: SmtpServices;
      snapcast: SnapcastServices;
      snooz: SnoozServices;
      songpal: SongpalServices;
      sonos: SonosServices;
      soundtouch: SoundtouchServices;
      sql: SqlServices;
      squeezebox: SqueezeboxServices;
      starline: StarlineServices;
      statistics: StatisticsServices;
      stookwijzer: StookwijzerServices;
      streamlabswater: StreamlabswaterServices;
      subaru: SubaruServices;
      surepetcare: SurepetcareServices;
      swiss_public_transport: SwissPublicTransportServices;
      switch: SwitchServices;
      switcher_kis: SwitcherKisServices;
      synology_dsm: SynologyDsmServices;
      system_bridge: SystemBridgeServices;
      system_log: SystemLogServices;
      tado: TadoServices;
      telegram: TelegramServices;
      telegram_bot: TelegramBotServices;
      template: TemplateServices;
      teslemetry: TeslemetryServices;
      text: TextServices;
      tibber: TibberServices;
      time: TimeServices;
      timer: TimerServices;
      todo: TodoServices;
      todoist: TodoistServices;
      toon: ToonServices;
      totalconnect: TotalconnectServices;
      tplink: TplinkServices;
      tplink_omada: TplinkOmadaServices;
      transmission: TransmissionServices;
      trend: TrendServices;
      tts: TtsServices;
      unifi: UnifiServices;
      unifiprotect: UnifiprotectServices;
      universal: UniversalServices;
      upb: UpbServices;
      update: UpdateServices;
      utility_meter: UtilityMeterServices;
      vacuum: VacuumServices;
      vallox: ValloxServices;
      valve: ValveServices;
      velbus: VelbusServices;
      velux: VeluxServices;
      verisure: VerisureServices;
      vesync: VesyncServices;
      vicare: VicareServices;
      vizio: VizioServices;
      wake_on_lan: WakeOnLanServices;
      water_heater: WaterHeaterServices;
      waze_travel_time: WazeTravelTimeServices;
      weather: WeatherServices;
      webostv: WebostvServices;
      wemo: WemoServices;
      wilight: WilightServices;
      workday: WorkdayServices;
      xiaomi_aqara: XiaomiAqaraServices;
      xiaomi_miio: XiaomiMiioServices;
      yamaha: YamahaServices;
      yardian: YardianServices;
      yeelight: YeelightServices;
      yolink: YolinkServices;
      zha: ZhaServices;
      zone: ZoneServices;
      zoneminder: ZoneminderServices;
      zwave_js: ZwaveJsServices;
    };
/** Extract service names for a specific domain. */
/** */
/** @example */
/** ```typescript */
/** type LightServiceNames = ServiceName<'light'>; // 'toggle' | 'turn_on' | 'turn_off' */
/** ``` */
export type ServiceName<D extends Domain> = D extends keyof Services ? keyof Services[D] : never;
/** Type-safe service call fields for a specific domain and service. */
/** */
/** @example */
/** ```typescript */
/** const call: ServiceCall<'light', 'turn_on'> = { */
/**   brightness_pct: 50  // Autocomplete works! */
/** }; */
/** ``` */
export type ServiceCall<D extends Domain, S extends ServiceName<D>> = D extends keyof Services ? (S extends keyof Services[D] ? Services[D][S] : never) : never;
