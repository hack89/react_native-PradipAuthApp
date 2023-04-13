#include "revng-model-declarations.h"
#include "revng-qemu-helpers-declarations.h"

generic64_t prefix_function_0x401000_Code_x86_64(void) {
    struct_1175064909493751787 stack;
    stack.unnamed_field_at_offset_0 = init_rax();
    frame_dummy();
    prefix___do_global_ctors_aux();
    return stack.unnamed_field_at_offset_0;
}

void prefix_function_0x401010_Code_x86_64(void) {
    struct_17022617119476981346 stack;
    prefix__start_c((int64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16));
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rax();
    int32_t var_0;
    var_0 = prefix___libc_start_main((function_type_cabifunction_14277401164906130151 *) ((generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 2722), (int32_t) (generic32_t) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16), (int8_t **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24));
    generic64_t var_1;
    var_1 = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8;
    artificial_struct_returned_by_build_PlainMetaAddress var_2 = build_PlainMetaAddress(0, 0, 0, 0);
    artificial_struct_returned_by_build_PlainMetaAddress var_3 = build_PlainMetaAddress(0, 0, 4, var_1);
    __builtin_unreachable();
}

void prefix__start_c(int64_t *p) {
    struct_3159967166528217180 stack;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rax();
    int32_t var_0;
    var_0 = prefix___libc_start_main((function_type_cabifunction_14277401164906130151 *) ((generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 2722), (int32_t) (generic32_t) *p, (int8_t **) ((generic64_t) p + 8));
    return;
}

void deregister_tm_clones(void) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return;
}

void register_tm_clones(void) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return;
}

void prefix___do_global_dtors_aux(void) {
    struct_14001802687707118778 stack;
    if (prefix_segment_0x406fd0_Generic64_2224.completed_5933 == '\000') {
        deregister_tm_clones();
        if (!(*(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224 + 32) == 0)) {
            *(generic64_t *) ((generic64_t) &stack - 8) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0 + 310;
            artificial_struct_returned_by_build_PlainMetaAddress var_0 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_1 = build_PlainMetaAddress(0, 0, 4, 0);
            __builtin_unreachable();
        }
        prefix_segment_0x406fd0_Generic64_2224.completed_5933 = '\001';
    }
    return;
}

void frame_dummy(void) {
    struct_17260238463689407612 stack;
    if (*(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224 + 40) == 0) {
        return;
    }
    stack.unnamed_field_at_offset_0 = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0 + 369;
    artificial_struct_returned_by_build_PlainMetaAddress var_0 = build_PlainMetaAddress(0, 0, 0, 0);
    artificial_struct_returned_by_build_PlainMetaAddress var_1 = build_PlainMetaAddress(init_pc_epoch(), init_pc_address_space(), init_pc_type(), 0);
    __builtin_unreachable();
}

int32_t root(int8_t *buffer, size_t size) {
    struct_2420670142834188025 stack;
    generic64_t var_0;
    generic32_t var_1;
    generic8_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic32_t var_7;
    generic64_t var_8;
    generic32_t var_9;
    generic64_t var_10;
    var_10 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 240;
    *(int8_t **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = buffer;
    *(size_t *) &stack.unnamed_field_at_offset_0 = size;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 = 4294967295;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) = 0;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = 0;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) = 0;
    while (true) {
        var_5 = (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232);
        if (!(*(generic64_t *) &stack.unnamed_field_at_offset_0 > var_5)) {
            var_8 = (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228);
            break;
        }
        bool break_from_loop_11 = false;
        var_2 = *(generic8_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + var_5);
        switch (var_2) {
            case 40:
            {
                var_8 = 666;
                if (!(*(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) == 0)) {
                    break_from_loop_11 = true;
                    break;
                }
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = 0;
                generic32_t var_12;
                var_12 = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 + 1;
                stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 = var_12;
                var_8 = 666;
                var_9 = 0;
                if (var_12 == 10) {
                    break_from_loop_11 = true;
                    break;
                }
                while (true) {
                    generic32_t var_13;
                    var_13 = var_9;
                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 220) = var_13;
                    if (var_13 > 19) {
                        break;
                    }
                    *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = '\000';
                    var_9 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 220) + 1;
                    continue;
                }
                generic32_t var_14;
                var_14 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) + 1;
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) = var_14;
                var_3 = (generic64_t) var_14;
                var_8 = 666;
                if (*(generic64_t *) &stack.unnamed_field_at_offset_0 == var_3) {
                    break_from_loop_11 = true;
                    break;
                }
                var_8 = 666;
                switch ((*(generic8_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + var_3))) {
                    case 33:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 63:
                    case 94:
                    case 124:
                    case 126:
                    {
                        switch ((*(generic8_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + var_3))) {
                            case 33:
                            case 126:
                            {
                                *(generic16_t *) ((generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 222) = 1;
                            } break;
                            case 63:
                            {
                                *(generic16_t *) ((generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 222) = 3;
                            } break;
                            case 38:
                            case 42:
                            case 43:
                            case 45:
                            case 94:
                            case 124:
                            {
                                *(generic16_t *) ((generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 222) = 2;
                            } break;
                        }
                        *(generic8_t *) ((generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 224) = *(generic8_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232));
                        *(generic16_t *) ((generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 220) = 0;
                        generic32_t var_15;
                        var_15 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) + 1;
                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) = var_15;
                        var_6 = (generic64_t) var_15;
                        var_8 = 666;
                        if (*(generic64_t *) &stack.unnamed_field_at_offset_0 == var_6) {
                            break_from_loop_11 = true;
                            break;
                        }
                        var_8 = 666;
                        if (!(*(generic8_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + var_6) == ' ')) {
                            break_from_loop_11 = true;
                            break;
                        }
                    } break;
                    default:
                    {
                        break_from_loop_11 = true;
                        break;
                    } break;
                }
                if (break_from_loop_11)
                    break;
            } break;
            case 45:
            {
                var_8 = 666;
                if (!(*(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) == 0)) {
                    break_from_loop_11 = true;
                    break;
                }
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) = 2;
            } break;
            default:
            {
                if (var_2 - '0' > '\t') {
                    switch (var_2) {
                        case 32:
                        {
                            var_7 = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236;
                            var_8 = 666;
                            if (var_7 == -1) {
                                break_from_loop_11 = true;
                                break;
                            }
                            generic64_t var_16;
                            var_16 = (generic64_t) var_7;
                            *(generic32_t *) ((var_16 * 5 + (generic64_t) *(generic16_t *) (var_16 * 20 + var_10 - 220) << 2) + var_10 - 216) = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228);
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) = 0;
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = 0;
                            generic64_t var_17;
                            var_17 = (generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10 - 220;
                            *(generic16_t *) var_17 = *(generic16_t *) var_17 + 1;
                            generic64_t var_18;
                            var_18 = (generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10;
                            var_8 = 666;
                            if (*(generic16_t *) (var_18 - 220) == *(generic16_t *) (var_18 - 222)) {
                                break_from_loop_11 = true;
                                break;
                            }
                        } break;
                        case 41:
                        {
                            var_1 = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236;
                            var_8 = 666;
                            if (var_1 == -1) {
                                break_from_loop_11 = true;
                                break;
                            }
                            generic64_t var_19;
                            var_19 = (generic64_t) var_1;
                            *(generic32_t *) ((var_19 * 5 + (generic64_t) *(generic16_t *) (var_19 * 20 + var_10 - 220) << 2) + var_10 - 216) = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228);
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) = 0;
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = 0;
                            var_0 = (generic64_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 * 20 + var_10;
                            var_8 = 666;
                            if (!(((generic64_t) *(generic16_t *) (var_0 - 220) + 1 - (generic64_t) *(generic16_t *) (var_0 - 222) & 0xFFFFFFFF) == 0)) {
                                break_from_loop_11 = true;
                                break;
                            }
                            var_8 = 666;
                            switch ((*(generic8_t *) (var_0 - 224))) {
                                case 33:
                                case 38:
                                case 42:
                                case 43:
                                case 45:
                                case 63:
                                case 94:
                                case 124:
                                case 126:
                                {
                                    switch ((*(generic8_t *) (var_0 - 224))) {
                                        case 33:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = (generic32_t) *(generic32_t *) (var_0 - 216) == 0;
                                        } break;
                                        case 45:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) - *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 63:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 + (*(generic32_t *) (var_0 - 216) == 0 ? 18446744073709551408 : 18446744073709551404));
                                        } break;
                                        case 42:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) * *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 38:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) & *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 124:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) | *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 43:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) + *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 94:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = *(generic32_t *) (var_0 - 216) ^ *(generic32_t *) (var_0 - 212);
                                        } break;
                                        case 126:
                                        {
                                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = ~*(generic32_t *) (var_0 - 216);
                                        } break;
                                    }
                                    generic32_t var_20;
                                    var_20 = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 - 1;
                                    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_236 = var_20;
                                    var_8 = 666;
                                    if (var_20 < 4294967295) {
                                        break_from_loop_11 = true;
                                        break;
                                    }
                                } break;
                                default:
                                {
                                    break_from_loop_11 = true;
                                    break;
                                } break;
                            }
                            if (break_from_loop_11)
                                break;
                        } break;
                        default:
                        {
                            break;
                        } break;
                    }
                    if (break_from_loop_11)
                        break;
                }
                var_4 = (generic32_t) var_2 - 48 + *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) * 10;
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = var_4;
                if (*(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) == 2) {
                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 228) = 0 - var_4;
                }
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) = 1;
            } break;
        }
        if (break_from_loop_11)
            break;
        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 232) + 1;
        continue;
    }
    return (int32_t) var_8;
}

int32_t main(int32_t argc, int8_t **argv) {
    struct_9657295117260230382 stack;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_20 = argc;
    *(int8_t ***) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = argv;
    size_t var_0;
    var_0 = strlen((int8_t const *) *(generic64_t *) ((generic64_t) argv + 8));
    int32_t var_1;
    var_1 = root((int8_t *) *(generic64_t *) (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) + 8), var_0);
    int32_t var_2;
    var_2 = printf((typedef_9096570610628524684) &prefix_segment_0x405000_Generic64_3292);
    return (int32_t) 0;
}

void dummy(void) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return;
}

void dummy1(void *p) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return;
}

void prefix___init_libc(int8_t **envp, int8_t *pn) {
    struct_18315400503039928243 stack;
    uint64_t loop_state_var;
    generic64_t var_0;
    generic32_t var_1;
    generic32_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic32_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic32_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic32_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic32_t var_27;
    generic32_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic32_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic64_t var_36;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic32_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic32_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic32_t var_49;
    generic32_t var_50;
    generic32_t var_51;
    generic32_t var_52;
    generic64_t var_53;
    generic64_t var_54;
    generic32_t var_55;
    generic64_t var_56;
    generic64_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic32_t var_60;
    generic32_t var_61;
    generic32_t var_62;
    generic32_t var_63;
    generic64_t var_64;
    generic64_t var_65;
    generic32_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic32_t var_69;
    generic32_t var_70;
    generic32_t var_71;
    generic32_t var_72;
    generic32_t var_73;
    generic32_t var_74;
    generic32_t var_75;
    generic8_t var_76;
    generic32_t var_77;
    generic64_t var_78;
    generic32_t var_79;
    generic64_t var_80;
    generic64_t var_81;
    generic64_t var_82;
    generic64_t var_83;
    generic64_t var_84;
    generic32_t var_85;
    generic32_t var_86;
    generic32_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic32_t var_90;
    generic64_t var_91;
    generic32_t var_92;
    generic32_t var_93;
    generic32_t var_94;
    generic32_t var_95;
    generic32_t var_96;
    generic32_t var_97;
    generic32_t var_98;
    generic32_t var_99;
    generic8_t var_100;
    generic32_t var_101;
    generic64_t var_102;
    generic32_t var_103;
    generic64_t var_104;
    generic64_t var_105;
    generic64_t var_106;
    generic64_t var_107;
    generic64_t var_108;
    generic32_t var_109;
    generic64_t var_110;
    var_110 = init_state_0x83f8();
    generic64_t var_111;
    var_111 = init_state_0x8340();
    generic64_t var_112;
    var_112 = init_state_0x83d0();
    generic32_t var_113;
    var_113 = init_state_0x83d8();
    generic64_t var_114;
    var_114 = init_state_0x8408();
    generic64_t var_115;
    var_115 = init_state_0x8328();
    generic64_t var_116;
    var_116 = init_r9();
    generic64_t var_117;
    var_117 = init_r10();
    generic64_t var_118;
    var_118 = init_state_0x8358();
    generic64_t var_119;
    var_119 = init_state_0x8310();
    generic32_t var_120;
    var_120 = init_state_0x8334();
    generic32_t var_121;
    var_121 = init_state_0x834c();
    prefix_segment_0x406fd0_Generic64_2224.prefix__environ = envp;
    var_33 = 0;
    while (true) {
        var_12 = var_33;
        var_34 = 0;
        if (var_12 == 76) {
            break;
        }
        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40 = 0;
        var_33 = var_12 + 1;
        continue;
    }
    while (true) {
        generic64_t var_122;
        var_122 = var_34;
        var_13 = var_122 << 3;
        var_34 = var_122 + 1;
        if (!(*(generic64_t *) (var_13 + (generic64_t) envp) == 0)) {
            continue;
        }
        break;
    }
    var_21 = var_13 + 8 + (generic64_t) envp;
    *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc + 16) = var_21;
    var_20 = var_21 + 8;
    var_35 = 0;
    while (true) {
        var_25 = var_35;
        generic64_t var_123;
        var_123 = var_25 << 4;
        var_19 = var_20 + var_123;
        var_26 = *(generic64_t *) (var_21 + var_123);
        if (var_26 == 0) {
            break;
        }
        if (!(var_26 > 37)) {
            *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40 = *(generic64_t *) var_19;
        }
        var_35 = var_25 + 1;
        continue;
    }
    prefix_segment_0x406fd0_Generic64_2224.prefix___hwcap = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 168);
    prefix_segment_0x406fd0_Generic64_2224.prefix___sysinfo = stack.unnamed_field_at_offset_0.unnamed_field_at_offset_296;
    var_15 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 88);
    *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc + 32) = var_15;
    if (!((generic64_t) pn == 0)) {
        prefix_segment_0x406fd0_Generic64_2224.program_invocation_name = pn;
        var_37 = pn;
        var_36 = var_15;
        while (true) {
            var_18 = var_37;
            prefix_segment_0x406fd0_Generic64_2224.prefix___progname = var_18;
            var_4 = var_18 + 1;
            var_38 = 0;
            var_39 = var_36;
            while (true) {
                bool break_from_loop_124 = false;
                generic64_t var_125;
                var_125 = var_38;
                generic8_t var_126;
                var_126 = *(generic8_t *) (var_18 + var_125);
                generic64_t var_127;
                var_127 = var_39 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_126;
                var_37 = var_4 + var_125;
                var_36 = var_127;
                var_38 = var_125 + 1;
                var_39 = var_127;
                switch (var_126) {
                    case 0:
                    {
                        loop_state_var = 1;
                        break_from_loop_124 = true;
                        break;
                    } break;
                    case 47:
                    {
                        loop_state_var = 0;
                        break_from_loop_124 = true;
                        break;
                    } break;
                    default:
                    {
                        continue;
                    } break;
                }
                if (break_from_loop_124)
                    break;
            }
            bool break_from_loop_128 = false;
            switch (loop_state_var) {
                case 0:
                {
                    continue;
                } break;
                case 1:
                {
                    break_from_loop_128 = true;
                    break;
                } break;
            }
            if (break_from_loop_128)
                break;
        }
    }
    prefix___init_tls((size_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40);
    dummy1((void *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 240));
    if (((*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 128) == *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 136)) && (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 144) == *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 152))) && (*(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 224) == 0)) {
        return;
    }
    var_3 = (generic64_t) &stack.unnamed_field_at_offset_0 + 16;
    var_40 = 0;
    while (true) {
        var_11 = var_40;
        if (var_11 == 6) {
            break;
        }
        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = 0;
        var_40 = var_11 + 1;
        continue;
    }
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_22.unnamed_field_2.unnamed_field_at_offset_0[0] + 2) = 1;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_22.unnamed_field_2.unnamed_field_at_offset_0[1] + 2) = 2;
    helper_syscall_wrapper(NULL, 2, var_3, var_110, var_111, init_state_0x9080(), var_112, init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), var_113, init_state_0x9018(), init_state_0x9010(), var_114, var_115, 0, 0 /* undef */, var_3, init_state_0x8370(), var_116, 7, var_117, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 3092, 3, 0, 0, init_state_0x82d8(), init_state_0x8300(), var_118, var_119, var_120, var_121, &var_86, &var_87, &var_88, &var_89, &var_90, &var_91, &var_92, &var_93, &var_94, &var_95, &var_96, &var_97, &var_98, &var_99, &var_100, &var_101, &var_102, &var_103, &var_104, &var_105, &var_106, &var_107, &var_108, &var_109);
    var_41 = var_92;
    var_42 = var_91;
    var_43 = 0;
    var_44 = var_104;
    var_45 = var_90;
    var_46 = var_89;
    var_47 = var_88;
    var_48 = var_108;
    var_49 = var_109;
    var_50 = var_87;
    var_51 = var_86;
    while (true) {
        var_32 = var_41;
        var_31 = var_42;
        var_30 = var_43;
        var_9 = var_44;
        var_17 = var_45;
        var_7 = var_46;
        var_29 = var_47;
        var_24 = var_48;
        var_28 = var_49;
        var_2 = var_50;
        var_1 = var_51;
        var_52 = var_32;
        var_53 = var_31;
        var_54 = var_9;
        var_55 = var_17;
        var_56 = var_7;
        var_57 = var_29;
        var_58 = var_24;
        var_59 = var_28;
        var_60 = var_2;
        var_61 = var_1;
        if (!((*(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_22.unnamed_field_2.unnamed_field_at_offset_0[var_30] & 0x20) == '\000')) {
            helper_syscall_wrapper(NULL, 2, (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 4, var_110, var_111, var_1, var_112, var_2, var_29, var_7, var_17, var_113, var_31, var_32, var_114, var_115, var_30, 0 /* undef */, var_3, var_9, var_116, 2, var_117, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 3115, 2, 0, 0, var_24, var_28, var_118, var_119, var_120, var_121, &var_62, &var_63, &var_64, &var_65, &var_66, &var_67, &var_68, &var_69, &var_70, &var_71, &var_72, &var_73, &var_74, &var_75, &var_76, &var_77, &var_78, &var_79, &var_80, &var_81, &var_82, &var_83, &var_84, &var_85);
            var_52 = var_68;
            var_53 = var_67;
            var_54 = var_80;
            var_55 = var_66;
            var_56 = var_65;
            var_57 = var_64;
            var_58 = var_84;
            var_59 = var_85;
            var_60 = var_63;
            var_61 = var_62;
        }
        var_8 = var_52;
        var_10 = var_53;
        var_14 = var_54;
        var_16 = var_55;
        var_6 = var_56;
        var_0 = var_57;
        var_22 = var_58;
        var_5 = var_59;
        var_27 = var_60;
        var_23 = var_61;
        if (var_30 == 2) {
            break;
        }
        var_41 = var_8;
        var_42 = var_10;
        var_43 = var_30 + 1;
        var_44 = var_14;
        var_45 = var_16;
        var_46 = var_6;
        var_47 = var_0;
        var_48 = var_22;
        var_49 = var_5;
        var_50 = var_27;
        var_51 = var_23;
        continue;
    }
    *(generic32_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc + 8) = 1;
    return;
}

int32_t prefix___libc_start_main(function_type_cabifunction_14277401164906130151 *main, int32_t argc, int8_t **argv) {
    generic64_t var_0;
    var_0 = (generic64_t) argc;
    generic64_t var_1;
    var_1 = (var_0 << 32 >> 29) + (generic64_t) argv + 8;
    prefix___init_libc((int8_t **) var_1, *argv);
    generic64_t var_2;
    var_2 = prefix_function_0x401000_Code_x86_64();
    artificial_struct_returned_by_rawfunction_10449372223158023403 var_3 = ((function_type_rawfunction_10449372223158023403 *) main)(((pointer_or_number64_t) (init_rcx())), ((pointer_or_number64_t) var_1), ((pointer_or_number64_t) argv), ((pointer_or_number64_t) var_0), ((pointer_or_number64_t) (init_r8())), ((pointer_or_number64_t) (init_r9())));
    exit((int32_t) (generic32_t) (var_3.field_0));
    artificial_struct_returned_by_build_PlainMetaAddress var_4 = build_PlainMetaAddress(0, 0, 0, 0);
    artificial_struct_returned_by_build_PlainMetaAddress var_5 = build_PlainMetaAddress(0, 0, 4, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 3230);
    __builtin_unreachable();
}

void dummy_(void) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return;
}

void exit(int32_t code) {
    struct_12422630787798303972 stack;
    stack.unnamed_field_at_offset_0 = init_rax();
    dummy_();
    generic64_t var_0;
    var_0 = prefix_function_0x404091_Code_x86_64();
    prefix___stdio_exit();
    prefix__Exit(code);
    artificial_struct_returned_by_build_PlainMetaAddress var_1 = build_PlainMetaAddress(0, 0, 0, 0);
    artificial_struct_returned_by_build_PlainMetaAddress var_2 = build_PlainMetaAddress(0, 0, 4, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 3288);
    __builtin_unreachable();
}

int32_t printf(typedef_9096570610628524684 fmt) {
    struct_1125729123936020857 stack;
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 48) = init_rsi();
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = init_rdx();
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 64) = init_rcx();
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = init_r8();
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = init_r9();
    if (!(((init_rax()) & 0xFF) == 0)) {
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 88) = init_state_0x8558();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 96) = init_state_0x8560();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 104) = init_state_0x8598();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 112) = init_state_0x85a0();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 120) = init_state_0x85d8();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 128) = init_state_0x85e0();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 136) = init_state_0x8618();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 144) = init_state_0x8620();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 152) = init_state_0x8658();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 160) = init_state_0x8660();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 168) = init_state_0x8698();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 176) = init_state_0x86a0();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 184) = init_state_0x86d8();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 192) = init_state_0x86e0();
        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 200) = init_state_0x8718();
        stack.unnamed_field_at_offset_0.unnamed_field_at_offset_208 = init_state_0x8720();
    }
    generic64_t var_0;
    var_0 = prefix_segment_0x405000_Generic64_3292.stdout;
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_16.unnamed_field_3 + 8) = (generic64_t) &stack.unnamed_field_at_offset_0 + 232;
    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_16.unnamed_field_1.unnamed_field_at_offset_0.unnamed_field_1 = 8;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_16.unnamed_field_3 + 4) = 48;
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32) = (generic64_t) &stack.unnamed_field_at_offset_0 + 40;
    int32_t var_1;
    var_1 = vfprintf((typedef_13961186704558040277) var_0, (typedef_13260647459820579882) fmt, (prefix___va_list_tag *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16));
    return var_1;
}

int8_t *fmt_u(prefix_uintmax_t x, int8_t *s) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    var_4 = revng_init_local_sp();
    var_2 = 0;
    var_3 = x;
    while (true) {
        var_1 = var_2;
        var_0 = var_3;
        if (var_0 == 0) {
            break;
        }
        *(generic8_t *) (~var_1 + (generic64_t) s) = (generic8_t) (var_0 % 10) | 0x30;
        var_2 = var_1 + 1;
        var_3 = var_0 / 10;
        continue;
    }
    return (int8_t *) ((generic64_t) s - var_1);
}

void out(FILE *f, int8_t const *s, size_t l) {
    struct_2206131669387747366 stack;
    uint64_t loop_state_var;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    if ((*(generic8_t *) &f->flags & 0x20) == '\000') {
        stack.unnamed_field_at_offset_0 = &f->flags;
        int32_t var_7;
        var_7 = prefix___towrite(f);
        if (((generic64_t) f->wend == 0) && (!(((generic64_t) var_7 & 0xFFFFFFFF) == 0))) {
            return;
        }
        if (!((generic64_t) f->wend - (generic64_t) f->wpos < (generic64_t) l)) {
            var_5 = l;
            var_6 = s;
            if ((generic8_t) f->lbf > '\377') {
                var_3 = (generic64_t) l + (generic64_t) s;
                var_4 = 0;
                while (true) {
                    var_0 = var_4;
                    var_5 = l;
                    var_6 = s;
                    if (var_0 == (generic64_t) l) {
                        loop_state_var = 0;
                    } else {
                        var_2 = (generic64_t) l - var_0;
                        var_1 = var_3 - var_0;
                        if (!(*(generic8_t *) (var_3 + ~var_0) == '\n')) {
                            var_4 = var_0 + 1;
                            continue;
                        }
                        artificial_struct_returned_by_rawfunction_10449372223158023403 var_8 = ((function_type_rawfunction_10449372223158023403 *) f->write)(((pointer_or_number64_t) (init_rcx())), ((pointer_or_number64_t) var_2), ((pointer_or_number64_t) s), ((pointer_or_number64_t) &f->flags), ((pointer_or_number64_t) &f->flags), ((pointer_or_number64_t) (init_r9())));
                        if (var_2 > (generic64_t) (var_8.field_0)) {
                            loop_state_var = 1;
                            break;
                        }
                        var_5 = var_0;
                        var_6 = var_1;
                        loop_state_var = 0;
                    }
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        break;
                    } break;
                    case 1:
                    {
                        return;
                    } break;
                }
            }
            generic64_t var_9;
            var_9 = var_5;
            generic64_t var_10;
            var_10 = memcpy((struct_12231053618952106340 *) var_9, (struct_12231053618952106340 *) var_6, (generic64_t) f->wpos);
            f->wpos = (generic64_t) f->wpos + var_9;
        }
    }
    return;
}

void pop_arg(struct_6160509669349238517 *rdx, struct_12231053618952106340 *rsi, struct_12618651705284700279 *rdi) {
    generic64_t var_0;
    generic32_t var_1;
    generic32_t var_2;
    generic32_t var_3;
    generic32_t var_4;
    generic32_t var_5;
    generic64_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic8_t var_19;
    generic8_t var_20;
    generic8_t var_21;
    generic8_t var_22;
    generic8_t var_23;
    generic8_t var_24;
    generic8_t var_25;
    generic8_t var_26;
    generic32_t var_27;
    generic8_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic64_t var_36;
    generic16_t var_37;
    generic16_t var_38;
    generic16_t var_39;
    generic16_t var_40;
    generic16_t var_41;
    generic16_t var_42;
    generic16_t var_43;
    generic8_t var_44;
    generic8_t var_45;
    generic8_t var_46;
    generic8_t var_47;
    generic8_t var_48;
    generic8_t var_49;
    generic8_t var_50;
    generic8_t var_51;
    generic16_t var_52;
    generic32_t var_53;
    generic8_t var_54;
    generic8_t var_55;
    generic8_t var_56;
    generic8_t var_57;
    generic8_t var_58;
    generic8_t var_59;
    generic8_t var_60;
    generic8_t var_61;
    generic32_t var_62;
    generic64_t var_63;
    generic64_t var_64;
    generic64_t var_65;
    generic64_t var_66;
    generic64_t var_67;
    generic64_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic16_t var_73;
    generic16_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic16_t var_77;
    generic8_t var_78;
    generic8_t var_79;
    generic8_t var_80;
    generic8_t var_81;
    generic8_t var_82;
    generic8_t var_83;
    generic8_t var_84;
    generic8_t var_85;
    generic16_t var_86;
    generic32_t var_87;
    generic64_t var_88;
    var_88 = revng_init_local_sp();
    generic16_t var_89;
    var_89 = init_pc_address_space();
    generic16_t var_90;
    var_90 = init_pc_type();
    generic32_t var_91;
    var_91 = init_pc_epoch();
    generic32_t var_92;
    var_92 = init_state_0x8480();
    if (((generic64_t) &rsi->unnamed_field_at_offset_0.unnamed_field_19 & 0xFFFFFFFF) > 22) {
        return;
    }
    var_0 = (generic64_t) &rsi->unnamed_field_at_offset_140 + 4294967287 & 0xFFFFFFFF;
    if (!(var_0 > 11)) {
        var_6 = *(generic64_t *) ((var_0 << 3) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 32));
        if (var_91 == 0 & var_89 == 0 & var_90 == 4) {
            switch (var_6) {
                case 4202215:
                {
                    var_4 = rdx->unnamed_field_at_offset_4;
                    if (var_4 > 175) {
                        generic32_t *var_93;
                        var_93 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                        rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_93 + 8;
                        var_17 = var_93;
                    } else {
                        generic64_t var_94;
                        var_94 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_4;
                        rdx->unnamed_field_at_offset_4 = var_4 + 16;
                        var_17 = var_94;
                    }
                    helper_fldl_ST0_wrapper(NULL, *(generic64_t *) var_17, init_state_0x852a(), init_state_0x852e(), init_state_0x852d(), var_92, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47, &var_48, &var_49, &var_50, &var_51, &var_52, &var_53);
                    generic32_t var_95;
                    var_95 = var_53;
                    helper_fstt_ST0_wrapper(NULL, rdi, var_29, var_30, var_31, var_32, var_33, var_34, var_35, var_36, var_37, var_38, var_39, var_40, var_41, var_42, var_43, var_52, var_95);
                    helper_fpop_wrapper(NULL, var_95, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25, &var_26, &var_27);
                } break;
                case 4202257:
                {
                    generic64_t var_96;
                    var_96 = (generic64_t) rdx->unnamed_field_at_offset_8.unnamed_field_7 + 15 & 0xFFFFFFFFFFFFFFF0;
                    rdx->unnamed_field_at_offset_8.unnamed_field_7 = var_96 + 16;
                    helper_fldt_ST0_wrapper(NULL, var_96, var_92, &var_63, &var_64, &var_65, &var_66, &var_67, &var_68, &var_69, &var_70, &var_71, &var_72, &var_73, &var_74, &var_75, &var_76, &var_77, &var_78, &var_79, &var_80, &var_81, &var_82, &var_83, &var_84, &var_85, &var_86, &var_87);
                    generic32_t var_97;
                    var_97 = var_87;
                    helper_fstt_ST0_wrapper(NULL, rdi, var_63, var_64, var_65, var_66, var_67, var_68, var_69, var_70, var_71, var_72, var_73, var_74, var_75, var_76, var_77, var_86, var_97);
                    helper_fpop_wrapper(NULL, var_97, &var_54, &var_55, &var_56, &var_57, &var_58, &var_59, &var_60, &var_61, &var_62);
                } break;
                case 4201944:
                case 4201983:
                case 4202019:
                case 4202056:
                case 4202094:
                case 4202134:
                case 4202175:
                {
                    switch (var_6) {
                        case 4202134:
                        {
                            var_9 = rdx->unnamed_field_at_offset_0;
                            if (var_9 > 47) {
                                generic32_t *var_98;
                                var_98 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_98 + 8;
                                var_15 = var_98;
                            } else {
                                generic64_t var_99;
                                var_99 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_9;
                                rdx->unnamed_field_at_offset_0 = var_9 + 8;
                                var_15 = var_99;
                            }
                            var_18 = (generic64_t) *(generic8_t *) var_15;
                        } break;
                        case 4201944:
                        {
                            var_2 = rdx->unnamed_field_at_offset_0;
                            if (var_2 > 47) {
                                generic32_t *var_100;
                                var_100 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_100 + 8;
                                var_10 = var_100;
                            } else {
                                generic64_t var_101;
                                var_101 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_2;
                                rdx->unnamed_field_at_offset_0 = var_2 + 8;
                                var_10 = var_101;
                            }
                            var_18 = (generic64_t) *(generic32_t *) var_10;
                        } break;
                        case 4202094:
                        {
                            var_7 = rdx->unnamed_field_at_offset_0;
                            if (var_7 > 47) {
                                generic32_t *var_102;
                                var_102 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_102 + 8;
                                var_14 = var_102;
                            } else {
                                generic64_t var_103;
                                var_103 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_7;
                                rdx->unnamed_field_at_offset_0 = var_7 + 8;
                                var_14 = var_103;
                            }
                            var_18 = (generic64_t) *(generic16_t *) var_14;
                        } break;
                        case 4202019:
                        {
                            var_8 = rdx->unnamed_field_at_offset_0;
                            if (var_8 > 47) {
                                generic32_t *var_104;
                                var_104 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_104 + 8;
                                var_12 = var_104;
                            } else {
                                generic64_t var_105;
                                var_105 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_8;
                                rdx->unnamed_field_at_offset_0 = var_8 + 8;
                                var_12 = var_105;
                            }
                            var_18 = *(generic64_t *) var_12;
                        } break;
                        case 4202056:
                        {
                            var_3 = rdx->unnamed_field_at_offset_0;
                            if (var_3 > 47) {
                                generic32_t *var_106;
                                var_106 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_106 + 8;
                                var_13 = var_106;
                            } else {
                                generic64_t var_107;
                                var_107 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_3;
                                rdx->unnamed_field_at_offset_0 = var_3 + 8;
                                var_13 = var_107;
                            }
                            var_18 = (generic64_t) *(generic16_t *) var_13;
                        } break;
                        case 4201983:
                        {
                            var_1 = rdx->unnamed_field_at_offset_0;
                            if (var_1 > 47) {
                                generic32_t *var_108;
                                var_108 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_108 + 8;
                                var_11 = var_108;
                            } else {
                                generic64_t var_109;
                                var_109 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_1;
                                rdx->unnamed_field_at_offset_0 = var_1 + 8;
                                var_11 = var_109;
                            }
                            var_18 = (generic64_t) *(generic32_t *) var_11;
                        } break;
                        case 4202175:
                        {
                            var_5 = rdx->unnamed_field_at_offset_0;
                            if (var_5 > 47) {
                                generic32_t *var_110;
                                var_110 = rdx->unnamed_field_at_offset_8.unnamed_field_7;
                                rdx->unnamed_field_at_offset_8.unnamed_field_7 = (generic64_t) var_110 + 8;
                                var_16 = var_110;
                            } else {
                                generic64_t var_111;
                                var_111 = rdx->unnamed_field_at_offset_16 + (generic64_t) var_5;
                                rdx->unnamed_field_at_offset_0 = var_5 + 8;
                                var_16 = var_111;
                            }
                            var_18 = (generic64_t) *(generic8_t *) var_16;
                        } break;
                    }
                    rdi->unnamed_field_at_offset_0.unnamed_field_3 = var_18;
                } break;
                default:
                {
                    artificial_struct_returned_by_build_PlainMetaAddress var_112 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_113 = build_PlainMetaAddress(var_91, var_89, var_90, var_6);
                    __builtin_unreachable();
                } break;
            }
        } else {
            artificial_struct_returned_by_build_PlainMetaAddress var_114 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_115 = build_PlainMetaAddress(var_91, var_89, var_90, var_6);
            __builtin_unreachable();
        }
    }
}

void pad(struct_12231053618952106340 *rcx, generic64_t rdx, generic64_t rsi, struct_12231053618952106340 *rdi, struct_12231053618952106340 *r8) {
    struct_1296497317872341191 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    struct_1296497317872341191 *var_3;
    generic64_t var_4;
    if (((generic64_t) &r8->unnamed_field_at_offset_0.unnamed_field_19 & 0x12000) == 0) {
        var_3 = &stack;
        if ((generic64_t) &rcx->unnamed_field_at_offset_0.unnamed_field_19 << 32 < rdx << 32) {
            var_2 = rdx - (generic64_t) &rcx->unnamed_field_at_offset_0.unnamed_field_19;
            struct_12231053618952106340 *var_5;
            var_5 = memset((struct_12231053618952106340 *) ((generic32_t) var_2 > 256 ? 256 : var_2 << 32 >> 32), (generic64_t) (generic32_t) rsi << 24 >> 24, (struct_12231053618952106340 *) var_3);
            var_1 = var_2 & 0xFFFFFFFF;
            var_4 = var_1;
            while (true) {
                var_0 = var_4;
                if (!((generic32_t) var_0 > 255)) {
                    break;
                }
                out((FILE *) rdi, (int8_t const *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_18, (size_t) 256);
                var_4 = var_0 + 4294967040 & 0xFFFFFFFF;
                continue;
            }
            out((FILE *) rdi, (int8_t const *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_18, (size_t) ((var_1 >> 8) * -256 + var_2 << 32 >> 32));
        }
    }
    return;
}

int32_t fmt_fp(FILE *f, float128_t y, int32_t w, int32_t p, int32_t fl, int32_t t) {
    struct_1567735375540337900 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic8_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic32_t var_7;
    generic16_t var_8;
    generic16_t var_9;
    generic16_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic8_t var_14;
    generic16_t var_15;
    generic16_t var_16;
    generic16_t var_17;
    generic16_t var_18;
    generic16_t var_19;
    generic16_t var_20;
    generic16_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic8_t var_28;
    generic16_t var_29;
    generic32_t var_30;
    generic8_t var_31;
    generic16_t var_32;
    generic16_t var_33;
    generic16_t var_34;
    generic16_t var_35;
    generic16_t var_36;
    generic16_t var_37;
    generic16_t var_38;
    generic16_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic16_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic8_t var_52;
    generic32_t var_53;
    generic16_t var_54;
    generic16_t var_55;
    generic16_t var_56;
    generic64_t var_57;
    generic64_t var_58;
    generic64_t var_59;
    generic64_t var_60;
    generic32_t var_61;
    generic64_t var_62;
    generic16_t var_63;
    generic16_t var_64;
    generic64_t var_65;
    generic64_t var_66;
    generic64_t var_67;
    generic8_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic64_t var_71;
    generic64_t var_72;
    generic16_t var_73;
    generic16_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic16_t var_77;
    generic16_t var_78;
    generic16_t var_79;
    generic16_t var_80;
    generic64_t var_81;
    generic64_t var_82;
    generic64_t var_83;
    generic32_t var_84;
    generic16_t var_85;
    generic16_t var_86;
    generic32_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic16_t var_92;
    generic16_t var_93;
    generic8_t var_94;
    generic8_t var_95;
    generic8_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    generic64_t var_99;
    generic64_t var_100;
    generic16_t var_101;
    generic16_t var_102;
    generic64_t var_103;
    generic16_t var_104;
    generic16_t var_105;
    generic64_t var_106;
    generic64_t var_107;
    generic64_t var_108;
    generic8_t var_109;
    generic64_t var_110;
    generic64_t var_111;
    generic64_t var_112;
    generic64_t var_113;
    int8_t *var_114;
    generic64_t var_115;
    generic64_t var_116;
    generic64_t var_117;
    generic32_t var_118;
    generic32_t var_119;
    generic8_t var_120;
    generic64_t var_121;
    generic64_t var_122;
    generic64_t var_123;
    int32_t var_124;
    generic32_t var_125;
    generic64_t var_126;
    generic64_t var_127;
    generic64_t var_128;
    generic64_t var_129;
    generic16_t var_130;
    generic16_t var_131;
    generic16_t var_132;
    generic16_t var_133;
    generic16_t var_134;
    generic64_t var_135;
    generic64_t var_136;
    generic64_t var_137;
    generic64_t var_138;
    generic64_t var_139;
    generic64_t var_140;
    generic64_t var_141;
    generic64_t var_142;
    generic32_t var_143;
    generic16_t var_144;
    generic16_t var_145;
    generic16_t var_146;
    generic64_t var_147;
    generic64_t var_148;
    generic16_t var_149;
    generic16_t var_150;
    generic16_t var_151;
    generic16_t var_152;
    generic16_t var_153;
    generic16_t var_154;
    generic16_t var_155;
    generic16_t var_156;
    generic64_t var_157;
    generic64_t var_158;
    generic64_t var_159;
    generic64_t var_160;
    generic64_t var_161;
    generic64_t var_162;
    generic64_t var_163;
    generic64_t var_164;
    generic32_t var_165;
    generic32_t var_166;
    generic16_t var_167;
    generic16_t var_168;
    generic16_t var_169;
    generic16_t var_170;
    generic16_t var_171;
    generic16_t var_172;
    generic16_t var_173;
    generic16_t var_174;
    generic64_t var_175;
    generic64_t var_176;
    generic64_t var_177;
    generic64_t var_178;
    generic64_t var_179;
    generic64_t var_180;
    generic64_t var_181;
    generic64_t var_182;
    generic32_t var_183;
    generic64_t var_184;
    generic64_t var_185;
    generic8_t var_186;
    generic64_t var_187;
    generic32_t var_188;
    generic64_t var_189;
    generic64_t var_190;
    generic8_t var_191;
    generic64_t var_192;
    generic8_t var_193;
    generic16_t var_194;
    generic16_t var_195;
    generic16_t var_196;
    generic16_t var_197;
    generic16_t var_198;
    generic16_t var_199;
    generic16_t var_200;
    generic16_t var_201;
    generic64_t var_202;
    generic64_t var_203;
    generic64_t var_204;
    generic64_t var_205;
    generic64_t var_206;
    generic64_t var_207;
    generic64_t var_208;
    generic32_t var_209;
    generic64_t var_210;
    generic64_t var_211;
    generic64_t var_212;
    generic64_t var_213;
    generic64_t var_214;
    generic64_t var_215;
    generic64_t var_216;
    generic32_t var_217;
    generic64_t var_218;
    generic64_t var_219;
    generic64_t var_220;
    generic64_t var_221;
    generic32_t var_222;
    generic64_t var_223;
    generic32_t var_224;
    generic32_t var_225;
    generic8_t var_226;
    generic64_t var_227;
    generic64_t var_228;
    generic64_t var_229;
    generic64_t var_230;
    generic64_t var_231;
    generic64_t var_232;
    generic64_t var_233;
    generic64_t var_234;
    generic64_t var_235;
    generic64_t var_236;
    generic32_t var_237;
    generic64_t var_238;
    generic64_t var_239;
    generic16_t var_240;
    generic16_t var_241;
    generic16_t var_242;
    generic16_t var_243;
    generic16_t var_244;
    generic16_t var_245;
    generic16_t var_246;
    generic16_t var_247;
    generic32_t var_248;
    generic64_t var_249;
    generic64_t var_250;
    generic64_t var_251;
    generic64_t var_252;
    generic64_t var_253;
    generic64_t var_254;
    generic64_t var_255;
    generic64_t var_256;
    generic64_t var_257;
    generic64_t var_258;
    generic64_t var_259;
    generic64_t var_260;
    generic64_t var_261;
    generic64_t var_262;
    generic64_t var_263;
    generic64_t var_264;
    int8_t *var_265;
    generic64_t var_266;
    generic64_t var_267;
    generic64_t var_268;
    generic64_t var_269;
    generic64_t var_270;
    generic8_t var_271;
    generic32_t var_272;
    generic64_t var_273;
    generic64_t var_274;
    generic64_t var_275;
    int8_t *var_276;
    generic32_t var_277;
    generic8_t var_278;
    generic64_t var_279;
    generic64_t var_280;
    generic64_t var_281;
    generic64_t var_282;
    generic64_t var_283;
    generic64_t var_284;
    generic64_t var_285;
    generic64_t var_286;
    generic64_t var_287;
    generic64_t var_288;
    generic64_t var_289;
    generic64_t var_290;
    generic64_t var_291;
    generic32_t var_292;
    generic32_t var_293;
    generic32_t var_294;
    generic64_t var_295;
    generic64_t var_296;
    generic64_t var_297;
    generic64_t var_298;
    generic8_t var_299;
    generic64_t var_300;
    generic64_t var_301;
    generic64_t var_302;
    generic64_t var_303;
    generic64_t var_304;
    generic64_t var_305;
    generic64_t var_306;
    generic64_t var_307;
    generic64_t var_308;
    generic64_t var_309;
    generic16_t var_310;
    generic16_t var_311;
    generic16_t var_312;
    generic16_t var_313;
    generic16_t var_314;
    generic16_t var_315;
    generic16_t var_316;
    generic64_t var_317;
    generic32_t var_318;
    generic64_t var_319;
    generic64_t var_320;
    generic16_t var_321;
    generic64_t var_322;
    generic64_t var_323;
    generic64_t var_324;
    generic64_t var_325;
    generic64_t var_326;
    generic64_t var_327;
    generic64_t var_328;
    generic64_t var_329;
    generic64_t var_330;
    generic8_t var_331;
    generic64_t var_332;
    generic64_t var_333;
    generic64_t var_334;
    generic64_t var_335;
    generic64_t var_336;
    generic16_t var_337;
    generic16_t var_338;
    generic16_t var_339;
    generic16_t var_340;
    generic16_t var_341;
    generic16_t var_342;
    generic16_t var_343;
    generic16_t var_344;
    generic32_t var_345;
    generic64_t *var_346;
    generic64_t *var_347;
    generic64_t *var_348;
    generic8_t *var_349;
    generic64_t *var_350;
    generic64_t *var_351;
    generic64_t *var_352;
    generic64_t *var_353;
    generic64_t *var_354;
    generic16_t *var_355;
    generic16_t *var_356;
    generic16_t *var_357;
    generic16_t *var_358;
    generic16_t *var_359;
    generic16_t *var_360;
    generic16_t *var_361;
    generic64_t var_362;
    generic16_t *var_363;
    generic64_t var_364;
    generic64_t var_365;
    generic64_t var_366;
    generic8_t var_367;
    generic64_t var_368;
    generic64_t var_369;
    generic64_t var_370;
    generic64_t var_371;
    generic64_t var_372;
    generic16_t var_373;
    generic16_t var_374;
    generic16_t var_375;
    generic16_t var_376;
    generic16_t var_377;
    generic16_t var_378;
    generic16_t var_379;
    generic16_t var_380;
    generic64_t var_381;
    generic64_t var_382;
    generic64_t var_383;
    generic64_t var_384;
    generic64_t var_385;
    generic8_t var_386;
    generic64_t var_387;
    generic64_t var_388;
    generic64_t var_389;
    generic64_t var_390;
    generic64_t var_391;
    generic16_t var_392;
    generic16_t var_393;
    generic16_t var_394;
    generic16_t var_395;
    generic16_t var_396;
    generic16_t var_397;
    generic16_t var_398;
    generic16_t var_399;
    generic32_t var_400;
    generic16_t var_401;
    generic64_t var_402;
    generic64_t var_403;
    generic64_t var_404;
    generic8_t var_405;
    generic64_t var_406;
    generic64_t var_407;
    generic64_t var_408;
    generic64_t var_409;
    generic64_t var_410;
    generic16_t var_411;
    generic16_t var_412;
    generic16_t var_413;
    generic16_t var_414;
    generic16_t var_415;
    generic16_t var_416;
    generic16_t var_417;
    generic64_t var_418;
    generic64_t var_419;
    generic16_t var_420;
    generic32_t var_421;
    generic16_t var_422;
    generic8_t var_423;
    generic64_t var_424;
    generic32_t var_425;
    generic64_t var_426;
    generic64_t var_427;
    generic64_t var_428;
    generic64_t var_429;
    generic32_t var_430;
    generic64_t var_431;
    generic64_t var_432;
    generic64_t var_433;
    generic32_t var_434;
    generic64_t var_435;
    generic64_t var_436;
    generic64_t var_437;
    generic64_t var_438;
    generic64_t var_439;
    generic32_t var_440;
    generic64_t var_441;
    generic8_t var_442;
    generic64_t var_443;
    generic64_t var_444;
    generic64_t var_445;
    generic64_t var_446;
    generic64_t var_447;
    generic64_t var_448;
    generic64_t var_449;
    generic64_t var_450;
    generic64_t var_451;
    generic64_t var_452;
    generic64_t var_453;
    generic64_t var_454;
    generic64_t var_455;
    generic64_t var_456;
    generic64_t var_457;
    generic64_t var_458;
    generic64_t var_459;
    generic64_t var_460;
    generic64_t var_461;
    generic64_t var_462;
    generic64_t var_463;
    generic8_t var_464;
    generic32_t *var_465;
    generic64_t var_466;
    generic32_t var_467;
    generic64_t var_468;
    generic64_t var_469;
    generic64_t var_470;
    generic64_t var_471;
    generic8_t var_472;
    generic64_t var_473;
    generic64_t var_474;
    generic64_t var_475;
    generic64_t var_476;
    generic64_t var_477;
    generic16_t var_478;
    generic16_t var_479;
    generic16_t var_480;
    generic16_t var_481;
    generic16_t var_482;
    generic16_t var_483;
    generic16_t var_484;
    generic16_t var_485;
    generic32_t var_486;
    generic32_t var_487;
    generic64_t var_488;
    generic64_t var_489;
    generic64_t var_490;
    generic64_t var_491;
    generic64_t var_492;
    generic64_t var_493;
    generic64_t var_494;
    generic64_t var_495;
    generic16_t var_496;
    generic16_t var_497;
    generic16_t var_498;
    generic16_t var_499;
    generic16_t var_500;
    generic16_t var_501;
    generic16_t var_502;
    generic16_t var_503;
    generic64_t var_504;
    generic64_t var_505;
    generic64_t var_506;
    generic32_t var_507;
    generic64_t var_508;
    generic64_t var_509;
    generic64_t var_510;
    generic64_t var_511;
    generic64_t var_512;
    generic64_t var_513;
    generic64_t var_514;
    generic64_t var_515;
    generic64_t var_516;
    generic64_t var_517;
    generic64_t var_518;
    generic64_t var_519;
    generic64_t var_520;
    generic64_t var_521;
    generic64_t var_522;
    generic64_t var_523;
    generic64_t var_524;
    generic64_t var_525;
    generic64_t var_526;
    generic64_t var_527;
    generic64_t var_528;
    generic64_t var_529;
    generic64_t var_530;
    generic64_t var_531;
    generic16_t var_532;
    generic16_t var_533;
    generic16_t var_534;
    generic16_t var_535;
    generic16_t var_536;
    generic16_t var_537;
    generic16_t var_538;
    generic16_t var_539;
    generic64_t var_540;
    generic64_t var_541;
    generic64_t var_542;
    generic64_t var_543;
    generic64_t var_544;
    generic64_t var_545;
    generic64_t var_546;
    generic64_t var_547;
    generic16_t var_548;
    generic16_t var_549;
    generic16_t var_550;
    generic16_t var_551;
    generic16_t var_552;
    generic16_t var_553;
    generic16_t var_554;
    generic16_t var_555;
    generic64_t var_556;
    generic64_t var_557;
    generic64_t var_558;
    generic64_t var_559;
    generic64_t var_560;
    generic64_t var_561;
    generic64_t var_562;
    generic64_t var_563;
    generic16_t var_564;
    generic16_t var_565;
    generic16_t var_566;
    generic16_t var_567;
    generic16_t var_568;
    generic16_t var_569;
    generic16_t var_570;
    generic16_t var_571;
    generic64_t var_572;
    generic64_t var_573;
    generic64_t var_574;
    generic64_t var_575;
    generic64_t var_576;
    generic64_t var_577;
    generic64_t var_578;
    generic64_t var_579;
    generic16_t var_580;
    generic16_t var_581;
    generic16_t var_582;
    generic16_t var_583;
    generic16_t var_584;
    generic16_t var_585;
    generic16_t var_586;
    generic16_t var_587;
    generic8_t var_588;
    generic8_t var_589;
    generic8_t var_590;
    generic8_t var_591;
    generic8_t var_592;
    generic8_t var_593;
    generic8_t var_594;
    generic8_t var_595;
    generic32_t var_596;
    generic64_t var_597;
    generic64_t var_598;
    generic64_t var_599;
    generic64_t var_600;
    generic64_t var_601;
    generic64_t var_602;
    generic64_t var_603;
    generic64_t var_604;
    generic16_t var_605;
    generic16_t var_606;
    generic16_t var_607;
    generic16_t var_608;
    generic16_t var_609;
    generic16_t var_610;
    generic16_t var_611;
    generic16_t var_612;
    generic8_t var_613;
    generic8_t var_614;
    generic8_t var_615;
    generic8_t var_616;
    generic8_t var_617;
    generic8_t var_618;
    generic8_t var_619;
    generic8_t var_620;
    generic32_t var_621;
    generic64_t var_622;
    generic64_t var_623;
    generic64_t var_624;
    generic64_t var_625;
    generic64_t var_626;
    generic64_t var_627;
    generic64_t var_628;
    generic64_t var_629;
    generic16_t var_630;
    generic16_t var_631;
    generic16_t var_632;
    generic16_t var_633;
    generic16_t var_634;
    generic16_t var_635;
    generic16_t var_636;
    generic16_t var_637;
    generic8_t var_638;
    generic8_t var_639;
    generic8_t var_640;
    generic8_t var_641;
    generic8_t var_642;
    generic8_t var_643;
    generic8_t var_644;
    generic8_t var_645;
    generic32_t var_646;
    generic8_t var_647;
    generic64_t var_648;
    generic64_t var_649;
    generic16_t var_650;
    generic8_t var_651;
    generic64_t var_652;
    generic64_t var_653;
    generic64_t var_654;
    generic64_t var_655;
    generic64_t var_656;
    generic64_t var_657;
    generic64_t var_658;
    generic64_t var_659;
    generic16_t var_660;
    generic16_t var_661;
    generic16_t var_662;
    generic16_t var_663;
    generic16_t var_664;
    generic16_t var_665;
    generic16_t var_666;
    generic16_t var_667;
    generic64_t var_668;
    generic16_t var_669;
    generic64_t var_670;
    generic64_t var_671;
    generic64_t var_672;
    generic64_t var_673;
    generic64_t var_674;
    generic64_t var_675;
    generic64_t var_676;
    generic64_t var_677;
    generic16_t var_678;
    generic16_t var_679;
    generic16_t var_680;
    generic16_t var_681;
    generic16_t var_682;
    generic16_t var_683;
    generic16_t var_684;
    generic16_t var_685;
    generic8_t var_686;
    generic8_t var_687;
    generic8_t var_688;
    generic8_t var_689;
    generic8_t var_690;
    generic8_t var_691;
    generic8_t var_692;
    generic8_t var_693;
    generic32_t var_694;
    generic8_t var_695;
    generic64_t var_696;
    generic64_t var_697;
    generic64_t var_698;
    generic64_t var_699;
    generic64_t var_700;
    generic64_t var_701;
    generic64_t var_702;
    generic64_t var_703;
    generic16_t var_704;
    generic16_t var_705;
    generic16_t var_706;
    generic16_t var_707;
    generic16_t var_708;
    generic16_t var_709;
    generic16_t var_710;
    generic8_t var_711;
    generic8_t var_712;
    generic8_t var_713;
    generic8_t var_714;
    generic8_t var_715;
    generic8_t var_716;
    generic8_t var_717;
    generic8_t var_718;
    generic16_t var_719;
    generic32_t var_720;
    generic8_t var_721;
    generic64_t var_722;
    generic64_t var_723;
    generic64_t var_724;
    generic64_t var_725;
    generic64_t var_726;
    generic64_t var_727;
    generic64_t var_728;
    generic64_t var_729;
    generic16_t var_730;
    generic16_t var_731;
    generic16_t var_732;
    generic16_t var_733;
    generic16_t var_734;
    generic16_t var_735;
    generic16_t var_736;
    generic8_t var_737;
    generic8_t var_738;
    generic8_t var_739;
    generic8_t var_740;
    generic8_t var_741;
    generic8_t var_742;
    generic8_t var_743;
    generic8_t var_744;
    generic16_t var_745;
    generic32_t var_746;
    generic8_t var_747;
    generic64_t var_748;
    generic64_t var_749;
    generic64_t var_750;
    generic64_t var_751;
    generic64_t var_752;
    generic64_t var_753;
    generic64_t var_754;
    generic64_t var_755;
    generic16_t var_756;
    generic16_t var_757;
    generic16_t var_758;
    generic16_t var_759;
    generic16_t var_760;
    generic16_t var_761;
    generic16_t var_762;
    generic8_t var_763;
    generic8_t var_764;
    generic8_t var_765;
    generic8_t var_766;
    generic8_t var_767;
    generic8_t var_768;
    generic8_t var_769;
    generic8_t var_770;
    generic16_t var_771;
    generic32_t var_772;
    generic32_t *var_773;
    var_773 = &var_772;
    generic64_t var_774;
    generic64_t var_775;
    generic64_t var_776;
    generic64_t var_777;
    generic64_t var_778;
    generic64_t var_779;
    generic64_t var_780;
    generic64_t var_781;
    generic16_t var_782;
    generic16_t var_783;
    generic16_t var_784;
    generic16_t var_785;
    generic16_t var_786;
    generic16_t var_787;
    generic16_t var_788;
    generic8_t var_789;
    generic8_t var_790;
    generic8_t var_791;
    generic8_t var_792;
    generic8_t var_793;
    generic8_t var_794;
    generic8_t var_795;
    generic8_t var_796;
    generic16_t var_797;
    generic32_t var_798;
    generic32_t *var_799;
    var_799 = &var_798;
    generic8_t var_800;
    generic8_t var_801;
    generic8_t var_802;
    generic8_t var_803;
    generic8_t var_804;
    generic8_t var_805;
    generic8_t var_806;
    generic8_t var_807;
    generic32_t var_808;
    generic64_t var_809;
    generic64_t var_810;
    generic64_t var_811;
    generic64_t var_812;
    generic64_t var_813;
    generic64_t var_814;
    generic64_t var_815;
    generic64_t var_816;
    generic16_t var_817;
    generic16_t var_818;
    generic16_t var_819;
    generic16_t var_820;
    generic16_t var_821;
    generic16_t var_822;
    generic16_t var_823;
    generic16_t var_824;
    generic8_t var_825;
    generic8_t var_826;
    generic8_t var_827;
    generic8_t var_828;
    generic8_t var_829;
    generic8_t var_830;
    generic8_t var_831;
    generic8_t var_832;
    generic32_t var_833;
    generic64_t var_834;
    generic64_t var_835;
    generic64_t var_836;
    generic64_t var_837;
    generic64_t var_838;
    generic64_t var_839;
    generic64_t var_840;
    generic64_t var_841;
    generic16_t var_842;
    generic16_t var_843;
    generic16_t var_844;
    generic16_t var_845;
    generic16_t var_846;
    generic16_t var_847;
    generic16_t var_848;
    generic16_t var_849;
    generic8_t var_850;
    generic8_t var_851;
    generic8_t var_852;
    generic8_t var_853;
    generic8_t var_854;
    generic8_t var_855;
    generic8_t var_856;
    generic8_t var_857;
    generic32_t var_858;
    generic64_t var_859;
    generic64_t var_860;
    generic64_t var_861;
    generic64_t var_862;
    generic64_t var_863;
    generic64_t var_864;
    generic64_t var_865;
    generic64_t var_866;
    generic16_t var_867;
    generic16_t var_868;
    generic16_t var_869;
    generic16_t var_870;
    generic16_t var_871;
    generic16_t var_872;
    generic16_t var_873;
    generic16_t var_874;
    generic8_t var_875;
    generic8_t var_876;
    generic8_t var_877;
    generic8_t var_878;
    generic8_t var_879;
    generic8_t var_880;
    generic8_t var_881;
    generic8_t var_882;
    generic32_t var_883;
    generic64_t var_884;
    generic64_t var_885;
    generic64_t var_886;
    generic64_t var_887;
    generic64_t var_888;
    generic64_t var_889;
    generic64_t var_890;
    generic64_t var_891;
    generic16_t var_892;
    generic16_t var_893;
    generic16_t var_894;
    generic16_t var_895;
    generic16_t var_896;
    generic16_t var_897;
    generic16_t var_898;
    generic16_t var_899;
    generic8_t var_900;
    generic8_t var_901;
    generic8_t var_902;
    generic8_t var_903;
    generic8_t var_904;
    generic8_t var_905;
    generic8_t var_906;
    generic8_t var_907;
    generic32_t var_908;
    generic64_t var_909;
    generic64_t var_910;
    generic64_t var_911;
    generic64_t var_912;
    generic64_t var_913;
    generic64_t var_914;
    generic64_t var_915;
    generic64_t var_916;
    generic16_t var_917;
    generic16_t var_918;
    generic16_t var_919;
    generic16_t var_920;
    generic16_t var_921;
    generic16_t var_922;
    generic16_t var_923;
    generic16_t var_924;
    generic8_t var_925;
    generic8_t var_926;
    generic8_t var_927;
    generic8_t var_928;
    generic8_t var_929;
    generic8_t var_930;
    generic8_t var_931;
    generic8_t var_932;
    generic32_t var_933;
    generic64_t var_934;
    generic64_t var_935;
    generic64_t var_936;
    generic64_t var_937;
    generic64_t var_938;
    generic64_t var_939;
    generic64_t var_940;
    generic64_t var_941;
    generic16_t var_942;
    generic16_t var_943;
    generic16_t var_944;
    generic16_t var_945;
    generic16_t var_946;
    generic16_t var_947;
    generic16_t var_948;
    generic16_t var_949;
    generic8_t var_950;
    generic8_t var_951;
    generic8_t var_952;
    generic8_t var_953;
    generic8_t var_954;
    generic8_t var_955;
    generic8_t var_956;
    generic8_t var_957;
    generic32_t var_958;
    generic64_t var_959;
    generic64_t var_960;
    generic64_t var_961;
    generic64_t var_962;
    generic64_t var_963;
    generic64_t var_964;
    generic64_t var_965;
    generic64_t var_966;
    generic16_t var_967;
    generic16_t var_968;
    generic16_t var_969;
    generic16_t var_970;
    generic16_t var_971;
    generic16_t var_972;
    generic16_t var_973;
    generic16_t var_974;
    generic8_t var_975;
    generic8_t var_976;
    generic8_t var_977;
    generic8_t var_978;
    generic8_t var_979;
    generic8_t var_980;
    generic8_t var_981;
    generic8_t var_982;
    generic32_t var_983;
    generic64_t var_984;
    generic64_t var_985;
    generic64_t var_986;
    generic64_t var_987;
    generic64_t var_988;
    generic64_t var_989;
    generic64_t var_990;
    generic64_t var_991;
    generic16_t var_992;
    generic16_t var_993;
    generic16_t var_994;
    generic16_t var_995;
    generic16_t var_996;
    generic16_t var_997;
    generic16_t var_998;
    generic16_t var_999;
    generic8_t var_1000;
    generic64_t var_1001;
    generic64_t var_1002;
    generic16_t var_1003;
    generic8_t var_1004;
    generic64_t var_1005;
    generic64_t var_1006;
    generic16_t var_1007;
    generic8_t var_1008;
    generic8_t var_1009;
    generic8_t var_1010;
    generic8_t var_1011;
    generic8_t var_1012;
    generic8_t var_1013;
    generic8_t var_1014;
    generic8_t var_1015;
    generic32_t var_1016;
    generic8_t var_1017;
    generic64_t var_1018;
    generic64_t var_1019;
    generic64_t var_1020;
    generic64_t var_1021;
    generic64_t var_1022;
    generic64_t var_1023;
    generic64_t var_1024;
    generic64_t var_1025;
    generic16_t var_1026;
    generic16_t var_1027;
    generic16_t var_1028;
    generic16_t var_1029;
    generic16_t var_1030;
    generic16_t var_1031;
    generic16_t var_1032;
    generic16_t var_1033;
    generic8_t var_1034;
    generic64_t var_1035;
    generic64_t var_1036;
    generic64_t var_1037;
    generic64_t var_1038;
    generic64_t var_1039;
    generic64_t var_1040;
    generic64_t var_1041;
    generic64_t var_1042;
    generic16_t var_1043;
    generic16_t var_1044;
    generic16_t var_1045;
    generic16_t var_1046;
    generic16_t var_1047;
    generic16_t var_1048;
    generic16_t var_1049;
    generic16_t var_1050;
    generic64_t var_1051;
    generic64_t var_1052;
    generic64_t var_1053;
    generic64_t var_1054;
    generic64_t var_1055;
    generic64_t var_1056;
    generic64_t var_1057;
    generic64_t var_1058;
    generic16_t var_1059;
    generic16_t var_1060;
    generic16_t var_1061;
    generic16_t var_1062;
    generic16_t var_1063;
    generic16_t var_1064;
    generic16_t var_1065;
    generic16_t var_1066;
    generic8_t var_1067;
    generic8_t var_1068;
    generic8_t var_1069;
    generic8_t var_1070;
    generic8_t var_1071;
    generic8_t var_1072;
    generic8_t var_1073;
    generic8_t var_1074;
    generic32_t var_1075;
    generic8_t var_1076;
    generic64_t var_1077;
    generic64_t var_1078;
    generic64_t var_1079;
    generic64_t var_1080;
    generic64_t var_1081;
    generic64_t var_1082;
    generic64_t var_1083;
    generic64_t var_1084;
    generic16_t var_1085;
    generic16_t var_1086;
    generic16_t var_1087;
    generic16_t var_1088;
    generic16_t var_1089;
    generic16_t var_1090;
    generic16_t var_1091;
    generic16_t var_1092;
    generic8_t var_1093;
    generic64_t var_1094;
    generic64_t var_1095;
    generic64_t var_1096;
    generic64_t var_1097;
    generic64_t var_1098;
    generic64_t var_1099;
    generic64_t var_1100;
    generic64_t var_1101;
    generic16_t var_1102;
    generic16_t var_1103;
    generic16_t var_1104;
    generic16_t var_1105;
    generic16_t var_1106;
    generic16_t var_1107;
    generic16_t var_1108;
    generic16_t var_1109;
    generic64_t var_1110;
    generic16_t var_1111;
    generic64_t var_1112;
    generic64_t var_1113;
    generic64_t var_1114;
    generic64_t var_1115;
    generic64_t var_1116;
    generic64_t var_1117;
    generic64_t var_1118;
    generic64_t var_1119;
    generic16_t var_1120;
    generic16_t var_1121;
    generic16_t var_1122;
    generic16_t var_1123;
    generic16_t var_1124;
    generic16_t var_1125;
    generic16_t var_1126;
    generic16_t var_1127;
    generic64_t var_1128;
    generic64_t var_1129;
    generic64_t var_1130;
    generic64_t var_1131;
    generic64_t var_1132;
    generic64_t var_1133;
    generic64_t var_1134;
    generic64_t var_1135;
    generic16_t var_1136;
    generic16_t var_1137;
    generic16_t var_1138;
    generic16_t var_1139;
    generic16_t var_1140;
    generic16_t var_1141;
    generic16_t var_1142;
    generic16_t var_1143;
    generic8_t var_1144;
    generic64_t var_1145;
    generic64_t var_1146;
    generic64_t var_1147;
    generic64_t var_1148;
    generic64_t var_1149;
    generic64_t var_1150;
    generic64_t var_1151;
    generic64_t var_1152;
    generic16_t var_1153;
    generic16_t var_1154;
    generic16_t var_1155;
    generic16_t var_1156;
    generic16_t var_1157;
    generic16_t var_1158;
    generic16_t var_1159;
    generic16_t var_1160;
    generic64_t var_1161;
    generic16_t var_1162;
    generic8_t var_1163;
    generic64_t var_1164;
    generic64_t var_1165;
    generic64_t var_1166;
    generic64_t var_1167;
    generic64_t var_1168;
    generic64_t var_1169;
    generic64_t var_1170;
    generic64_t var_1171;
    generic16_t var_1172;
    generic16_t var_1173;
    generic16_t var_1174;
    generic16_t var_1175;
    generic16_t var_1176;
    generic16_t var_1177;
    generic16_t var_1178;
    generic16_t var_1179;
    generic64_t var_1180;
    generic16_t var_1181;
    generic8_t var_1182;
    generic8_t var_1183;
    generic16_t var_1184;
    generic8_t var_1185;
    generic8_t var_1186;
    generic8_t var_1187;
    generic8_t var_1188;
    generic8_t var_1189;
    generic8_t var_1190;
    generic8_t var_1191;
    generic8_t var_1192;
    generic32_t var_1193;
    generic8_t var_1194;
    generic8_t var_1195;
    generic8_t var_1196;
    generic16_t var_1197;
    generic64_t var_1198;
    generic64_t var_1199;
    generic64_t var_1200;
    generic64_t var_1201;
    generic64_t var_1202;
    generic64_t var_1203;
    generic64_t var_1204;
    generic64_t var_1205;
    generic16_t var_1206;
    generic16_t var_1207;
    generic16_t var_1208;
    generic16_t var_1209;
    generic16_t var_1210;
    generic16_t var_1211;
    generic16_t var_1212;
    generic16_t var_1213;
    generic8_t var_1214;
    generic8_t var_1215;
    generic8_t var_1216;
    generic8_t var_1217;
    generic8_t var_1218;
    generic8_t var_1219;
    generic8_t var_1220;
    generic8_t var_1221;
    generic32_t var_1222;
    generic8_t var_1223;
    generic64_t var_1224;
    generic64_t var_1225;
    generic16_t var_1226;
    generic8_t var_1227;
    generic64_t var_1228;
    generic64_t var_1229;
    generic64_t var_1230;
    generic64_t var_1231;
    generic64_t var_1232;
    generic64_t var_1233;
    generic64_t var_1234;
    generic64_t var_1235;
    generic16_t var_1236;
    generic16_t var_1237;
    generic16_t var_1238;
    generic16_t var_1239;
    generic16_t var_1240;
    generic16_t var_1241;
    generic16_t var_1242;
    generic16_t var_1243;
    generic8_t var_1244;
    generic64_t var_1245;
    generic16_t var_1246;
    generic8_t var_1247;
    generic8_t var_1248;
    generic8_t var_1249;
    generic8_t var_1250;
    generic8_t var_1251;
    generic8_t var_1252;
    generic8_t var_1253;
    generic8_t var_1254;
    generic32_t var_1255;
    generic8_t var_1256;
    generic64_t var_1257;
    generic64_t var_1258;
    generic64_t var_1259;
    generic64_t var_1260;
    generic64_t var_1261;
    generic64_t var_1262;
    generic64_t var_1263;
    generic64_t var_1264;
    generic16_t var_1265;
    generic16_t var_1266;
    generic16_t var_1267;
    generic16_t var_1268;
    generic16_t var_1269;
    generic16_t var_1270;
    generic16_t var_1271;
    generic16_t var_1272;
    generic64_t var_1273;
    generic64_t var_1274;
    generic64_t var_1275;
    generic64_t var_1276;
    generic64_t var_1277;
    generic64_t var_1278;
    generic64_t var_1279;
    generic64_t var_1280;
    generic16_t var_1281;
    generic16_t var_1282;
    generic16_t var_1283;
    generic16_t var_1284;
    generic16_t var_1285;
    generic16_t var_1286;
    generic16_t var_1287;
    generic8_t var_1288;
    generic8_t var_1289;
    generic8_t var_1290;
    generic8_t var_1291;
    generic8_t var_1292;
    generic8_t var_1293;
    generic8_t var_1294;
    generic8_t var_1295;
    generic16_t var_1296;
    generic32_t var_1297;
    generic8_t var_1298;
    generic8_t var_1299;
    generic16_t var_1300;
    generic8_t var_1301;
    generic8_t var_1302;
    generic8_t var_1303;
    generic8_t var_1304;
    generic8_t var_1305;
    generic8_t var_1306;
    generic8_t var_1307;
    generic8_t var_1308;
    generic32_t var_1309;
    generic8_t var_1310;
    generic8_t var_1311;
    generic8_t var_1312;
    generic16_t var_1313;
    generic64_t var_1314;
    generic64_t var_1315;
    generic64_t var_1316;
    generic64_t var_1317;
    generic64_t var_1318;
    generic64_t var_1319;
    generic64_t var_1320;
    generic64_t var_1321;
    generic16_t var_1322;
    generic16_t var_1323;
    generic16_t var_1324;
    generic16_t var_1325;
    generic16_t var_1326;
    generic16_t var_1327;
    generic16_t var_1328;
    generic16_t var_1329;
    generic8_t var_1330;
    generic8_t var_1331;
    generic8_t var_1332;
    generic8_t var_1333;
    generic8_t var_1334;
    generic8_t var_1335;
    generic8_t var_1336;
    generic8_t var_1337;
    generic32_t var_1338;
    generic64_t var_1339;
    generic64_t var_1340;
    generic64_t var_1341;
    generic64_t var_1342;
    generic64_t var_1343;
    generic64_t var_1344;
    generic64_t var_1345;
    generic64_t var_1346;
    generic16_t var_1347;
    generic16_t var_1348;
    generic16_t var_1349;
    generic16_t var_1350;
    generic16_t var_1351;
    generic16_t var_1352;
    generic16_t var_1353;
    generic16_t var_1354;
    generic8_t var_1355;
    generic8_t *var_1356;
    var_1356 = &var_1355;
    generic64_t var_1357;
    generic64_t *var_1358;
    var_1358 = &var_1357;
    generic64_t var_1359;
    generic64_t *var_1360;
    var_1360 = &var_1359;
    generic64_t var_1361;
    generic64_t *var_1362;
    var_1362 = &var_1361;
    generic64_t var_1363;
    generic64_t *var_1364;
    var_1364 = &var_1363;
    generic64_t var_1365;
    generic64_t *var_1366;
    var_1366 = &var_1365;
    generic64_t var_1367;
    generic64_t *var_1368;
    var_1368 = &var_1367;
    generic64_t var_1369;
    generic64_t *var_1370;
    var_1370 = &var_1369;
    generic64_t var_1371;
    generic64_t *var_1372;
    var_1372 = &var_1371;
    generic16_t var_1373;
    generic16_t *var_1374;
    var_1374 = &var_1373;
    generic16_t var_1375;
    generic16_t *var_1376;
    var_1376 = &var_1375;
    generic16_t var_1377;
    generic16_t *var_1378;
    var_1378 = &var_1377;
    generic16_t var_1379;
    generic16_t *var_1380;
    var_1380 = &var_1379;
    generic16_t var_1381;
    generic16_t *var_1382;
    var_1382 = &var_1381;
    generic16_t var_1383;
    generic16_t *var_1384;
    var_1384 = &var_1383;
    generic16_t var_1385;
    generic16_t *var_1386;
    var_1386 = &var_1385;
    generic16_t var_1387;
    generic16_t *var_1388;
    var_1388 = &var_1387;
    generic64_t var_1389;
    generic16_t var_1390;
    generic8_t var_1391;
    generic8_t var_1392;
    generic8_t var_1393;
    generic8_t var_1394;
    generic8_t var_1395;
    generic8_t var_1396;
    generic8_t var_1397;
    generic8_t var_1398;
    generic32_t var_1399;
    generic64_t var_1400;
    generic64_t var_1401;
    generic64_t var_1402;
    generic64_t var_1403;
    generic64_t var_1404;
    generic64_t var_1405;
    generic64_t var_1406;
    generic64_t var_1407;
    generic16_t var_1408;
    generic16_t var_1409;
    generic16_t var_1410;
    generic16_t var_1411;
    generic16_t var_1412;
    generic16_t var_1413;
    generic16_t var_1414;
    generic16_t var_1415;
    generic64_t var_1416;
    generic64_t var_1417;
    generic64_t var_1418;
    generic64_t var_1419;
    generic64_t var_1420;
    generic64_t var_1421;
    generic64_t var_1422;
    generic64_t var_1423;
    generic16_t var_1424;
    generic16_t var_1425;
    generic16_t var_1426;
    generic16_t var_1427;
    generic16_t var_1428;
    generic16_t var_1429;
    generic16_t var_1430;
    generic8_t var_1431;
    generic8_t var_1432;
    generic8_t var_1433;
    generic8_t var_1434;
    generic8_t var_1435;
    generic8_t var_1436;
    generic8_t var_1437;
    generic8_t var_1438;
    generic16_t var_1439;
    generic32_t var_1440;
    generic64_t var_1441;
    generic64_t var_1442;
    generic64_t var_1443;
    generic64_t var_1444;
    generic64_t var_1445;
    generic64_t var_1446;
    generic64_t var_1447;
    generic64_t var_1448;
    generic16_t var_1449;
    generic16_t var_1450;
    generic16_t var_1451;
    generic16_t var_1452;
    generic16_t var_1453;
    generic16_t var_1454;
    generic16_t var_1455;
    generic16_t var_1456;
    generic8_t var_1457;
    generic8_t var_1458;
    generic8_t var_1459;
    generic8_t var_1460;
    generic8_t var_1461;
    generic8_t var_1462;
    generic8_t var_1463;
    generic8_t var_1464;
    generic32_t var_1465;
    generic64_t var_1466;
    generic64_t var_1467;
    generic64_t var_1468;
    generic64_t var_1469;
    generic64_t var_1470;
    generic64_t var_1471;
    generic64_t var_1472;
    generic64_t var_1473;
    generic16_t var_1474;
    generic16_t var_1475;
    generic16_t var_1476;
    generic16_t var_1477;
    generic16_t var_1478;
    generic16_t var_1479;
    generic16_t var_1480;
    generic8_t var_1481;
    generic8_t var_1482;
    generic8_t var_1483;
    generic8_t var_1484;
    generic8_t var_1485;
    generic8_t var_1486;
    generic8_t var_1487;
    generic8_t var_1488;
    generic16_t var_1489;
    generic32_t var_1490;
    generic8_t var_1491;
    generic8_t var_1492;
    generic8_t var_1493;
    generic8_t var_1494;
    generic8_t var_1495;
    generic8_t var_1496;
    generic8_t var_1497;
    generic8_t var_1498;
    generic32_t var_1499;
    generic8_t var_1500;
    generic64_t var_1501;
    generic64_t var_1502;
    generic64_t var_1503;
    generic64_t var_1504;
    generic64_t var_1505;
    generic64_t var_1506;
    generic64_t var_1507;
    generic64_t var_1508;
    generic16_t var_1509;
    generic16_t var_1510;
    generic16_t var_1511;
    generic16_t var_1512;
    generic16_t var_1513;
    generic16_t var_1514;
    generic16_t var_1515;
    generic16_t var_1516;
    generic8_t var_1517;
    generic64_t var_1518;
    generic16_t var_1519;
    generic8_t var_1520;
    generic8_t *var_1521;
    var_1521 = &var_1520;
    generic64_t var_1522;
    generic64_t *var_1523;
    var_1523 = &var_1522;
    generic64_t var_1524;
    generic64_t *var_1525;
    var_1525 = &var_1524;
    generic64_t var_1526;
    generic64_t *var_1527;
    var_1527 = &var_1526;
    generic64_t var_1528;
    generic64_t *var_1529;
    var_1529 = &var_1528;
    generic64_t var_1530;
    generic64_t *var_1531;
    var_1531 = &var_1530;
    generic64_t var_1532;
    generic64_t *var_1533;
    var_1533 = &var_1532;
    generic64_t var_1534;
    generic64_t *var_1535;
    var_1535 = &var_1534;
    generic64_t var_1536;
    generic64_t *var_1537;
    var_1537 = &var_1536;
    generic16_t var_1538;
    generic16_t *var_1539;
    var_1539 = &var_1538;
    generic16_t var_1540;
    generic16_t *var_1541;
    var_1541 = &var_1540;
    generic16_t var_1542;
    generic16_t *var_1543;
    var_1543 = &var_1542;
    generic16_t var_1544;
    generic16_t *var_1545;
    var_1545 = &var_1544;
    generic16_t var_1546;
    generic16_t *var_1547;
    var_1547 = &var_1546;
    generic16_t var_1548;
    generic16_t *var_1549;
    var_1549 = &var_1548;
    generic16_t var_1550;
    generic16_t *var_1551;
    var_1551 = &var_1550;
    generic8_t var_1552;
    generic8_t var_1553;
    generic8_t var_1554;
    generic8_t var_1555;
    generic8_t var_1556;
    generic8_t var_1557;
    generic8_t var_1558;
    generic8_t var_1559;
    generic16_t var_1560;
    generic16_t *var_1561;
    var_1561 = &var_1560;
    generic32_t var_1562;
    generic8_t var_1563;
    generic8_t var_1564;
    generic8_t var_1565;
    generic8_t var_1566;
    generic8_t var_1567;
    generic8_t var_1568;
    generic8_t var_1569;
    generic8_t var_1570;
    generic32_t var_1571;
    generic64_t var_1572;
    generic64_t var_1573;
    generic64_t var_1574;
    generic64_t var_1575;
    generic64_t var_1576;
    generic64_t var_1577;
    generic64_t var_1578;
    generic64_t var_1579;
    generic16_t var_1580;
    generic16_t var_1581;
    generic16_t var_1582;
    generic16_t var_1583;
    generic16_t var_1584;
    generic16_t var_1585;
    generic16_t var_1586;
    generic16_t var_1587;
    generic8_t var_1588;
    generic64_t var_1589;
    generic64_t var_1590;
    generic16_t var_1591;
    generic8_t var_1592;
    generic64_t var_1593;
    generic64_t var_1594;
    generic64_t var_1595;
    generic64_t var_1596;
    generic64_t var_1597;
    generic64_t var_1598;
    generic64_t var_1599;
    generic64_t var_1600;
    generic16_t var_1601;
    generic16_t var_1602;
    generic16_t var_1603;
    generic16_t var_1604;
    generic16_t var_1605;
    generic16_t var_1606;
    generic16_t var_1607;
    generic8_t var_1608;
    generic8_t var_1609;
    generic8_t var_1610;
    generic8_t var_1611;
    generic8_t var_1612;
    generic8_t var_1613;
    generic8_t var_1614;
    generic8_t var_1615;
    generic16_t var_1616;
    generic32_t var_1617;
    generic8_t var_1618;
    generic8_t var_1619;
    generic8_t var_1620;
    generic8_t var_1621;
    generic8_t var_1622;
    generic8_t var_1623;
    generic8_t var_1624;
    generic8_t var_1625;
    generic32_t var_1626;
    generic64_t var_1627;
    generic64_t var_1628;
    generic64_t var_1629;
    generic64_t var_1630;
    generic64_t var_1631;
    generic64_t var_1632;
    generic64_t var_1633;
    generic64_t var_1634;
    generic16_t var_1635;
    generic16_t var_1636;
    generic16_t var_1637;
    generic16_t var_1638;
    generic16_t var_1639;
    generic16_t var_1640;
    generic16_t var_1641;
    generic16_t var_1642;
    generic8_t var_1643;
    generic64_t var_1644;
    generic64_t var_1645;
    generic16_t var_1646;
    generic64_t var_1647;
    generic64_t var_1648;
    generic64_t var_1649;
    generic64_t var_1650;
    generic64_t var_1651;
    generic64_t var_1652;
    generic64_t var_1653;
    generic64_t var_1654;
    generic16_t var_1655;
    generic16_t var_1656;
    generic16_t var_1657;
    generic16_t var_1658;
    generic16_t var_1659;
    generic16_t var_1660;
    generic16_t var_1661;
    generic16_t var_1662;
    generic64_t var_1663;
    generic64_t var_1664;
    generic64_t var_1665;
    generic64_t var_1666;
    generic64_t var_1667;
    generic64_t var_1668;
    generic64_t var_1669;
    generic64_t var_1670;
    generic16_t var_1671;
    generic16_t var_1672;
    generic16_t var_1673;
    generic16_t var_1674;
    generic16_t var_1675;
    generic16_t var_1676;
    generic16_t var_1677;
    generic16_t var_1678;
    generic8_t var_1679;
    generic8_t var_1680;
    generic8_t var_1681;
    generic8_t var_1682;
    generic8_t var_1683;
    generic8_t var_1684;
    generic8_t var_1685;
    generic8_t var_1686;
    generic32_t var_1687;
    generic8_t var_1688;
    generic64_t var_1689;
    generic64_t var_1690;
    generic64_t var_1691;
    generic64_t var_1692;
    generic64_t var_1693;
    generic64_t var_1694;
    generic64_t var_1695;
    generic64_t var_1696;
    generic16_t var_1697;
    generic16_t var_1698;
    generic16_t var_1699;
    generic16_t var_1700;
    generic16_t var_1701;
    generic16_t var_1702;
    generic16_t var_1703;
    generic16_t var_1704;
    generic64_t var_1705;
    generic16_t var_1706;
    generic8_t var_1707;
    generic8_t var_1708;
    generic8_t var_1709;
    generic8_t var_1710;
    generic8_t var_1711;
    generic8_t var_1712;
    generic8_t var_1713;
    generic8_t var_1714;
    generic32_t var_1715;
    generic8_t var_1716;
    generic64_t var_1717;
    generic64_t var_1718;
    generic16_t var_1719;
    generic8_t var_1720;
    generic8_t var_1721;
    generic8_t var_1722;
    generic8_t var_1723;
    generic8_t var_1724;
    generic8_t var_1725;
    generic8_t var_1726;
    generic8_t var_1727;
    generic32_t var_1728;
    generic64_t var_1729;
    generic64_t var_1730;
    generic64_t var_1731;
    generic64_t var_1732;
    generic64_t var_1733;
    generic64_t var_1734;
    generic64_t var_1735;
    generic64_t var_1736;
    generic16_t var_1737;
    generic16_t var_1738;
    generic16_t var_1739;
    generic16_t var_1740;
    generic16_t var_1741;
    generic16_t var_1742;
    generic16_t var_1743;
    generic8_t var_1744;
    generic8_t var_1745;
    generic8_t var_1746;
    generic8_t var_1747;
    generic8_t var_1748;
    generic8_t var_1749;
    generic8_t var_1750;
    generic8_t var_1751;
    generic16_t var_1752;
    generic32_t var_1753;
    generic8_t var_1754;
    generic8_t var_1755;
    generic8_t var_1756;
    generic8_t var_1757;
    generic8_t var_1758;
    generic8_t var_1759;
    generic8_t var_1760;
    generic8_t var_1761;
    generic32_t var_1762;
    generic8_t var_1763;
    generic8_t var_1764;
    generic8_t var_1765;
    generic8_t var_1766;
    generic8_t var_1767;
    generic8_t var_1768;
    generic8_t var_1769;
    generic8_t var_1770;
    generic32_t var_1771;
    generic64_t var_1772;
    generic64_t var_1773;
    generic64_t var_1774;
    generic64_t var_1775;
    generic64_t var_1776;
    generic64_t var_1777;
    generic64_t var_1778;
    generic64_t var_1779;
    generic16_t var_1780;
    generic16_t var_1781;
    generic16_t var_1782;
    generic16_t var_1783;
    generic16_t var_1784;
    generic16_t var_1785;
    generic16_t var_1786;
    generic16_t var_1787;
    generic8_t var_1788;
    generic8_t var_1789;
    generic8_t var_1790;
    generic8_t var_1791;
    generic8_t var_1792;
    generic8_t var_1793;
    generic8_t var_1794;
    generic8_t var_1795;
    generic32_t var_1796;
    generic64_t var_1797;
    generic64_t var_1798;
    generic64_t var_1799;
    generic64_t var_1800;
    generic64_t var_1801;
    generic64_t var_1802;
    generic64_t var_1803;
    generic64_t var_1804;
    generic16_t var_1805;
    generic16_t var_1806;
    generic16_t var_1807;
    generic16_t var_1808;
    generic16_t var_1809;
    generic16_t var_1810;
    generic16_t var_1811;
    generic16_t var_1812;
    generic64_t var_1813;
    generic64_t var_1814;
    generic64_t var_1815;
    generic64_t var_1816;
    generic64_t var_1817;
    generic64_t var_1818;
    generic64_t var_1819;
    generic64_t var_1820;
    generic16_t var_1821;
    generic16_t var_1822;
    generic16_t var_1823;
    generic16_t var_1824;
    generic16_t var_1825;
    generic16_t var_1826;
    generic16_t var_1827;
    generic8_t var_1828;
    generic8_t var_1829;
    generic8_t var_1830;
    generic8_t var_1831;
    generic8_t var_1832;
    generic8_t var_1833;
    generic8_t var_1834;
    generic8_t var_1835;
    generic16_t var_1836;
    generic32_t var_1837;
    generic8_t var_1838;
    generic8_t var_1839;
    generic8_t var_1840;
    generic8_t var_1841;
    generic8_t var_1842;
    generic8_t var_1843;
    generic8_t var_1844;
    generic8_t var_1845;
    generic32_t var_1846;
    generic8_t var_1847;
    generic8_t var_1848;
    generic8_t var_1849;
    generic8_t var_1850;
    generic8_t var_1851;
    generic8_t var_1852;
    generic8_t var_1853;
    generic8_t var_1854;
    generic32_t var_1855;
    generic64_t var_1856;
    generic64_t var_1857;
    generic64_t var_1858;
    generic64_t var_1859;
    generic64_t var_1860;
    generic64_t var_1861;
    generic64_t var_1862;
    generic64_t var_1863;
    generic16_t var_1864;
    generic16_t var_1865;
    generic16_t var_1866;
    generic16_t var_1867;
    generic16_t var_1868;
    generic16_t var_1869;
    generic16_t var_1870;
    generic16_t var_1871;
    generic8_t var_1872;
    generic8_t var_1873;
    generic8_t var_1874;
    generic8_t var_1875;
    generic8_t var_1876;
    generic8_t var_1877;
    generic8_t var_1878;
    generic8_t var_1879;
    generic32_t var_1880;
    generic64_t var_1881;
    generic64_t var_1882;
    generic64_t var_1883;
    generic64_t var_1884;
    generic64_t var_1885;
    generic64_t var_1886;
    generic64_t var_1887;
    generic64_t var_1888;
    generic16_t var_1889;
    generic16_t var_1890;
    generic16_t var_1891;
    generic16_t var_1892;
    generic16_t var_1893;
    generic16_t var_1894;
    generic16_t var_1895;
    generic8_t var_1896;
    generic8_t var_1897;
    generic8_t var_1898;
    generic8_t var_1899;
    generic8_t var_1900;
    generic8_t var_1901;
    generic8_t var_1902;
    generic8_t var_1903;
    generic16_t var_1904;
    generic32_t var_1905;
    generic64_t var_1906;
    var_1906 = (generic64_t) w;
    generic64_t var_1907;
    var_1907 = (generic64_t) p;
    generic8_t var_1908;
    var_1908 = init_state_0x852c();
    generic8_t var_1909;
    var_1909 = init_state_0x852a();
    generic8_t var_1910;
    var_1910 = init_state_0x852b();
    generic8_t var_1911;
    var_1911 = init_state_0x8528();
    generic8_t var_1912;
    var_1912 = init_state_0x852e();
    generic8_t var_1913;
    var_1913 = init_state_0x852d();
    generic64_t var_1914;
    var_1914 = init_cc_src2();
    generic8_t var_1915;
    var_1915 = init_state_0x8529();
    generic16_t var_1916;
    var_1916 = init_state_0x8486();
    generic64_t var_1917;
    var_1917 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 - 16;
    generic64_t var_1918;
    var_1918 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 7520;
    helper_fldt_ST0_wrapper(NULL, var_1918, init_state_0x8480(), &var_1881, &var_1882, &var_1883, &var_1884, &var_1885, &var_1886, &var_1887, &var_1888, &var_1889, &var_1890, &var_1891, &var_1892, &var_1893, &var_1894, &var_1895, &var_1896, &var_1897, &var_1898, &var_1899, &var_1900, &var_1901, &var_1902, &var_1903, &var_1904, &var_1905);
    *(int32_t *) &stack.unnamed_field_at_offset_0 = w;
    *(int32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = fl;
    *(int32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 = t;
    helper_fpush_wrapper(NULL, var_1905, &var_1872, &var_1873, &var_1874, &var_1875, &var_1876, &var_1877, &var_1878, &var_1879, &var_1880);
    generic32_t var_1919;
    var_1919 = var_1880;
    helper_fmov_ST0_STN_wrapper(NULL, 1, var_1881, var_1882, var_1883, var_1884, var_1885, var_1886, var_1887, var_1888, var_1889, var_1890, var_1891, var_1892, var_1893, var_1894, var_1895, var_1904, var_1919, &var_1856, &var_1857, &var_1858, &var_1859, &var_1860, &var_1861, &var_1862, &var_1863, &var_1864, &var_1865, &var_1866, &var_1867, &var_1868, &var_1869, &var_1870, &var_1871);
    generic64_t var_1920;
    var_1920 = var_1856;
    generic64_t var_1921;
    var_1921 = var_1857;
    generic64_t var_1922;
    var_1922 = var_1858;
    generic64_t var_1923;
    var_1923 = var_1859;
    generic64_t var_1924;
    var_1924 = var_1860;
    generic64_t var_1925;
    var_1925 = var_1861;
    generic64_t var_1926;
    var_1926 = var_1862;
    generic64_t var_1927;
    var_1927 = var_1863;
    generic16_t var_1928;
    var_1928 = var_1864;
    generic16_t var_1929;
    var_1929 = var_1865;
    generic16_t var_1930;
    var_1930 = var_1866;
    generic16_t var_1931;
    var_1931 = var_1867;
    generic16_t var_1932;
    var_1932 = var_1868;
    generic16_t var_1933;
    var_1933 = var_1869;
    generic16_t var_1934;
    var_1934 = var_1870;
    generic16_t var_1935;
    var_1935 = var_1871;
    helper_fstt_ST0_wrapper(NULL, var_1917, var_1920, var_1921, var_1922, var_1923, var_1924, var_1925, var_1926, var_1927, var_1928, var_1929, var_1930, var_1931, var_1932, var_1933, var_1934, var_1935, var_1919);
    helper_fpop_wrapper(NULL, var_1919, &var_1847, &var_1848, &var_1849, &var_1850, &var_1851, &var_1852, &var_1853, &var_1854, &var_1855);
    generic32_t var_1936;
    var_1936 = var_1855;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = 0;
    helper_fstt_ST0_wrapper(NULL, var_1918, var_1920, var_1921, var_1922, var_1923, var_1924, var_1925, var_1926, var_1927, var_1928, var_1929, var_1930, var_1931, var_1932, var_1933, var_1934, var_1935, var_1936);
    helper_fpop_wrapper(NULL, var_1936, &var_1838, &var_1839, &var_1840, &var_1841, &var_1842, &var_1843, &var_1844, &var_1845, &var_1846);
    generic128_t var_1937;
    var_1937 = (generic128_t) y & (0x0 << 64 | 0xFFFFFFFFFFFFFFFF);
    int32_t var_1938;
    var_1938 = prefix___signbitl((float128_t) var_1937);
    helper_fldt_ST0_wrapper(NULL, var_1918, var_1846, &var_1813, &var_1814, &var_1815, &var_1816, &var_1817, &var_1818, &var_1819, &var_1820, &var_1821, &var_1822, &var_1823, &var_1824, &var_1825, &var_1826, &var_1827, &var_1828, &var_1829, &var_1830, &var_1831, &var_1832, &var_1833, &var_1834, &var_1835, &var_1836, &var_1837);
    generic64_t var_1939;
    var_1939 = var_1813;
    generic64_t var_1940;
    var_1940 = var_1814;
    generic64_t var_1941;
    var_1941 = var_1815;
    generic64_t var_1942;
    var_1942 = var_1816;
    generic64_t var_1943;
    var_1943 = var_1817;
    generic64_t var_1944;
    var_1944 = var_1818;
    generic64_t var_1945;
    var_1945 = var_1819;
    generic64_t var_1946;
    var_1946 = var_1820;
    generic16_t var_1947;
    var_1947 = var_1821;
    generic16_t var_1948;
    var_1948 = var_1822;
    generic16_t var_1949;
    var_1949 = var_1823;
    generic16_t var_1950;
    var_1950 = var_1824;
    generic16_t var_1951;
    var_1951 = var_1825;
    generic16_t var_1952;
    var_1952 = var_1826;
    generic16_t var_1953;
    var_1953 = var_1827;
    generic16_t var_1954;
    var_1954 = var_1836;
    generic32_t var_1955;
    var_1955 = var_1837;
    if (((generic64_t) var_1938 & 0xFFFFFFFF) == 0) {
        generic32_t var_1956;
        var_1956 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) >> 11;
        uint32_t var_1957 = compute_all_logicl((generic32_t) var_1938, 7480);
        generic32_t var_1958;
        var_1958 = var_1956 & 0x1;
        var_123 = (generic64_t) (var_1957 & 0xFFFFFFFE) | (generic64_t) var_1958;
        if (var_1958 == 0) {
            generic32_t var_1959;
            var_1959 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) & 0x1;
            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 = var_1959;
            var_319 = var_123;
            var_302 = var_1939;
            var_303 = var_1940;
            var_304 = var_1941;
            var_305 = var_1942;
            var_306 = var_1943;
            var_320 = var_1959 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1137 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1142;
            var_307 = var_1944;
            var_308 = var_1945;
            var_309 = var_1946;
            var_310 = var_1947;
            var_311 = var_1948;
            var_312 = var_1949;
            var_313 = var_1950;
            var_314 = var_1951;
            var_315 = var_1952;
            var_316 = var_1953;
            var_317 = (generic64_t) var_1959;
            var_318 = 24;
            var_321 = var_1954;
        } else {
            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 = 1;
            var_319 = var_123;
            var_302 = var_1939;
            var_303 = var_1940;
            var_304 = var_1941;
            var_305 = var_1942;
            var_306 = var_1943;
            var_320 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1139;
            var_307 = var_1944;
            var_308 = var_1945;
            var_309 = var_1946;
            var_310 = var_1947;
            var_311 = var_1948;
            var_312 = var_1949;
            var_313 = var_1950;
            var_314 = var_1951;
            var_315 = var_1952;
            var_316 = var_1953;
            var_317 = var_1938;
            var_318 = 1;
            var_321 = var_1954;
        }
    } else {
        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 = 1;
        helper_fchs_ST0_wrapper(NULL, var_1939, var_1940, var_1941, var_1942, var_1943, var_1944, var_1945, var_1946, var_1947, var_1948, var_1949, var_1950, var_1951, var_1952, var_1953, var_1954, var_1955, &var_1797, &var_1798, &var_1799, &var_1800, &var_1801, &var_1802, &var_1803, &var_1804, &var_1805, &var_1806, &var_1807, &var_1808, &var_1809, &var_1810, &var_1811, &var_1812);
        var_319 = 7480;
        var_302 = var_1797;
        var_303 = var_1798;
        var_304 = var_1799;
        var_305 = var_1800;
        var_306 = var_1801;
        var_320 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1136;
        var_307 = var_1802;
        var_308 = var_1803;
        var_309 = var_1804;
        var_310 = var_1805;
        var_311 = var_1806;
        var_312 = var_1807;
        var_313 = var_1808;
        var_314 = var_1809;
        var_315 = var_1810;
        var_316 = var_1811;
        var_317 = var_1938;
        var_318 = 24;
        var_321 = var_1812;
    }
    var_128 = var_317;
    var_108 = var_319;
    var_282 = var_320;
    *(generic64_t *) &stack.unnamed_field_at_offset_0 = var_1906;
    *(generic64_t *) &stack.unnamed_field_at_offset_0 = var_1906;
    helper_fpush_wrapper(NULL, var_1955, &var_1788, &var_1789, &var_1790, &var_1791, &var_1792, &var_1793, &var_1794, &var_1795, &var_1796);
    generic32_t var_1960;
    var_1960 = var_1796;
    helper_fmov_ST0_STN_wrapper(NULL, 1, var_302, var_303, var_304, var_305, var_306, var_307, var_308, var_309, var_310, var_311, var_312, var_313, var_314, var_315, var_316, var_321, var_1960, &var_1772, &var_1773, &var_1774, &var_1775, &var_1776, &var_1777, &var_1778, &var_1779, &var_1780, &var_1781, &var_1782, &var_1783, &var_1784, &var_1785, &var_1786, &var_1787);
    generic64_t var_1961;
    var_1961 = var_1772;
    generic64_t var_1962;
    var_1962 = var_1773;
    generic64_t var_1963;
    var_1963 = var_1774;
    generic64_t var_1964;
    var_1964 = var_1775;
    generic64_t var_1965;
    var_1965 = var_1776;
    generic64_t var_1966;
    var_1966 = var_1777;
    generic64_t var_1967;
    var_1967 = var_1778;
    generic64_t var_1968;
    var_1968 = var_1779;
    generic16_t var_1969;
    var_1969 = var_1780;
    generic16_t var_1970;
    var_1970 = var_1781;
    generic16_t var_1971;
    var_1971 = var_1782;
    generic16_t var_1972;
    var_1972 = var_1783;
    generic16_t var_1973;
    var_1973 = var_1784;
    generic16_t var_1974;
    var_1974 = var_1785;
    generic16_t var_1975;
    var_1975 = var_1786;
    generic16_t var_1976;
    var_1976 = var_1787;
    helper_fstt_ST0_wrapper(NULL, var_1917, var_1961, var_1962, var_1963, var_1964, var_1965, var_1966, var_1967, var_1968, var_1969, var_1970, var_1971, var_1972, var_1973, var_1974, var_1975, var_1976, var_1960);
    helper_fpop_wrapper(NULL, var_1960, &var_1763, &var_1764, &var_1765, &var_1766, &var_1767, &var_1768, &var_1769, &var_1770, &var_1771);
    generic32_t var_1977;
    var_1977 = var_1771;
    helper_fstt_ST0_wrapper(NULL, var_1918, var_1961, var_1962, var_1963, var_1964, var_1965, var_1966, var_1967, var_1968, var_1969, var_1970, var_1971, var_1972, var_1973, var_1974, var_1975, var_1976, var_1977);
    helper_fpop_wrapper(NULL, var_1977, &var_1754, &var_1755, &var_1756, &var_1757, &var_1758, &var_1759, &var_1760, &var_1761, &var_1762);
    var_124 = prefix___fpclassifyl((float128_t) var_1937);
    helper_fldt_ST0_wrapper(NULL, var_1918, var_1762, &var_1729, &var_1730, &var_1731, &var_1732, &var_1733, &var_1734, &var_1735, &var_1736, &var_1737, &var_1738, &var_1739, &var_1740, &var_1741, &var_1742, &var_1743, &var_1744, &var_1745, &var_1746, &var_1747, &var_1748, &var_1749, &var_1750, &var_1751, &var_1752, &var_1753);
    var_24 = var_1729;
    var_23 = var_1730;
    var_22 = var_1731;
    var_98 = var_1732;
    var_97 = var_1733;
    var_100 = var_1734;
    var_99 = var_1735;
    var_103 = var_1736;
    var_102 = var_1737;
    var_101 = var_1738;
    var_105 = var_1739;
    var_104 = var_1740;
    var_64 = var_1741;
    var_63 = var_1742;
    var_86 = var_1743;
    var_85 = var_1752;
    var_84 = var_1753;
    var_322 = 0;
    switch (var_318) {
        case 9:
        {
            var_322 = (generic64_t) var_128 < var_108;
        } break;
        case 1:
        {
            var_322 = var_108 & 0x1;
        } break;
        case 16:
        {
            var_322 = (generic64_t) ~(generic32_t) var_108 < (generic32_t) var_128;
        } break;
        case 17:
        {
            var_322 = (generic64_t) var_128 > ~var_108;
        } break;
        case 8:
        {
            var_322 = (generic64_t) (generic32_t) var_128 < (generic32_t) var_108;
        } break;
        default:
        {
            var_129 = (generic64_t) var_124 - 1;
            uint32_t var_1978 = compute_all_decl((generic32_t) var_129, (generic32_t) var_322);
            var_260 = (generic64_t) var_1978;
            if (((var_1978 >> 4 ^ var_1978) & 0xC0) == 0) {
                generic64_t var_1979;
                var_1979 = var_129 & 0xFFFFFFFF;
                *(generic64_t *) &stack.unnamed_field_at_offset_0 = var_1979;
                *(generic64_t *) &stack.unnamed_field_at_offset_0 = var_1979;
                helper_fstt_ST0_wrapper(NULL, var_1917, var_24, var_23, var_22, var_98, var_97, var_100, var_99, var_103, var_102, var_101, var_105, var_104, var_64, var_63, var_86, var_85, var_84);
                helper_fpop_wrapper(NULL, var_84, &var_1720, &var_1721, &var_1722, &var_1723, &var_1724, &var_1725, &var_1726, &var_1727, &var_1728);
                generic32_t var_1980;
                var_1980 = var_1728;
                float128_t var_1981;
                var_1981 = frexpl((float128_t) var_1937, (int32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72));
                var_72 = *(generic64_t *) &stack.unnamed_field_at_offset_0;
                helper_fmov_FT0_STN_wrapper(NULL, 0, var_24, var_23, var_22, var_98, var_97, var_100, var_99, var_103, var_102, var_101, var_105, var_104, var_64, var_63, var_86, var_85, var_1980, &var_1705, &var_1706);
                helper_fadd_ST0_FT0_wrapper(NULL, var_1908, var_1909, var_1910, var_24, var_23, var_22, var_1911, var_1912, var_98, var_97, var_100, var_99, var_103, var_102, var_101, var_105, var_104, var_64, var_63, var_86, var_85, var_1705, var_1706, var_1980, var_1915, &var_1688, &var_1689, &var_1690, &var_1691, &var_1692, &var_1693, &var_1694, &var_1695, &var_1696, &var_1697, &var_1698, &var_1699, &var_1700, &var_1701, &var_1702, &var_1703, &var_1704);
                helper_fpush_wrapper(NULL, var_1980, &var_1679, &var_1680, &var_1681, &var_1682, &var_1683, &var_1684, &var_1685, &var_1686, &var_1687);
                var_125 = var_1687;
                helper_fldz_ST0_wrapper(NULL, var_125, &var_1663, &var_1664, &var_1665, &var_1666, &var_1667, &var_1668, &var_1669, &var_1670, &var_1671, &var_1672, &var_1673, &var_1674, &var_1675, &var_1676, &var_1677, &var_1678);
                helper_fxchg_ST0_STN_wrapper(NULL, 1, var_1663, var_1664, var_1665, var_1666, var_1667, var_1668, var_1669, var_1670, var_1671, var_1672, var_1673, var_1674, var_1675, var_1676, var_1677, var_1678, var_125, &var_1647, &var_1648, &var_1649, &var_1650, &var_1651, &var_1652, &var_1653, &var_1654, &var_1655, &var_1656, &var_1657, &var_1658, &var_1659, &var_1660, &var_1661, &var_1662);
                var_91 = var_1647;
                var_90 = var_1648;
                var_89 = var_1649;
                var_88 = var_1650;
                var_13 = var_1651;
                var_12 = var_1652;
                var_11 = var_1653;
                var_57 = var_1654;
                var_56 = var_1655;
                var_55 = var_1656;
                var_54 = var_1657;
                var_10 = var_1658;
                var_9 = var_1659;
                var_8 = var_1660;
                var_93 = var_1661;
                var_92 = var_1662;
                helper_fmov_FT0_STN_wrapper(NULL, 1, var_91, var_90, var_89, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_92, var_125, &var_1645, &var_1646);
                helper_fucomi_ST0_FT0_wrapper(NULL, var_1688, var_91, var_90, var_89, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_129, 1, var_260, var_1914, var_92, var_1645, var_1646, var_125, &var_1643, &var_1644);
                var_94 = var_1643;
                if (!((var_1644 & 0x44) == 64)) {
                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) - 1;
                }
                var_119 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 | 0x20;
                if (!(var_119 == 97)) {
                    var_263 = (generic32_t) p > 4294967295 ? var_1907 : 6;
                    helper_fmov_FT0_STN_wrapper(NULL, 1, var_91, var_90, var_89, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_92, var_125, &var_1590, &var_1591);
                    helper_fucomi_ST0_FT0_wrapper(NULL, var_94, var_91, var_90, var_89, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_1907, 24, 97, var_1914, var_92, var_1590, var_1591, var_125, &var_1588, &var_1589);
                    var_52 = var_1588;
                    var_364 = var_91;
                    var_365 = var_90;
                    var_366 = var_89;
                    var_367 = var_52;
                    var_368 = var_88;
                    var_369 = var_13;
                    var_370 = var_12;
                    var_371 = var_11;
                    var_372 = var_57;
                    var_373 = var_56;
                    var_374 = var_55;
                    var_375 = var_54;
                    var_376 = var_10;
                    var_377 = var_9;
                    var_378 = var_8;
                    var_379 = var_93;
                    var_380 = var_92;
                    if (!((var_1589 & 0x44) == 64)) {
                        helper_flds_FT0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1212), var_52, var_1912, var_1913, &var_1517, &var_1518, &var_1519);
                        helper_fmul_ST0_FT0_wrapper(NULL, var_1908, var_1517, var_1910, var_91, var_90, var_89, var_1911, var_1912, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_92, var_1518, var_1519, var_125, var_1915, &var_1500, &var_1501, &var_1502, &var_1503, &var_1504, &var_1505, &var_1506, &var_1507, &var_1508, &var_1509, &var_1510, &var_1511, &var_1512, &var_1513, &var_1514, &var_1515, &var_1516);
                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) - 28;
                        var_364 = var_1501;
                        var_365 = var_1502;
                        var_366 = var_1503;
                        var_367 = var_1500;
                        var_368 = var_1504;
                        var_369 = var_1505;
                        var_370 = var_1506;
                        var_371 = var_1507;
                        var_372 = var_1508;
                        var_373 = var_1509;
                        var_374 = var_1510;
                        var_375 = var_1511;
                        var_376 = var_1512;
                        var_377 = var_1513;
                        var_378 = var_1514;
                        var_379 = var_1515;
                        var_380 = var_1516;
                    }
                    var_237 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72);
                    uint32_t var_1982 = helper_fnstcw_wrapper(NULL, var_1916);
                    generic16_t var_1983;
                    var_1983 = (generic16_t) var_1982;
                    *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 62) = var_1983;
                    *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 60) = var_1983 & 0xFF | (var_1983 & 0xF300 | 0xC00);
                    var_382 = 0;
                    var_383 = var_364;
                    var_384 = var_365;
                    var_385 = var_366;
                    var_386 = var_367;
                    var_387 = var_368;
                    var_388 = var_369;
                    var_389 = var_370;
                    var_390 = var_371;
                    var_391 = var_372;
                    var_392 = var_373;
                    var_393 = var_374;
                    var_394 = var_375;
                    var_395 = var_376;
                    var_396 = var_377;
                    var_397 = var_378;
                    var_398 = var_379;
                    var_399 = var_380;
                    var_400 = var_125;
                    var_401 = var_1916;
                    while (true) {
                        generic64_t var_1984;
                        var_1984 = var_382;
                        helper_fpush_wrapper(NULL, var_400, &var_1330, &var_1331, &var_1332, &var_1333, &var_1334, &var_1335, &var_1336, &var_1337, &var_1338);
                        generic32_t var_1985;
                        var_1985 = var_1338;
                        helper_fmov_ST0_STN_wrapper(NULL, 1, var_383, var_384, var_385, var_387, var_388, var_389, var_390, var_391, var_392, var_393, var_394, var_395, var_396, var_397, var_398, var_399, var_1985, &var_1314, &var_1315, &var_1316, &var_1317, &var_1318, &var_1319, &var_1320, &var_1321, &var_1322, &var_1323, &var_1324, &var_1325, &var_1326, &var_1327, &var_1328, &var_1329);
                        helper_fldcw_wrapper(NULL, (generic32_t) *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 60), var_401, &var_1311, &var_1312, &var_1313);
                        uint64_t var_1986 = helper_fistll_ST0_wrapper(NULL, var_386, var_1314, var_1315, var_1316, var_1317, var_1318, var_1319, var_1320, var_1321, var_1322, var_1323, var_1324, var_1325, var_1326, var_1327, var_1328, var_1329, var_1985, var_1312, &var_1310);
                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 40) = var_1986;
                        helper_fpop_wrapper(NULL, var_1985, &var_1301, &var_1302, &var_1303, &var_1304, &var_1305, &var_1306, &var_1307, &var_1308, &var_1309);
                        helper_fldcw_wrapper(NULL, (generic32_t) *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 62), var_1313, &var_1298, &var_1299, &var_1300);
                        var_96 = var_1298;
                        var_95 = var_1299;
                        generic64_t var_1987;
                        var_1987 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 40);
                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) = (generic32_t) var_1987;
                        generic64_t var_1988;
                        var_1988 = var_1987 & 0xFFFFFFFF;
                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 40) = var_1988;
                        helper_fildll_ST0_wrapper(NULL, var_1988, var_1309, &var_1273, &var_1274, &var_1275, &var_1276, &var_1277, &var_1278, &var_1279, &var_1280, &var_1281, &var_1282, &var_1283, &var_1284, &var_1285, &var_1286, &var_1287, &var_1288, &var_1289, &var_1290, &var_1291, &var_1292, &var_1293, &var_1294, &var_1295, &var_1296, &var_1297);
                        generic32_t var_1989;
                        var_1989 = var_1297;
                        helper_fsub_STN_ST0_wrapper(NULL, 1, var_1908, var_1310, var_96, var_1273, var_1274, var_1275, var_1911, var_1912, var_1276, var_1277, var_1278, var_1279, var_1280, var_1281, var_1282, var_1283, var_1284, var_1285, var_1286, var_1287, var_1296, var_1989, var_95, &var_1256, &var_1257, &var_1258, &var_1259, &var_1260, &var_1261, &var_1262, &var_1263, &var_1264, &var_1265, &var_1266, &var_1267, &var_1268, &var_1269, &var_1270, &var_1271, &var_1272);
                        helper_fpop_wrapper(NULL, var_1989, &var_1247, &var_1248, &var_1249, &var_1250, &var_1251, &var_1252, &var_1253, &var_1254, &var_1255);
                        var_209 = var_1255;
                        helper_flds_FT0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1216), var_1256, var_1912, var_1913, &var_1244, &var_1245, &var_1246);
                        helper_fmul_ST0_FT0_wrapper(NULL, var_1908, var_1244, var_96, var_1257, var_1258, var_1259, var_1911, var_1912, var_1260, var_1261, var_1262, var_1263, var_1264, var_1265, var_1266, var_1267, var_1268, var_1269, var_1270, var_1271, var_1272, var_1245, var_1246, var_209, var_95, &var_1227, &var_1228, &var_1229, &var_1230, &var_1231, &var_1232, &var_1233, &var_1234, &var_1235, &var_1236, &var_1237, &var_1238, &var_1239, &var_1240, &var_1241, &var_1242, &var_1243);
                        var_208 = var_1228;
                        var_207 = var_1229;
                        var_45 = var_1230;
                        var_44 = var_1231;
                        var_43 = var_1232;
                        var_42 = var_1233;
                        var_41 = var_1234;
                        var_40 = var_1235;
                        var_39 = var_1236;
                        var_38 = var_1237;
                        var_37 = var_1238;
                        var_36 = var_1239;
                        var_35 = var_1240;
                        var_34 = var_1241;
                        var_33 = var_1242;
                        var_32 = var_1243;
                        helper_fmov_FT0_STN_wrapper(NULL, 1, var_208, var_207, var_45, var_44, var_43, var_42, var_41, var_40, var_39, var_38, var_37, var_36, var_35, var_34, var_33, var_32, var_209, &var_1225, &var_1226);
                        helper_fucomi_ST0_FT0_wrapper(NULL, var_1227, var_208, var_207, var_45, var_44, var_43, var_42, var_41, var_40, var_39, var_38, var_37, var_36, var_35, var_34, var_33, (generic64_t) &stack.unnamed_field_at_offset_0 + 7516 + (var_1984 << 2), 9, 4, var_1914, var_32, var_1225, var_1226, var_209, &var_1223, &var_1224);
                        var_31 = var_1223;
                        var_382 = var_1984 + 1;
                        var_383 = var_208;
                        var_384 = var_207;
                        var_385 = var_45;
                        var_386 = var_31;
                        var_387 = var_44;
                        var_388 = var_43;
                        var_389 = var_42;
                        var_390 = var_41;
                        var_391 = var_40;
                        var_392 = var_39;
                        var_393 = var_38;
                        var_394 = var_37;
                        var_395 = var_36;
                        var_396 = var_35;
                        var_397 = var_34;
                        var_398 = var_33;
                        var_399 = var_32;
                        var_400 = var_209;
                        var_401 = var_1300;
                        if (!((var_1224 & 0x44) == 64)) {
                            continue;
                        }
                        break;
                    }
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_208, var_207, var_45, var_44, var_43, var_42, var_41, var_40, var_39, var_38, var_37, var_36, var_35, var_34, var_33, var_32, var_209, &var_984, &var_985, &var_986, &var_987, &var_988, &var_989, &var_990, &var_991, &var_992, &var_993, &var_994, &var_995, &var_996, &var_997, &var_998, &var_999);
                    helper_fpop_wrapper(NULL, var_209, &var_975, &var_976, &var_977, &var_978, &var_979, &var_980, &var_981, &var_982, &var_983);
                    generic32_t var_1990;
                    var_1990 = var_983;
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_984, var_985, var_986, var_987, var_988, var_989, var_990, var_991, var_992, var_993, var_994, var_995, var_996, var_997, var_998, var_999, var_1990, &var_959, &var_960, &var_961, &var_962, &var_963, &var_964, &var_965, &var_966, &var_967, &var_968, &var_969, &var_970, &var_971, &var_972, &var_973, &var_974);
                    helper_fpop_wrapper(NULL, var_1990, &var_950, &var_951, &var_952, &var_953, &var_954, &var_955, &var_956, &var_957, &var_958);
                    var_224 = var_958;
                    var_432 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7516;
                    var_433 = 0;
                    var_434 = var_237;
                    var_435 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                    while (true) {
                        var_223 = var_432;
                        var_62 = var_433;
                        var_61 = var_434;
                        var_60 = var_435;
                        uint32_t var_1991 = compute_all_logicl(var_61, 0);
                        if (!(((var_1991 >> 4 ^ var_1991) & 0xC0) == 0)) {
                            break;
                        }
                        var_118 = var_61 < 29 ? var_61 : 29;
                        var_117 = (generic64_t) var_118 & 0x3F;
                        var_0 = var_223 - 4;
                        var_437 = 0;
                        var_438 = 0;
                        while (true) {
                            var_106 = var_437;
                            var_190 = var_438;
                            var_257 = var_0 + var_106 * -4;
                            if (var_60 > var_257) {
                                break;
                            }
                            generic64_t var_1992;
                            var_1992 = var_257;
                            generic64_t var_1993;
                            var_1993 = (var_190 & 0xFFFFFFFF) + ((generic64_t) *(generic32_t *) var_1992 << var_117);
                            *(generic32_t *) var_1992 = (generic32_t) (var_1993 % 1000000000);
                            var_437 = var_106 + 1;
                            var_438 = var_1993 / 1000000000;
                            continue;
                        }
                        var_444 = var_60;
                        if (!((var_190 & 0xFFFFFFFF) == 0)) {
                            generic64_t var_1994;
                            var_1994 = var_60 - 4;
                            *(generic32_t *) var_1994 = (generic32_t) var_190;
                            var_444 = var_1994;
                        }
                        var_185 = var_444;
                        var_445 = 0;
                        while (true) {
                            var_184 = var_445;
                            var_268 = var_184 * -4;
                            var_291 = var_223 + var_268;
                            if (var_291 > var_185) {
                                var_445 = var_184 + 1;
                                if (*(generic32_t *) (var_0 + var_268) == 0) {
                                    continue;
                                }
                            }
                            break;
                        }
                        var_432 = var_291;
                        var_433 = var_190 & 0x7FFFFFF00 | 0x1;
                        var_434 = var_61 - var_118;
                        var_435 = var_185;
                        continue;
                    }
                    if (!((var_62 & 0xFF) == 0)) {
                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = var_61;
                    }
                    generic64_t var_1995;
                    var_1995 = var_263 + 29;
                    generic32_t var_1996;
                    var_1996 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72);
                    generic64_t var_1997;
                    var_1997 = ((var_1995 & 0xFFFFFFFF | var_1995 << 32 >> 31 & 0xFFFFFFFF00000000) / 9 << 32) + 4294967296;
                    var_256 = var_1997 >> 32;
                    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 48) = var_1997 >> 30;
                    var_109 = var_119 == 102;
                    var_439 = var_223;
                    var_440 = var_1996;
                    var_441 = var_60;
                    var_442 = true;
                    while (true) {
                        var_189 = var_439;
                        var_188 = var_440;
                        var_187 = var_441;
                        var_186 = var_442;
                        if (var_188 > 4294967295) {
                            break;
                        }
                        var_293 = var_188 < 4294967287 ? 9 : 0 - var_188;
                        var_292 = var_293 & 0x1F;
                        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_0 = 0x3B9ACA00 >> var_292;
                        var_294 = ~(0xFFFFFFFF << var_292);
                        var_446 = 0;
                        var_447 = 0;
                        while (true) {
                            var_182 = var_446;
                            var_181 = var_447;
                            var_290 = var_187 + (var_182 << 2);
                            if (!(var_290 < var_189)) {
                                break;
                            }
                            generic64_t var_1998;
                            var_1998 = var_290;
                            generic32_t var_1999;
                            var_1999 = *(generic32_t *) var_1998;
                            *(generic32_t *) var_1998 = (var_1999 >> var_292) + (generic32_t) var_181;
                            var_446 = var_182 + 1;
                            var_447 = (generic64_t) (var_1999 & var_294) * *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_0;
                            continue;
                        }
                        var_269 = *(generic32_t *) var_187 == 0 ? var_187 + 4 : var_187;
                        var_454 = var_189;
                        if (!(var_181 == 0)) {
                            *(generic32_t *) var_189 = (generic32_t) var_181;
                            var_454 = var_189 + 4;
                        }
                        generic64_t var_2000;
                        var_2000 = var_454;
                        var_296 = var_109 ? (generic64_t) &stack.unnamed_field_at_offset_0 + 7512 : var_269;
                        var_456 = var_2000;
                        if (var_2000 - var_296 >> 2 > var_256) {
                            var_456 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 48) + var_296;
                        }
                        var_439 = var_456;
                        var_440 = var_188 + var_293;
                        var_441 = var_269;
                        var_442 = false;
                        continue;
                    }
                    if (!(var_186)) {
                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = var_188;
                    }
                    var_448 = 0;
                    if (var_187 < var_189) {
                        var_183 = *(generic32_t *) var_187;
                        var_450 = 10;
                        var_449 = ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512 - var_187 >> 2) * 9;
                        while (true) {
                            var_235 = var_450;
                            generic32_t var_2001;
                            var_2001 = (generic32_t) var_235;
                            var_301 = var_449 & 0xFFFFFFFF;
                            var_448 = var_301;
                            if (var_183 - var_2001 > ~var_2001) {
                                break;
                            }
                            var_450 = var_235 * 10 & 0xFFFFFFFC;
                            var_449 = var_301 + 1;
                            continue;
                        }
                    }
                    var_180 = var_448;
                    var_271 = var_119 == 103;
                    var_270 = (var_263 - (var_109 ? 0 : var_180) & 0xFFFFFFFF) + (generic64_t) (var_271 & var_263 != 0);
                    var_460 = var_189;
                    var_461 = var_180;
                    var_462 = var_187;
                    if (var_270 << 32 >> 32 < (var_189 - ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) >> 2) * 9 - 9) {
                        generic64_t var_2002;
                        var_2002 = var_270 + 147456;
                        var_452 = (var_2002 & 0xFFFFFFFF | var_2002 << 32 >> 31 & 0xFFFFFFFF00000000) % 9;
                        var_453 = 10;
                        while (true) {
                            var_233 = var_452;
                            var_232 = var_453;
                            if ((var_233 + 4294967288 & 0xFFFFFFFF) == 0) {
                                break;
                            }
                            var_452 = var_233 + 1 & 0xFFFFFFFF;
                            var_453 = var_232 * 10 & 0xFFFFFFFC;
                            continue;
                        }
                        var_127 = (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512);
                        var_126 = var_127 % var_232;
                        var_120 = var_189 == (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                        var_457 = var_180;
                        var_458 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                        var_459 = var_187;
                        if (!(var_126 == 0 & var_120)) {
                            if ((var_127 / var_232 & 0x1) == 0) {
                                if ((var_232 + 3294967296 & 0xFFFFFFFE) == 0 & var_187 < (generic64_t) &stack.unnamed_field_at_offset_0 + 7512) {
                                    if ((*(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) & 0x1) == '\000') {
                                        helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1196), var_31, var_1912, var_1913, var_224, &var_747, &var_748, &var_749, &var_750, &var_751, &var_752, &var_753, &var_754, &var_755, &var_756, &var_757, &var_758, &var_759, &var_760, &var_761, &var_762, &var_763, &var_764, &var_765, &var_766, &var_767, &var_768, &var_769, &var_770, &var_771, var_773);
                                        var_464 = var_747;
                                        var_465 = var_773;
                                    } else {
                                        helper_fldt_ST0_wrapper(NULL, (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1232, var_224, &var_774, &var_775, &var_776, &var_777, &var_778, &var_779, &var_780, &var_781, &var_782, &var_783, &var_784, &var_785, &var_786, &var_787, &var_788, &var_789, &var_790, &var_791, &var_792, &var_793, &var_794, &var_795, &var_796, &var_797, var_799);
                                        var_464 = var_31;
                                        var_465 = var_799;
                                    }
                                } else {
                                    helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1196), var_31, var_1912, var_1913, var_224, &var_747, &var_748, &var_749, &var_750, &var_751, &var_752, &var_753, &var_754, &var_755, &var_756, &var_757, &var_758, &var_759, &var_760, &var_761, &var_762, &var_763, &var_764, &var_765, &var_766, &var_767, &var_768, &var_769, &var_770, &var_771, var_773);
                                    var_464 = var_747;
                                    var_465 = var_773;
                                }
                            } else {
                                helper_fldt_ST0_wrapper(NULL, (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1232, var_224, &var_774, &var_775, &var_776, &var_777, &var_778, &var_779, &var_780, &var_781, &var_782, &var_783, &var_784, &var_785, &var_786, &var_787, &var_788, &var_789, &var_790, &var_791, &var_792, &var_793, &var_794, &var_795, &var_796, &var_797, var_799);
                                var_464 = var_31;
                                var_465 = var_799;
                            }
                            var_226 = var_464;
                            var_225 = *var_465;
                            var_110 = var_232 << 32 >> 33;
                            if ((var_110 & 0xFFFFFFFF) > var_126) {
                                helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1204), var_226, var_1912, var_1913, var_225, &var_721, &var_722, &var_723, &var_724, &var_725, &var_726, &var_727, &var_728, &var_729, &var_730, &var_731, &var_732, &var_733, &var_734, &var_735, &var_736, &var_737, &var_738, &var_739, &var_740, &var_741, &var_742, &var_743, &var_744, &var_745, &var_746);
                                var_469 = var_722;
                                var_470 = var_723;
                                var_471 = var_724;
                                var_472 = var_721;
                                var_473 = var_725;
                                var_474 = var_726;
                                var_475 = var_727;
                                var_476 = var_728;
                                var_477 = var_729;
                                var_478 = var_730;
                                var_479 = var_731;
                                var_480 = var_732;
                                var_481 = var_733;
                                var_482 = var_734;
                                var_483 = var_735;
                                var_484 = var_736;
                                var_485 = var_745;
                                var_486 = var_746;
                            } else {
                                generic32_t var_2003;
                                var_2003 = (generic32_t) var_126;
                                uint32_t var_2004 = compute_all_subl((generic32_t) var_110 - var_2003, var_2003);
                                var_487 = var_225;
                                if ((var_2004 & 0x40) == 0) {
                                    helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1200), var_226, var_1912, var_1913, var_487, &var_695, &var_696, &var_697, &var_698, &var_699, &var_700, &var_701, &var_702, &var_703, &var_704, &var_705, &var_706, &var_707, &var_708, &var_709, &var_710, &var_711, &var_712, &var_713, &var_714, &var_715, &var_716, &var_717, &var_718, &var_719, &var_720);
                                    var_469 = var_696;
                                    var_470 = var_697;
                                    var_471 = var_698;
                                    var_472 = var_695;
                                    var_473 = var_699;
                                    var_474 = var_700;
                                    var_475 = var_701;
                                    var_476 = var_702;
                                    var_477 = var_703;
                                    var_478 = var_704;
                                    var_479 = var_705;
                                    var_480 = var_706;
                                    var_481 = var_707;
                                    var_482 = var_708;
                                    var_483 = var_709;
                                    var_484 = var_710;
                                    var_485 = var_719;
                                    var_486 = var_720;
                                } else {
                                    helper_fpush_wrapper(NULL, var_225, &var_686, &var_687, &var_688, &var_689, &var_690, &var_691, &var_692, &var_693, &var_694);
                                    var_165 = var_694;
                                    helper_fld1_ST0_wrapper(NULL, var_165, &var_670, &var_671, &var_672, &var_673, &var_674, &var_675, &var_676, &var_677, &var_678, &var_679, &var_680, &var_681, &var_682, &var_683, &var_684, &var_685);
                                    var_164 = var_670;
                                    var_163 = var_671;
                                    var_162 = var_672;
                                    var_161 = var_673;
                                    var_160 = var_674;
                                    var_159 = var_675;
                                    var_158 = var_676;
                                    var_157 = var_677;
                                    var_156 = var_678;
                                    var_155 = var_679;
                                    var_154 = var_680;
                                    var_153 = var_681;
                                    var_152 = var_682;
                                    var_151 = var_683;
                                    var_150 = var_684;
                                    var_149 = var_685;
                                    var_469 = var_164;
                                    var_470 = var_163;
                                    var_471 = var_162;
                                    var_472 = var_226;
                                    var_473 = var_161;
                                    var_474 = var_160;
                                    var_475 = var_159;
                                    var_476 = var_158;
                                    var_477 = var_157;
                                    var_478 = var_156;
                                    var_479 = var_155;
                                    var_480 = var_154;
                                    var_481 = var_153;
                                    var_482 = var_152;
                                    var_483 = var_151;
                                    var_484 = var_150;
                                    var_485 = var_149;
                                    var_486 = var_165;
                                    if (!(var_120)) {
                                        helper_fmov_STN_ST0_wrapper(NULL, 0, var_164, var_163, var_162, var_161, var_160, var_159, var_158, var_157, var_156, var_155, var_154, var_153, var_152, var_151, var_150, var_149, var_165, &var_597, &var_598, &var_599, &var_600, &var_601, &var_602, &var_603, &var_604, &var_605, &var_606, &var_607, &var_608, &var_609, &var_610, &var_611, &var_612);
                                        helper_fpop_wrapper(NULL, var_165, &var_588, &var_589, &var_590, &var_591, &var_592, &var_593, &var_594, &var_595, &var_596);
                                        var_487 = var_596;
                                        helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1200), var_226, var_1912, var_1913, var_487, &var_695, &var_696, &var_697, &var_698, &var_699, &var_700, &var_701, &var_702, &var_703, &var_704, &var_705, &var_706, &var_707, &var_708, &var_709, &var_710, &var_711, &var_712, &var_713, &var_714, &var_715, &var_716, &var_717, &var_718, &var_719, &var_720);
                                        var_469 = var_696;
                                        var_470 = var_697;
                                        var_471 = var_698;
                                        var_472 = var_695;
                                        var_473 = var_699;
                                        var_474 = var_700;
                                        var_475 = var_701;
                                        var_476 = var_702;
                                        var_477 = var_703;
                                        var_478 = var_704;
                                        var_479 = var_705;
                                        var_480 = var_706;
                                        var_481 = var_707;
                                        var_482 = var_708;
                                        var_483 = var_709;
                                        var_484 = var_710;
                                        var_485 = var_719;
                                        var_486 = var_720;
                                    }
                                }
                            }
                            var_5 = var_469;
                            var_4 = var_470;
                            var_3 = var_471;
                            var_2 = var_472;
                            var_1 = var_473;
                            var_178 = var_474;
                            var_177 = var_475;
                            var_176 = var_476;
                            var_175 = var_477;
                            var_174 = var_478;
                            var_173 = var_479;
                            var_172 = var_480;
                            var_171 = var_481;
                            var_170 = var_482;
                            var_169 = var_483;
                            var_168 = var_484;
                            var_167 = var_485;
                            var_166 = var_486;
                            var_502 = var_168;
                            var_503 = var_167;
                            var_488 = var_5;
                            var_489 = var_4;
                            var_490 = var_3;
                            var_491 = var_1;
                            var_492 = var_178;
                            var_493 = var_177;
                            var_494 = var_176;
                            var_495 = var_175;
                            var_496 = var_174;
                            var_497 = var_173;
                            var_498 = var_172;
                            var_499 = var_171;
                            var_500 = var_170;
                            var_501 = var_169;
                            if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 == 0)) {
                                var_502 = var_168;
                                var_503 = var_167;
                                var_488 = var_5;
                                var_489 = var_4;
                                var_490 = var_3;
                                var_491 = var_1;
                                var_492 = var_178;
                                var_493 = var_177;
                                var_494 = var_176;
                                var_495 = var_175;
                                var_496 = var_174;
                                var_497 = var_173;
                                var_498 = var_172;
                                var_499 = var_171;
                                var_500 = var_170;
                                var_501 = var_169;
                                if (*(generic8_t *) var_282 == '-') {
                                    helper_fxchg_ST0_STN_wrapper(NULL, 1, var_5, var_4, var_3, var_1, var_178, var_177, var_176, var_175, var_174, var_173, var_172, var_171, var_170, var_169, var_168, var_167, var_166, &var_572, &var_573, &var_574, &var_575, &var_576, &var_577, &var_578, &var_579, &var_580, &var_581, &var_582, &var_583, &var_584, &var_585, &var_586, &var_587);
                                    helper_fchs_ST0_wrapper(NULL, var_572, var_573, var_574, var_575, var_576, var_577, var_578, var_579, var_580, var_581, var_582, var_583, var_584, var_585, var_586, var_587, var_166, &var_556, &var_557, &var_558, &var_559, &var_560, &var_561, &var_562, &var_563, &var_564, &var_565, &var_566, &var_567, &var_568, &var_569, &var_570, &var_571);
                                    helper_fxchg_ST0_STN_wrapper(NULL, 1, var_556, var_557, var_558, var_559, var_560, var_561, var_562, var_563, var_564, var_565, var_566, var_567, var_568, var_569, var_570, var_571, var_166, &var_540, &var_541, &var_542, &var_543, &var_544, &var_545, &var_546, &var_547, &var_548, &var_549, &var_550, &var_551, &var_552, &var_553, &var_554, &var_555);
                                    helper_fchs_ST0_wrapper(NULL, var_540, var_541, var_542, var_543, var_544, var_545, var_546, var_547, var_548, var_549, var_550, var_551, var_552, var_553, var_554, var_555, var_166, &var_524, &var_525, &var_526, &var_527, &var_528, &var_529, &var_530, &var_531, &var_532, &var_533, &var_534, &var_535, &var_536, &var_537, &var_538, &var_539);
                                    var_502 = var_538;
                                    var_503 = var_539;
                                    var_488 = var_524;
                                    var_489 = var_525;
                                    var_490 = var_526;
                                    var_491 = var_527;
                                    var_492 = var_528;
                                    var_493 = var_529;
                                    var_494 = var_530;
                                    var_495 = var_531;
                                    var_496 = var_532;
                                    var_497 = var_533;
                                    var_498 = var_534;
                                    var_499 = var_535;
                                    var_500 = var_536;
                                    var_501 = var_537;
                                }
                            }
                            generic64_t var_2005;
                            var_2005 = var_488;
                            generic64_t var_2006;
                            var_2006 = var_489;
                            generic64_t var_2007;
                            var_2007 = var_490;
                            generic64_t var_2008;
                            var_2008 = var_491;
                            generic64_t var_2009;
                            var_2009 = var_492;
                            generic64_t var_2010;
                            var_2010 = var_493;
                            generic64_t var_2011;
                            var_2011 = var_494;
                            generic64_t var_2012;
                            var_2012 = var_495;
                            generic16_t var_2013;
                            var_2013 = var_496;
                            generic16_t var_2014;
                            var_2014 = var_497;
                            generic16_t var_2015;
                            var_2015 = var_498;
                            generic16_t var_2016;
                            var_2016 = var_499;
                            generic16_t var_2017;
                            var_2017 = var_500;
                            generic16_t var_2018;
                            var_2018 = var_501;
                            generic16_t var_2019;
                            var_2019 = var_502;
                            generic16_t var_2020;
                            var_2020 = var_503;
                            helper_fmov_FT0_STN_wrapper(NULL, 1, var_2005, var_2006, var_2007, var_2008, var_2009, var_2010, var_2011, var_2012, var_2013, var_2014, var_2015, var_2016, var_2017, var_2018, var_2019, var_2020, var_166, &var_668, &var_669);
                            helper_fadd_ST0_FT0_wrapper(NULL, var_1908, var_2, var_96, var_2005, var_2006, var_2007, var_1911, var_1912, var_2008, var_2009, var_2010, var_2011, var_2012, var_2013, var_2014, var_2015, var_2016, var_2017, var_2018, var_2019, var_2020, var_668, var_669, var_166, var_95, &var_651, &var_652, &var_653, &var_654, &var_655, &var_656, &var_657, &var_658, &var_659, &var_660, &var_661, &var_662, &var_663, &var_664, &var_665, &var_666, &var_667);
                            generic64_t var_2021;
                            var_2021 = var_652;
                            generic64_t var_2022;
                            var_2022 = var_653;
                            generic64_t var_2023;
                            var_2023 = var_654;
                            generic64_t var_2024;
                            var_2024 = var_655;
                            generic64_t var_2025;
                            var_2025 = var_656;
                            generic64_t var_2026;
                            var_2026 = var_657;
                            generic64_t var_2027;
                            var_2027 = var_658;
                            generic64_t var_2028;
                            var_2028 = var_659;
                            generic16_t var_2029;
                            var_2029 = var_660;
                            generic16_t var_2030;
                            var_2030 = var_661;
                            generic16_t var_2031;
                            var_2031 = var_662;
                            generic16_t var_2032;
                            var_2032 = var_663;
                            generic16_t var_2033;
                            var_2033 = var_664;
                            generic16_t var_2034;
                            var_2034 = var_665;
                            generic16_t var_2035;
                            var_2035 = var_666;
                            generic16_t var_2036;
                            var_2036 = var_667;
                            var_287 = var_127 - var_126;
                            helper_fmov_FT0_STN_wrapper(NULL, 1, var_2021, var_2022, var_2023, var_2024, var_2025, var_2026, var_2027, var_2028, var_2029, var_2030, var_2031, var_2032, var_2033, var_2034, var_2035, var_2036, var_166, &var_649, &var_650);
                            helper_fucomi_ST0_FT0_wrapper(NULL, var_651, var_2021, var_2022, var_2023, var_2024, var_2025, var_2026, var_2027, var_2028, var_2029, var_2030, var_2031, var_2032, var_2033, var_2034, var_2035, var_287, 16, var_126, var_1914, var_2036, var_649, var_650, var_166, &var_647, &var_648);
                            helper_fpop_wrapper(NULL, var_166, &var_638, &var_639, &var_640, &var_641, &var_642, &var_643, &var_644, &var_645, &var_646);
                            generic32_t var_2037;
                            var_2037 = var_646;
                            helper_fmov_STN_ST0_wrapper(NULL, 0, var_2021, var_2022, var_2023, var_2024, var_2025, var_2026, var_2027, var_2028, var_2029, var_2030, var_2031, var_2032, var_2033, var_2034, var_2035, var_2036, var_2037, &var_622, &var_623, &var_624, &var_625, &var_626, &var_627, &var_628, &var_629, &var_630, &var_631, &var_632, &var_633, &var_634, &var_635, &var_636, &var_637);
                            helper_fpop_wrapper(NULL, var_2037, &var_613, &var_614, &var_615, &var_616, &var_617, &var_618, &var_619, &var_620, &var_621);
                            if (!((var_648 & 0x44) == 64)) {
                                generic32_t var_2038;
                                var_2038 = (generic32_t) var_232 + (generic32_t) var_287;
                                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) = var_2038;
                                var_506 = 0;
                                var_507 = var_2038;
                                var_508 = var_187;
                                while (true) {
                                    var_254 = var_506;
                                    var_253 = var_508;
                                    if (!(var_507 > 999999999)) {
                                        break;
                                    }
                                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) = 0;
                                    var_519 = var_253;
                                    if (var_253 > (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0) {
                                        generic64_t var_2039;
                                        var_2039 = var_253 - 4;
                                        *(generic32_t *) var_2039 = 0;
                                        var_519 = var_2039;
                                    }
                                    generic32_t var_2040;
                                    var_2040 = *(generic32_t *) &stack.unnamed_field_at_offset_0 + 1;
                                    *(generic32_t *) &stack.unnamed_field_at_offset_0 = var_2040;
                                    var_506 = var_254 + 1;
                                    var_507 = var_2040;
                                    var_508 = var_519;
                                    continue;
                                }
                                var_217 = *(generic32_t *) var_253;
                                var_513 = ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512 - var_253 >> 2) * 9;
                                var_514 = 10;
                                while (true) {
                                    var_216 = var_514;
                                    generic32_t var_2041;
                                    var_2041 = (generic32_t) var_216;
                                    var_266 = var_513 & 0xFFFFFFFF;
                                    var_457 = var_266;
                                    var_458 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                                    var_459 = var_253;
                                    if (var_217 - var_2041 > ~var_2041) {
                                        break;
                                    }
                                    var_513 = var_266 + 1;
                                    var_514 = var_216 * 10 & 0xFFFFFFFC;
                                    continue;
                                }
                            }
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) = (generic32_t) var_287;
                            var_457 = var_180;
                            var_458 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                            var_459 = var_187;
                        }
                        generic64_t var_2042;
                        var_2042 = var_458 + 4;
                        var_460 = var_189 > var_2042 ? var_2042 : var_189;
                        var_461 = var_457;
                        var_462 = var_459;
                    }
                    var_230 = var_460;
                    var_229 = var_461;
                    var_228 = var_462;
                    var_288 = var_230 - 4;
                    var_451 = 0;
                    while (true) {
                        var_234 = var_451;
                        var_289 = var_234 * -4;
                        var_300 = var_230 + var_289;
                        var_299 = var_300 > var_228;
                        if (var_299) {
                            var_451 = var_234 + 1;
                            if (*(generic32_t *) (var_288 + var_289) == 0) {
                                continue;
                            }
                        }
                        break;
                    }
                    var_455 = var_263;
                    if (var_271) {
                        var_298 = var_263 == 0 ? 1 : var_263;
                        var_297 = var_229 << 32;
                        if (var_298 << 32 <= var_297 | (generic32_t) var_229 < 4294967292) {
                            generic32_t var_2043;
                            var_2043 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 - 2;
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 = var_2043;
                            var_467 = var_2043;
                            var_468 = var_298 + 4294967295;
                        } else {
                            generic32_t var_2044;
                            var_2044 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 - 1;
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 = var_2044;
                            var_467 = var_2044;
                            var_468 = var_298 - (var_229 + 1 & 0xFFFFFFFF);
                        }
                        var_7 = var_467;
                        var_6 = var_468;
                        var_455 = var_6 & 0xFFFFFFFF;
                        if ((*(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_4.unnamed_field_1 & 0x8) == '\000') {
                            var_504 = 9;
                            var_222 = *(generic32_t *) (var_300 - 4);
                            var_504 = 9;
                            if ((var_299) && (!(var_222 == 0))) {
                                var_262 = (generic64_t) var_222;
                                var_509 = 10;
                                var_510 = 0;
                                while (true) {
                                    var_221 = var_509;
                                    var_220 = var_510;
                                    var_504 = var_220;
                                    if (!(var_262 % var_221 == 0)) {
                                        break;
                                    }
                                    var_509 = var_221 * 10 & 0xFFFFFFFC;
                                    var_510 = var_220 + 1 & 0xFFFFFFFF;
                                    continue;
                                }
                            }
                            generic64_t var_2045;
                            var_2045 = var_6 << 32 >> 32;
                            generic64_t var_2046;
                            var_2046 = (var_300 - ((generic64_t) &stack.unnamed_field_at_offset_0 + 7512) >> 2) * 9 - 9 + ((var_7 & 0xFFFFFFDF) == 70 ? 0 : var_297 >> 32) - (var_504 << 32 >> 32);
                            generic64_t var_2047;
                            var_2047 = var_2046 > 0 ? var_2046 : 0;
                            var_455 = var_2047 > var_2045 ? var_2045 : var_2047;
                        }
                    }
                    var_231 = var_455;
                    generic32_t var_2048;
                    var_2048 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) & 0x8;
                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_0 = var_2048;
                    generic32_t var_2049;
                    var_2049 = var_2048 | (generic32_t) var_231;
                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = var_2049;
                    var_116 = var_231 + ((generic64_t) var_2049 != 0) + 1;
                    generic32_t var_2050;
                    var_2050 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 | 0x20;
                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_48.unnamed_field_0 = var_2050;
                    if (var_2050 == 102) {
                        uint32_t var_2051 = compute_all_logicl((generic32_t) var_229, 0);
                        var_466 = ((var_2051 >> 4 ^ var_2051) & 0xC0) == 0 ? var_229 : 0;
                    } else {
                        var_115 = var_229 << 32 >> 63;
                        var_114 = fmt_u((prefix_uintmax_t) ((var_115 ^ var_229) - var_115 << 32 >> 32), (int8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_18);
                        var_113 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_19 - (generic64_t) var_114;
                        var_463 = 0;
                        while (true) {
                            var_227 = var_463;
                            var_111 = (generic64_t) var_114 - var_227;
                            uint32_t var_2052 = compute_all_decq(var_113 + var_227, (generic64_t) (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 < var_111);
                            if (((var_2052 >> 4 ^ var_2052) & 0xC0) == 0) {
                                break;
                            }
                            *(generic8_t *) ((generic64_t) var_114 + ~var_227) = '0';
                            var_463 = var_227 + 1;
                            continue;
                        }
                        generic64_t var_2053;
                        var_2053 = var_111 - 2;
                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = var_2053;
                        generic8_t var_2054;
                        var_2054 = *(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_2;
                        *(generic8_t *) (var_111 - 1) = ((generic8_t) var_115 & 0x2) + '+';
                        *(generic8_t *) var_2053 = var_2054;
                        var_466 = (generic64_t) &stack.unnamed_field_at_offset_0 + 4294967387 - *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                    }
                    generic32_t var_2055;
                    var_2055 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 + (generic32_t) (var_116 + var_466);
                    generic32_t var_2056;
                    var_2056 = *(generic32_t *) &stack.unnamed_field_at_offset_0;
                    generic32_t var_2057;
                    var_2057 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 = var_2055;
                    pad((struct_12231053618952106340 *) (generic64_t) var_2055, (generic64_t) var_2056, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (generic64_t) var_2057);
                    out(f, (int8_t const *) var_282, (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0);
                    pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1, (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) ((generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) ^ 0x10000));
                    if (*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_48.unnamed_field_0 == 102) {
                        var_286 = (generic64_t) &stack.unnamed_field_at_offset_0 + 7512 > var_228 ? var_228 : (generic64_t) &stack.unnamed_field_at_offset_0 + 7512;
                        var_285 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 91;
                        var_505 = 0;
                        while (true) {
                            var_255 = var_505;
                            var_261 = var_286 + (var_255 << 2);
                            if (var_261 > (generic64_t) &stack.unnamed_field_at_offset_0 + 7512) {
                                break;
                            }
                            var_265 = fmt_u((prefix_uintmax_t) (generic64_t) *(generic32_t *) var_261, (int8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_8.unnamed_field_at_offset_1);
                            if ((var_255 & 0x3FFFFFFFFFFFFFFF) == 0) {
                                var_520 = var_265;
                                if ((generic64_t) var_265 == (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0) {
                                    *(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_13.unnamed_field_at_offset_8.unnamed_field_at_offset_0 = '0';
                                    var_520 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_13.unnamed_field_at_offset_8.unnamed_field_at_offset_0;
                                }
                            } else {
                                var_518 = 0;
                                while (true) {
                                    var_213 = var_518;
                                    if (!((generic64_t) var_265 - var_213 > (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0)) {
                                        break;
                                    }
                                    *(generic8_t *) ((generic64_t) var_265 + ~var_213) = '0';
                                    var_518 = var_213 + 1;
                                    continue;
                                }
                                uint64_t var_2058 = llvm_usub_sat_i64(var_265, var_285);
                                var_520 = (generic64_t) var_265 - var_2058;
                            }
                            generic64_t var_2059;
                            var_2059 = var_520;
                            out(f, (int8_t const *) var_2059, (size_t) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 - var_2059));
                            var_505 = var_255 + 1;
                            continue;
                        }
                        var_515 = 0;
                        if (!(*(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) == 0)) {
                            var_267 = ((generic64_t) &stack.unnamed_field_at_offset_0 + 7513 < var_286 - 3 ? 0 : (generic64_t) &stack.unnamed_field_at_offset_0 + 7516 - var_286 & 0xFFFFFFFFFFFFFFFC) + var_286;
                            out(f, (int8_t const *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1171), (size_t) 1);
                            var_516 = 0;
                            var_517 = var_231;
                            while (true) {
                                var_215 = var_516;
                                var_214 = var_517;
                                var_112 = var_267 + (var_215 << 2);
                                var_515 = var_214;
                                if (var_112 < var_300) {
                                    var_277 = (generic32_t) var_214;
                                    uint32_t var_2060 = compute_all_logicl(var_277, 0);
                                    var_515 = var_214;
                                    if (((var_2060 >> 4 ^ var_2060) & 0xC0) == 0) {
                                        var_276 = fmt_u((prefix_uintmax_t) (generic64_t) *(generic32_t *) var_112, (int8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_8.unnamed_field_at_offset_1);
                                        var_522 = 0;
                                        while (true) {
                                            var_211 = var_522;
                                            if (!((generic64_t) var_276 - var_211 > (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0)) {
                                                break;
                                            }
                                            *(generic8_t *) ((generic64_t) var_276 + ~var_211) = '0';
                                            var_522 = var_211 + 1;
                                            continue;
                                        }
                                        uint64_t var_2061 = llvm_usub_sat_i64(var_276, var_285);
                                        out(f, (int8_t const *) ((generic64_t) var_276 - var_2061), (size_t) (var_277 > 9 ? 9 : var_214 << 32 >> 32));
                                        var_516 = var_215 + 1;
                                        var_517 = var_214 + 4294967287 & 0xFFFFFFFF;
                                        continue;
                                    }
                                }
                                break;
                            }
                        }
                        pad((struct_12231053618952106340 *) 9, var_515 + 9 & 0xFFFFFFFF, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                    } else {
                        var_284 = var_299 ? var_300 : var_228 + 4;
                        var_283 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 91;
                        var_511 = 0;
                        var_512 = var_231;
                        while (true) {
                            var_219 = var_511;
                            var_218 = var_512;
                            var_264 = var_228 + (var_219 << 2);
                            if (!(var_264 < var_284 & (generic32_t) var_218 > 4294967295)) {
                                break;
                            }
                            int8_t *var_2062;
                            var_2062 = fmt_u((prefix_uintmax_t) (generic64_t) *(generic32_t *) var_264, (int8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_8.unnamed_field_at_offset_1);
                            var_521 = var_2062;
                            if ((generic64_t) var_2062 == (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0) {
                                *(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_13.unnamed_field_at_offset_8.unnamed_field_at_offset_0 = '0';
                                var_521 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_13.unnamed_field_at_offset_8.unnamed_field_at_offset_0;
                            }
                            var_212 = var_521;
                            if ((var_219 & 0x3FFFFFFFFFFFFFFF) == 0) {
                                *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32) = var_212 + 1;
                                out(f, (int8_t const *) var_212, (size_t) 1);
                                if (!((var_218 & 0xFFFFFFFF | (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_0) == 0)) {
                                    out(f, (int8_t const *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1171), (size_t) 1);
                                }
                            } else {
                                var_523 = 0;
                                while (true) {
                                    var_210 = var_523;
                                    if (!(var_212 - var_210 > (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0)) {
                                        break;
                                    }
                                    *(generic8_t *) (var_212 + ~var_210) = '0';
                                    var_523 = var_210 + 1;
                                    continue;
                                }
                                uint64_t var_2063 = llvm_usub_sat_i64(var_212, var_283);
                                *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32) = var_212 - var_2063;
                            }
                            generic64_t var_2064;
                            var_2064 = var_218 << 32 >> 32;
                            generic64_t var_2065;
                            var_2065 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32);
                            generic64_t var_2066;
                            var_2066 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_3.unnamed_field_at_offset_9.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 - var_2065;
                            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 48) = var_2066;
                            out(f, (int8_t const *) var_2065, (size_t) (var_2064 > var_2066 ? var_2066 : var_2064));
                            var_511 = var_219 + 1;
                            var_512 = var_218 - *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 48) & 0xFFFFFFFF;
                            continue;
                        }
                        pad((struct_12231053618952106340 *) 18, var_218 + 18 & 0xFFFFFFFF, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                        generic64_t var_2067;
                        var_2067 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                        out(f, (int8_t const *) var_2067, (size_t) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 - var_2067));
                    }
                    pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1, (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) ((generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) ^ 0x2000));
                    generic64_t var_2068;
                    var_2068 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0;
                    generic32_t var_2069;
                    var_2069 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1;
                    var_327 = (generic64_t) &((struct_12231053618952106340 *) var_2069)->unnamed_field_at_offset_0.unnamed_field_19 << 32 < var_2068 << 32 ? var_2068 : (generic64_t) &((struct_12231053618952106340 *) var_2069)->unnamed_field_at_offset_0.unnamed_field_19;
                    return (int32_t) (var_327 & 0xFFFFFFFF);
                }
                helper_fmov_STN_ST0_wrapper(NULL, 1, var_91, var_90, var_89, var_88, var_13, var_12, var_11, var_57, var_56, var_55, var_54, var_10, var_9, var_8, var_93, var_92, var_125, &var_1627, &var_1628, &var_1629, &var_1630, &var_1631, &var_1632, &var_1633, &var_1634, &var_1635, &var_1636, &var_1637, &var_1638, &var_1639, &var_1640, &var_1641, &var_1642);
                helper_fpop_wrapper(NULL, var_125, &var_1618, &var_1619, &var_1620, &var_1621, &var_1622, &var_1623, &var_1624, &var_1625, &var_1626);
                var_295 = (*(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_2 & 0x20) == '\000' ? var_282 : var_282 + 9;
                generic32_t var_2070;
                var_2070 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0;
                helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1208), var_94, var_1912, var_1913, var_1626, &var_1592, &var_1593, &var_1594, &var_1595, &var_1596, &var_1597, &var_1598, &var_1599, &var_1600, &var_1601, &var_1602, &var_1603, &var_1604, &var_1605, &var_1606, &var_1607, &var_1608, &var_1609, &var_1610, &var_1611, &var_1612, &var_1613, &var_1614, &var_1615, &var_1616, &var_1617);
                var_14 = var_1592;
                var_251 = var_1593;
                var_250 = var_1594;
                var_249 = var_1595;
                var_51 = var_1596;
                var_50 = var_1597;
                var_49 = var_1598;
                var_48 = var_1599;
                var_47 = var_1600;
                var_46 = var_1601;
                var_21 = var_1602;
                var_20 = var_1603;
                var_19 = var_1604;
                var_18 = var_1605;
                var_17 = var_1606;
                var_16 = var_1607;
                var_15 = var_1616;
                var_53 = var_1617;
                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0 = var_2070 + 2;
                if ((generic32_t) p > 14) {
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_251, var_250, var_249, var_51, var_50, var_49, var_48, var_47, var_46, var_21, var_20, var_19, var_18, var_17, var_16, var_15, var_53, &var_1572, &var_1573, &var_1574, &var_1575, &var_1576, &var_1577, &var_1578, &var_1579, &var_1580, &var_1581, &var_1582, &var_1583, &var_1584, &var_1585, &var_1586, &var_1587);
                    helper_fpop_wrapper(NULL, var_53, &var_1563, &var_1564, &var_1565, &var_1566, &var_1567, &var_1568, &var_1569, &var_1570, &var_1571);
                    var_335 = var_1578;
                    var_336 = var_1579;
                    var_337 = var_1580;
                    var_338 = var_1581;
                    var_339 = var_1582;
                    var_340 = var_1583;
                    var_341 = var_1584;
                    var_342 = var_1585;
                    var_343 = var_1586;
                    var_344 = var_1587;
                    var_345 = var_1571;
                    var_328 = var_1572;
                    var_329 = var_1573;
                    var_330 = var_1574;
                    var_331 = var_14;
                    var_332 = var_1575;
                    var_333 = var_1576;
                    var_334 = var_1577;
                } else {
                    helper_flds_ST0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1192), var_14, var_1912, var_1913, var_53, var_1521, var_1523, var_1525, var_1527, var_1529, var_1531, var_1533, var_1535, var_1537, var_1539, var_1541, var_1543, var_1545, var_1547, var_1549, var_1551, &var_1552, &var_1553, &var_1554, &var_1555, &var_1556, &var_1557, &var_1558, &var_1559, var_1561, &var_1562);
                    var_248 = var_1562;
                    var_346 = var_1523;
                    var_347 = var_1525;
                    var_348 = var_1527;
                    var_349 = var_1521;
                    var_350 = var_1529;
                    var_351 = var_1531;
                    var_352 = var_1533;
                    var_353 = var_1535;
                    var_354 = var_1537;
                    var_355 = var_1539;
                    var_356 = var_1541;
                    var_357 = var_1543;
                    var_358 = var_1545;
                    var_359 = var_1547;
                    var_360 = var_1549;
                    var_361 = var_1551;
                    var_362 = 15 - var_1907;
                    var_363 = var_1561;
                    while (true) {
                        generic64_t *var_2071;
                        var_2071 = var_346;
                        generic64_t *var_2072;
                        var_2072 = var_347;
                        generic64_t *var_2073;
                        var_2073 = var_348;
                        generic8_t *var_2074;
                        var_2074 = var_349;
                        generic64_t *var_2075;
                        var_2075 = var_350;
                        generic64_t *var_2076;
                        var_2076 = var_351;
                        generic64_t *var_2077;
                        var_2077 = var_352;
                        generic64_t *var_2078;
                        var_2078 = var_353;
                        generic64_t *var_2079;
                        var_2079 = var_354;
                        generic16_t *var_2080;
                        var_2080 = var_355;
                        generic16_t *var_2081;
                        var_2081 = var_356;
                        generic16_t *var_2082;
                        var_2082 = var_357;
                        generic16_t *var_2083;
                        var_2083 = var_358;
                        generic16_t *var_2084;
                        var_2084 = var_359;
                        generic16_t *var_2085;
                        var_2085 = var_360;
                        generic16_t *var_2086;
                        var_2086 = var_361;
                        var_247 = *var_363;
                        var_246 = *var_2086;
                        var_245 = *var_2085;
                        var_244 = *var_2084;
                        var_243 = *var_2083;
                        var_242 = *var_2082;
                        var_241 = *var_2081;
                        var_240 = *var_2080;
                        var_239 = *var_2079;
                        var_238 = *var_2078;
                        var_71 = *var_2077;
                        var_70 = *var_2076;
                        var_69 = *var_2075;
                        var_68 = *var_2074;
                        var_67 = *var_2073;
                        var_66 = *var_2072;
                        var_65 = *var_2071;
                        var_121 = var_362 & 0xFFFFFFFF;
                        if (var_121 == 0) {
                            break;
                        }
                        helper_fmov_FT0_STN_wrapper(NULL, 1, var_65, var_66, var_67, var_69, var_70, var_71, var_238, var_239, var_240, var_241, var_242, var_243, var_244, var_245, var_246, var_247, var_248, &var_1389, &var_1390);
                        helper_fmul_ST0_FT0_wrapper(NULL, var_1908, var_68, var_1910, var_65, var_66, var_67, var_1911, var_1912, var_69, var_70, var_71, var_238, var_239, var_240, var_241, var_242, var_243, var_244, var_245, var_246, var_247, var_1389, var_1390, var_248, var_1915, var_1356, var_1358, var_1360, var_1362, var_1364, var_1366, var_1368, var_1370, var_1372, var_1374, var_1376, var_1378, var_1380, var_1382, var_1384, var_1386, var_1388);
                        var_346 = var_1358;
                        var_347 = var_1360;
                        var_348 = var_1362;
                        var_349 = var_1356;
                        var_350 = var_1364;
                        var_351 = var_1366;
                        var_352 = var_1368;
                        var_353 = var_1370;
                        var_354 = var_1372;
                        var_355 = var_1374;
                        var_356 = var_1376;
                        var_357 = var_1378;
                        var_358 = var_1380;
                        var_359 = var_1382;
                        var_360 = var_1384;
                        var_361 = var_1386;
                        var_362 = var_121 + 4294967295;
                        var_363 = var_1388;
                        continue;
                    }
                    helper_fmov_STN_ST0_wrapper(NULL, 1, var_65, var_66, var_67, var_69, var_70, var_71, var_238, var_239, var_240, var_241, var_242, var_243, var_244, var_245, var_246, var_247, var_248, &var_1400, &var_1401, &var_1402, &var_1403, &var_1404, &var_1405, &var_1406, &var_1407, &var_1408, &var_1409, &var_1410, &var_1411, &var_1412, &var_1413, &var_1414, &var_1415);
                    var_236 = var_1400;
                    var_148 = var_1401;
                    var_147 = var_1402;
                    var_59 = var_1403;
                    var_58 = var_1404;
                    var_137 = var_1405;
                    var_136 = var_1406;
                    var_135 = var_1407;
                    var_134 = var_1408;
                    var_133 = var_1409;
                    var_132 = var_1410;
                    var_131 = var_1411;
                    var_130 = var_1412;
                    var_146 = var_1413;
                    var_145 = var_1414;
                    var_144 = var_1415;
                    helper_fpop_wrapper(NULL, var_248, &var_1391, &var_1392, &var_1393, &var_1394, &var_1395, &var_1396, &var_1397, &var_1398, &var_1399);
                    var_143 = var_1399;
                    if (*(generic8_t *) var_295 == '-') {
                        helper_fxchg_ST0_STN_wrapper(NULL, 1, var_236, var_148, var_147, var_59, var_58, var_137, var_136, var_135, var_134, var_133, var_132, var_131, var_130, var_146, var_145, var_144, var_143, &var_1128, &var_1129, &var_1130, &var_1131, &var_1132, &var_1133, &var_1134, &var_1135, &var_1136, &var_1137, &var_1138, &var_1139, &var_1140, &var_1141, &var_1142, &var_1143);
                        helper_fchs_ST0_wrapper(NULL, var_1128, var_1129, var_1130, var_1131, var_1132, var_1133, var_1134, var_1135, var_1136, var_1137, var_1138, var_1139, var_1140, var_1141, var_1142, var_1143, var_143, &var_1112, &var_1113, &var_1114, &var_1115, &var_1116, &var_1117, &var_1118, &var_1119, &var_1120, &var_1121, &var_1122, &var_1123, &var_1124, &var_1125, &var_1126, &var_1127);
                        generic64_t var_2087;
                        var_2087 = var_1112;
                        generic64_t var_2088;
                        var_2088 = var_1113;
                        generic64_t var_2089;
                        var_2089 = var_1114;
                        generic64_t var_2090;
                        var_2090 = var_1115;
                        generic64_t var_2091;
                        var_2091 = var_1116;
                        generic64_t var_2092;
                        var_2092 = var_1117;
                        generic64_t var_2093;
                        var_2093 = var_1118;
                        generic64_t var_2094;
                        var_2094 = var_1119;
                        generic16_t var_2095;
                        var_2095 = var_1120;
                        generic16_t var_2096;
                        var_2096 = var_1121;
                        generic16_t var_2097;
                        var_2097 = var_1122;
                        generic16_t var_2098;
                        var_2098 = var_1123;
                        generic16_t var_2099;
                        var_2099 = var_1124;
                        generic16_t var_2100;
                        var_2100 = var_1125;
                        generic16_t var_2101;
                        var_2101 = var_1126;
                        generic16_t var_2102;
                        var_2102 = var_1127;
                        helper_fmov_FT0_STN_wrapper(NULL, 1, var_2087, var_2088, var_2089, var_2090, var_2091, var_2092, var_2093, var_2094, var_2095, var_2096, var_2097, var_2098, var_2099, var_2100, var_2101, var_2102, var_143, &var_1110, &var_1111);
                        helper_fsub_ST0_FT0_wrapper(NULL, var_1908, var_68, var_1910, var_2087, var_2088, var_2089, var_1911, var_1912, var_2090, var_2091, var_2092, var_2093, var_2094, var_2095, var_2096, var_2097, var_2098, var_2099, var_2100, var_2101, var_2102, var_1110, var_1111, var_143, var_1915, &var_1093, &var_1094, &var_1095, &var_1096, &var_1097, &var_1098, &var_1099, &var_1100, &var_1101, &var_1102, &var_1103, &var_1104, &var_1105, &var_1106, &var_1107, &var_1108, &var_1109);
                        helper_fadd_STN_ST0_wrapper(NULL, 1, var_1908, var_1093, var_1910, var_1094, var_1095, var_1096, var_1911, var_1912, var_1097, var_1098, var_1099, var_1100, var_1101, var_1102, var_1103, var_1104, var_1105, var_1106, var_1107, var_1108, var_1109, var_143, var_1915, &var_1076, &var_1077, &var_1078, &var_1079, &var_1080, &var_1081, &var_1082, &var_1083, &var_1084, &var_1085, &var_1086, &var_1087, &var_1088, &var_1089, &var_1090, &var_1091, &var_1092);
                        helper_fpop_wrapper(NULL, var_143, &var_1067, &var_1068, &var_1069, &var_1070, &var_1071, &var_1072, &var_1073, &var_1074, &var_1075);
                        generic32_t var_2103;
                        var_2103 = var_1075;
                        helper_fchs_ST0_wrapper(NULL, var_1077, var_1078, var_1079, var_1080, var_1081, var_1082, var_1083, var_1084, var_1085, var_1086, var_1087, var_1088, var_1089, var_1090, var_1091, var_1092, var_2103, &var_1051, &var_1052, &var_1053, &var_1054, &var_1055, &var_1056, &var_1057, &var_1058, &var_1059, &var_1060, &var_1061, &var_1062, &var_1063, &var_1064, &var_1065, &var_1066);
                        var_335 = var_1057;
                        var_336 = var_1058;
                        var_337 = var_1059;
                        var_338 = var_1060;
                        var_339 = var_1061;
                        var_340 = var_1062;
                        var_341 = var_1063;
                        var_342 = var_1064;
                        var_343 = var_1065;
                        var_344 = var_1066;
                        var_345 = var_2103;
                        var_328 = var_1051;
                        var_329 = var_1052;
                        var_330 = var_1053;
                        var_331 = var_1076;
                        var_332 = var_1054;
                        var_333 = var_1055;
                        var_334 = var_1056;
                    } else {
                        helper_fadd_STN_ST0_wrapper(NULL, 1, var_1908, var_68, var_1910, var_236, var_148, var_147, var_1911, var_1912, var_59, var_58, var_137, var_136, var_135, var_134, var_133, var_132, var_131, var_130, var_146, var_145, var_144, var_143, var_1915, &var_1034, &var_1035, &var_1036, &var_1037, &var_1038, &var_1039, &var_1040, &var_1041, &var_1042, &var_1043, &var_1044, &var_1045, &var_1046, &var_1047, &var_1048, &var_1049, &var_1050);
                        helper_fsub_STN_ST0_wrapper(NULL, 1, var_1908, var_1034, var_1910, var_1035, var_1036, var_1037, var_1911, var_1912, var_1038, var_1039, var_1040, var_1041, var_1042, var_1043, var_1044, var_1045, var_1046, var_1047, var_1048, var_1049, var_1050, var_143, var_1915, &var_1017, &var_1018, &var_1019, &var_1020, &var_1021, &var_1022, &var_1023, &var_1024, &var_1025, &var_1026, &var_1027, &var_1028, &var_1029, &var_1030, &var_1031, &var_1032, &var_1033);
                        helper_fpop_wrapper(NULL, var_143, &var_1008, &var_1009, &var_1010, &var_1011, &var_1012, &var_1013, &var_1014, &var_1015, &var_1016);
                        var_335 = var_1024;
                        var_336 = var_1025;
                        var_337 = var_1026;
                        var_338 = var_1027;
                        var_339 = var_1028;
                        var_340 = var_1029;
                        var_341 = var_1030;
                        var_342 = var_1031;
                        var_343 = var_1032;
                        var_344 = var_1033;
                        var_345 = var_1016;
                        var_328 = var_1018;
                        var_329 = var_1019;
                        var_330 = var_1020;
                        var_331 = var_1017;
                        var_332 = var_1021;
                        var_333 = var_1022;
                        var_334 = var_1023;
                    }
                }
                var_191 = var_331;
                generic32_t var_2104;
                var_2104 = var_345;
                generic64_t var_2105;
                var_2105 = (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72);
                var_273 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 91;
                generic64_t var_2106;
                var_2106 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0 + 16;
                helper_fstt_ST0_wrapper(NULL, var_2106, var_328, var_329, var_330, var_332, var_333, var_334, var_335, var_336, var_337, var_338, var_339, var_340, var_341, var_342, var_343, var_344, var_2104);
                helper_fpop_wrapper(NULL, var_2104, &var_1491, &var_1492, &var_1493, &var_1494, &var_1495, &var_1496, &var_1497, &var_1498, &var_1499);
                generic64_t var_2107;
                var_2107 = var_2105 << 32 >> 63;
                int8_t *var_2108;
                var_2108 = fmt_u((prefix_uintmax_t) ((var_2107 ^ var_2105) - var_2107 << 32 >> 32), (int8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_18);
                helper_fldt_ST0_wrapper(NULL, var_2106, var_1499, &var_1466, &var_1467, &var_1468, &var_1469, &var_1470, &var_1471, &var_1472, &var_1473, &var_1474, &var_1475, &var_1476, &var_1477, &var_1478, &var_1479, &var_1480, &var_1481, &var_1482, &var_1483, &var_1484, &var_1485, &var_1486, &var_1487, &var_1488, &var_1489, &var_1490);
                helper_fpush_wrapper(NULL, var_1490, &var_1457, &var_1458, &var_1459, &var_1460, &var_1461, &var_1462, &var_1463, &var_1464, &var_1465);
                generic32_t var_2109;
                var_2109 = var_1465;
                helper_fldz_ST0_wrapper(NULL, var_2109, &var_1441, &var_1442, &var_1443, &var_1444, &var_1445, &var_1446, &var_1447, &var_1448, &var_1449, &var_1450, &var_1451, &var_1452, &var_1453, &var_1454, &var_1455, &var_1456);
                helper_fldt_ST0_wrapper(NULL, (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1248, var_2109, &var_1416, &var_1417, &var_1418, &var_1419, &var_1420, &var_1421, &var_1422, &var_1423, &var_1424, &var_1425, &var_1426, &var_1427, &var_1428, &var_1429, &var_1430, &var_1431, &var_1432, &var_1433, &var_1434, &var_1435, &var_1436, &var_1437, &var_1438, &var_1439, &var_1440);
                var_142 = var_1416;
                var_141 = var_1417;
                var_140 = var_1418;
                var_139 = var_1419;
                var_138 = var_1420;
                var_83 = var_1421;
                var_82 = var_1422;
                var_81 = var_1423;
                var_80 = var_1424;
                var_79 = var_1425;
                var_78 = var_1426;
                var_77 = var_1427;
                var_76 = var_1428;
                var_75 = var_1429;
                var_74 = var_1430;
                var_73 = var_1439;
                var_87 = var_1440;
                var_381 = var_2108;
                if ((generic64_t) var_2108 == (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0) {
                    *(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_18 = '0';
                    var_381 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_19;
                }
                generic64_t var_2110;
                var_2110 = var_381;
                helper_fxchg_ST0_STN_wrapper(NULL, 2, var_142, var_141, var_140, var_139, var_138, var_83, var_82, var_81, var_80, var_79, var_78, var_77, var_76, var_75, var_74, var_73, var_87, &var_1339, &var_1340, &var_1341, &var_1342, &var_1343, &var_1344, &var_1345, &var_1346, &var_1347, &var_1348, &var_1349, &var_1350, &var_1351, &var_1352, &var_1353, &var_1354);
                generic64_t var_2111;
                var_2111 = (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72);
                generic8_t var_2112;
                var_2112 = *(generic8_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_2;
                generic64_t var_2113;
                var_2113 = (generic64_t) var_2112;
                var_107 = var_2110 - 2;
                var_281 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 & 0xFFFFFFFFFFFFFF00 | 0x1;
                generic32_t var_2114;
                var_2114 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
                var_280 = var_2113 & 0x20;
                generic32_t var_2115;
                var_2115 = var_2114 & 0x8;
                var_279 = (generic64_t) var_2115;
                *(generic8_t *) (var_2110 - 1) = ((generic8_t) (var_2111 << 32 >> 63) & 0x2) + '+';
                *(generic8_t *) var_107 = var_2112 + '\017';
                uint32_t var_2116 = helper_fnstcw_wrapper(NULL, var_1916);
                generic16_t var_2117;
                var_2117 = (generic16_t) var_2116;
                *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 62) = var_2117;
                *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 60) = var_2117 & 0xFF | (var_2117 & 0xF300 | 0xC00);
                var_278 = var_2115 != 0;
                var_417 = var_1353;
                var_418 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0;
                var_419 = var_72 & 0xFFFFFFFFFFFFFF00 | var_2113;
                var_420 = var_1354;
                var_421 = var_87;
                var_422 = var_1916;
                var_402 = var_1339;
                var_403 = var_1340;
                var_404 = var_1341;
                var_405 = var_191;
                var_406 = var_1342;
                var_407 = var_1343;
                var_408 = var_1344;
                var_409 = var_1345;
                var_410 = var_1346;
                var_411 = var_1347;
                var_412 = var_1348;
                var_413 = var_1349;
                var_414 = var_1350;
                var_415 = var_1351;
                var_416 = var_1352;
                while (true) {
                    var_179 = var_418;
                    helper_fpush_wrapper(NULL, var_421, &var_1214, &var_1215, &var_1216, &var_1217, &var_1218, &var_1219, &var_1220, &var_1221, &var_1222);
                    generic32_t var_2118;
                    var_2118 = var_1222;
                    helper_fmov_ST0_STN_wrapper(NULL, 1, var_402, var_403, var_404, var_406, var_407, var_408, var_409, var_410, var_411, var_412, var_413, var_414, var_415, var_416, var_417, var_420, var_2118, &var_1198, &var_1199, &var_1200, &var_1201, &var_1202, &var_1203, &var_1204, &var_1205, &var_1206, &var_1207, &var_1208, &var_1209, &var_1210, &var_1211, &var_1212, &var_1213);
                    generic64_t var_2119;
                    var_2119 = var_1198;
                    generic64_t var_2120;
                    var_2120 = var_1199;
                    generic64_t var_2121;
                    var_2121 = var_1200;
                    generic64_t var_2122;
                    var_2122 = var_1201;
                    generic64_t var_2123;
                    var_2123 = var_1202;
                    generic64_t var_2124;
                    var_2124 = var_1203;
                    generic64_t var_2125;
                    var_2125 = var_1204;
                    generic64_t var_2126;
                    var_2126 = var_1205;
                    generic16_t var_2127;
                    var_2127 = var_1206;
                    generic16_t var_2128;
                    var_2128 = var_1207;
                    generic16_t var_2129;
                    var_2129 = var_1208;
                    generic16_t var_2130;
                    var_2130 = var_1209;
                    generic16_t var_2131;
                    var_2131 = var_1210;
                    generic16_t var_2132;
                    var_2132 = var_1211;
                    generic16_t var_2133;
                    var_2133 = var_1212;
                    generic16_t var_2134;
                    var_2134 = var_1213;
                    helper_fldcw_wrapper(NULL, (generic32_t) *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 60), var_422, &var_1195, &var_1196, &var_1197);
                    uint32_t var_2135 = helper_fistl_ST0_wrapper(NULL, var_405, var_2119, var_2120, var_2121, var_2122, var_2123, var_2124, var_2125, var_2126, var_2127, var_2128, var_2129, var_2130, var_2131, var_2132, var_2133, var_2134, var_2118, var_1196, &var_1194);
                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 = var_2135;
                    helper_fpop_wrapper(NULL, var_2118, &var_1185, &var_1186, &var_1187, &var_1188, &var_1189, &var_1190, &var_1191, &var_1192, &var_1193);
                    var_30 = var_1193;
                    helper_fldcw_wrapper(NULL, (generic32_t) *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 62), var_1197, &var_1182, &var_1183, &var_1184);
                    generic8_t var_2136;
                    var_2136 = var_1182;
                    generic8_t var_2137;
                    var_2137 = var_1183;
                    var_29 = var_1184;
                    helper_fildl_FT0_wrapper(NULL, *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1, &var_1180, &var_1181);
                    helper_fsub_ST0_FT0_wrapper(NULL, var_1908, var_1194, var_2136, var_2119, var_2120, var_2121, var_1911, var_1912, var_2122, var_2123, var_2124, var_2125, var_2126, var_2127, var_2128, var_2129, var_2130, var_2131, var_2132, var_2133, var_2134, var_1180, var_1181, var_30, var_2137, &var_1163, &var_1164, &var_1165, &var_1166, &var_1167, &var_1168, &var_1169, &var_1170, &var_1171, &var_1172, &var_1173, &var_1174, &var_1175, &var_1176, &var_1177, &var_1178, &var_1179);
                    generic64_t var_2138;
                    var_2138 = var_1164;
                    generic64_t var_2139;
                    var_2139 = var_1165;
                    generic64_t var_2140;
                    var_2140 = var_1166;
                    generic64_t var_2141;
                    var_2141 = var_1167;
                    generic64_t var_2142;
                    var_2142 = var_1168;
                    generic64_t var_2143;
                    var_2143 = var_1169;
                    generic64_t var_2144;
                    var_2144 = var_1170;
                    generic64_t var_2145;
                    var_2145 = var_1171;
                    generic16_t var_2146;
                    var_2146 = var_1172;
                    generic16_t var_2147;
                    var_2147 = var_1173;
                    generic16_t var_2148;
                    var_2148 = var_1174;
                    generic16_t var_2149;
                    var_2149 = var_1175;
                    generic16_t var_2150;
                    var_2150 = var_1176;
                    generic16_t var_2151;
                    var_2151 = var_1177;
                    generic16_t var_2152;
                    var_2152 = var_1178;
                    generic16_t var_2153;
                    var_2153 = var_1179;
                    generic64_t var_2154;
                    var_2154 = (generic64_t) *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.xdigits;
                    var_275 = var_419 & 0xFFFFFF00;
                    var_274 = var_179 + 1;
                    generic64_t var_2155;
                    var_2155 = var_275 | var_2154 | var_280;
                    helper_fmov_FT0_STN_wrapper(NULL, 2, var_2138, var_2139, var_2140, var_2141, var_2142, var_2143, var_2144, var_2145, var_2146, var_2147, var_2148, var_2149, var_2150, var_2151, var_2152, var_2153, var_30, &var_1161, &var_1162);
                    helper_fmul_ST0_FT0_wrapper(NULL, var_1908, var_1163, var_2136, var_2138, var_2139, var_2140, var_1911, var_1912, var_2141, var_2142, var_2143, var_2144, var_2145, var_2146, var_2147, var_2148, var_2149, var_2150, var_2151, var_2152, var_2153, var_1161, var_1162, var_30, var_2137, &var_1144, &var_1145, &var_1146, &var_1147, &var_1148, &var_1149, &var_1150, &var_1151, &var_1152, &var_1153, &var_1154, &var_1155, &var_1156, &var_1157, &var_1158, &var_1159, &var_1160);
                    var_28 = var_1144;
                    var_27 = var_1145;
                    var_26 = var_1146;
                    var_25 = var_1147;
                    var_206 = var_1148;
                    var_205 = var_1149;
                    var_204 = var_1150;
                    var_203 = var_1151;
                    var_202 = var_1152;
                    var_201 = var_1153;
                    var_200 = var_1154;
                    var_199 = var_1155;
                    var_198 = var_1156;
                    var_197 = var_1157;
                    var_196 = var_1158;
                    var_195 = var_1159;
                    var_194 = var_1160;
                    *(generic8_t *) var_179 = (generic8_t) var_2155;
                    generic64_t var_2156;
                    var_2156 = var_179 - (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0;
                    var_423 = var_28;
                    var_424 = var_2156;
                    var_425 = 17;
                    var_426 = var_274;
                    var_427 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0;
                    var_428 = var_2155;
                    if (var_2156 == 0) {
                        helper_fmov_FT0_STN_wrapper(NULL, 1, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, var_194, var_30, &var_1006, &var_1007);
                        helper_fucomi_ST0_FT0_wrapper(NULL, var_28, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, 0, 17, var_273, var_1914, var_194, var_1006, var_1007, var_30, &var_1004, &var_1005);
                        var_193 = var_1004;
                        generic64_t var_2157;
                        var_2157 = var_1005;
                        generic64_t var_2158;
                        var_2158 = (var_2157 & 0x40) == 0 ? var_281 : var_275 | var_2157 >> 2 & 0x1;
                        var_122 = var_2158 & 0xFFFFFF01;
                        var_429 = var_122;
                        var_430 = 22;
                        var_431 = var_2157;
                        uint32_t var_2159 = compute_all_logicl(p, 0);
                        generic8_t var_2160;
                        var_2160 = ((var_2159 >> 4 ^ var_2159) & 0xC0) == 0;
                        var_429 = var_2160 ? var_1907 : var_279;
                        var_430 = var_2160 ? 1 : 24;
                        var_431 = (generic64_t) var_2159;
                        if (((var_2158 & 0x1) == 0) && (!(var_2160 | var_278))) {
                            helper_fmov_STN_ST0_wrapper(NULL, 0, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, var_194, var_30, &var_859, &var_860, &var_861, &var_862, &var_863, &var_864, &var_865, &var_866, &var_867, &var_868, &var_869, &var_870, &var_871, &var_872, &var_873, &var_874);
                            helper_fpop_wrapper(NULL, var_30, &var_850, &var_851, &var_852, &var_853, &var_854, &var_855, &var_856, &var_857, &var_858);
                            generic32_t var_2161;
                            var_2161 = var_858;
                            helper_fmov_STN_ST0_wrapper(NULL, 0, var_859, var_860, var_861, var_862, var_863, var_864, var_865, var_866, var_867, var_868, var_869, var_870, var_871, var_872, var_873, var_874, var_2161, &var_834, &var_835, &var_836, &var_837, &var_838, &var_839, &var_840, &var_841, &var_842, &var_843, &var_844, &var_845, &var_846, &var_847, &var_848, &var_849);
                            helper_fpop_wrapper(NULL, var_2161, &var_825, &var_826, &var_827, &var_828, &var_829, &var_830, &var_831, &var_832, &var_833);
                            generic32_t var_2162;
                            var_2162 = var_833;
                            helper_fmov_STN_ST0_wrapper(NULL, 0, var_834, var_835, var_836, var_837, var_838, var_839, var_840, var_841, var_842, var_843, var_844, var_845, var_846, var_847, var_848, var_849, var_2162, &var_809, &var_810, &var_811, &var_812, &var_813, &var_814, &var_815, &var_816, &var_817, &var_818, &var_819, &var_820, &var_821, &var_822, &var_823, &var_824);
                            helper_fpop_wrapper(NULL, var_2162, &var_800, &var_801, &var_802, &var_803, &var_804, &var_805, &var_806, &var_807, &var_808);
                            var_436 = var_274;
                            break;
                        }
                        *(generic8_t *) var_274 = '.';
                        var_423 = var_193;
                        var_424 = var_429;
                        var_425 = var_430;
                        var_426 = var_179 + 2;
                        var_427 = var_431;
                        var_428 = var_122;
                    }
                    var_192 = var_426;
                    helper_fmov_FT0_STN_wrapper(NULL, 1, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, var_194, var_30, &var_1002, &var_1003);
                    helper_fucomi_ST0_FT0_wrapper(NULL, var_423, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, var_424, var_425, var_427, var_1914, var_194, var_1002, var_1003, var_30, &var_1000, &var_1001);
                    var_417 = var_195;
                    var_418 = var_192;
                    var_419 = var_428;
                    var_420 = var_194;
                    var_421 = var_30;
                    var_422 = var_29;
                    var_402 = var_27;
                    var_403 = var_26;
                    var_404 = var_25;
                    var_405 = var_1000;
                    var_406 = var_206;
                    var_407 = var_205;
                    var_408 = var_204;
                    var_409 = var_203;
                    var_410 = var_202;
                    var_411 = var_201;
                    var_412 = var_200;
                    var_413 = var_199;
                    var_414 = var_198;
                    var_415 = var_197;
                    var_416 = var_196;
                    if (!((var_1001 & 0x44) == 64)) {
                        continue;
                    }
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_27, var_26, var_25, var_206, var_205, var_204, var_203, var_202, var_201, var_200, var_199, var_198, var_197, var_196, var_195, var_194, var_30, &var_934, &var_935, &var_936, &var_937, &var_938, &var_939, &var_940, &var_941, &var_942, &var_943, &var_944, &var_945, &var_946, &var_947, &var_948, &var_949);
                    helper_fpop_wrapper(NULL, var_30, &var_925, &var_926, &var_927, &var_928, &var_929, &var_930, &var_931, &var_932, &var_933);
                    generic32_t var_2163;
                    var_2163 = var_933;
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_934, var_935, var_936, var_937, var_938, var_939, var_940, var_941, var_942, var_943, var_944, var_945, var_946, var_947, var_948, var_949, var_2163, &var_909, &var_910, &var_911, &var_912, &var_913, &var_914, &var_915, &var_916, &var_917, &var_918, &var_919, &var_920, &var_921, &var_922, &var_923, &var_924);
                    helper_fpop_wrapper(NULL, var_2163, &var_900, &var_901, &var_902, &var_903, &var_904, &var_905, &var_906, &var_907, &var_908);
                    generic32_t var_2164;
                    var_2164 = var_908;
                    helper_fmov_STN_ST0_wrapper(NULL, 0, var_909, var_910, var_911, var_912, var_913, var_914, var_915, var_916, var_917, var_918, var_919, var_920, var_921, var_922, var_923, var_924, var_2164, &var_884, &var_885, &var_886, &var_887, &var_888, &var_889, &var_890, &var_891, &var_892, &var_893, &var_894, &var_895, &var_896, &var_897, &var_898, &var_899);
                    helper_fpop_wrapper(NULL, var_2164, &var_875, &var_876, &var_877, &var_878, &var_879, &var_880, &var_881, &var_882, &var_883);
                    var_436 = var_192;
                    break;
                }
                var_259 = var_436 - (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0;
                var_258 = (generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_0.unnamed_field_at_offset_0.unnamed_field_15.unnamed_field_at_offset_1.unnamed_field_at_offset_0 - var_107;
                if ((generic32_t) p == 0) {
                    var_443 = var_259 + var_258;
                } else {
                    var_443 = var_258 + var_1907 + 2;
                    if (var_259 - 1 > (generic64_t) p) {
                        var_443 = var_259 + var_258;
                    }
                }
                generic64_t var_2165;
                var_2165 = var_443;
                generic32_t var_2166;
                var_2166 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0;
                generic32_t var_2167;
                var_2167 = *(generic32_t *) &stack.unnamed_field_at_offset_0;
                generic32_t var_2168;
                var_2168 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
                *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = var_107;
                generic64_t var_2169;
                var_2169 = (generic64_t) var_2166 + (generic32_t) var_2165;
                pad((struct_12231053618952106340 *) var_2169, (generic64_t) var_2167, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (generic64_t) var_2168);
                out(f, (int8_t const *) var_295, (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0);
                pad((struct_12231053618952106340 *) var_2169, (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) ((generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) ^ 0x10000));
                out(f, (int8_t const *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_90.unnamed_field_2.unnamed_field_at_offset_1.unnamed_field_at_offset_0.unnamed_field_18, (size_t) var_259);
                pad((struct_12231053618952106340 *) 0, var_2165 - (var_259 + var_258) & 0xFFFFFFFF, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                var_324 = &((struct_12231053618952106340 *) var_2166)->unnamed_field_at_offset_0.unnamed_field_19;
                var_325 = var_258;
                var_326 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8);
            } else {
                var_272 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_1 & 0x20;
                helper_fmov_FT0_STN_wrapper(NULL, 0, var_24, var_23, var_22, var_98, var_97, var_100, var_99, var_103, var_102, var_101, var_105, var_104, var_64, var_63, var_86, var_85, var_84, &var_1718, &var_1719);
                helper_fucomi_ST0_FT0_wrapper(NULL, var_1909, var_24, var_23, var_22, var_98, var_97, var_100, var_99, var_103, var_102, var_101, var_105, var_104, var_64, var_63, var_86, (generic64_t) var_272, 24, var_260, var_1914, var_85, var_1718, var_1719, var_84, &var_1716, &var_1717);
                var_252 = var_1717;
                helper_fpop_wrapper(NULL, var_84, &var_1707, &var_1708, &var_1709, &var_1710, &var_1711, &var_1712, &var_1713, &var_1714, &var_1715);
                if ((var_252 & 0x4) == 0) {
                    var_323 = var_272 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1159 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1155;
                    if ((var_252 & 0x40) == 0) {
                        var_323 = var_272 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1167 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1163;
                    }
                } else {
                    var_323 = var_272 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1167 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1163;
                }
                generic32_t var_2170;
                var_2170 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0;
                pad((struct_12231053618952106340 *) ((generic64_t) var_2170 + 3), (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) ((generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) & 0xFFFEFFFF));
                out(f, (int8_t const *) var_282, (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_0);
                var_324 = &((struct_12231053618952106340 *) var_2170)->unnamed_field_at_offset_0.unnamed_field_9.unnamed_field_at_offset_3;
                var_325 = 3;
                var_326 = var_323;
            }
            generic64_t var_2171;
            var_2171 = var_324;
            out(f, (int8_t const *) var_326, (size_t) var_325);
            pad((struct_12231053618952106340 *) var_2171, (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) ((generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) ^ 0x2000));
            generic64_t var_2172;
            var_2172 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0;
            var_327 = var_2171 << 32 < var_2172 << 32 ? var_2172 : var_2171;
            return (int32_t) (var_327 & 0xFFFFFFFF);
        } break;
    }
}

int32_t printf_core(FILE *f, int8_t const *fmt, va_list *ap, arg *nl_arg, int32_t *nl_type) {
    struct_9583691257549503775 stack;
    uint64_t loop_state_var;
    generic32_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic32_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic8_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic64_t var_36;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic32_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic64_t var_52;
    generic32_t var_53;
    generic16_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic32_t var_57;
    generic64_t var_58;
    generic64_t var_59;
    generic64_t var_60;
    generic64_t var_61;
    generic64_t var_62;
    generic32_t var_63;
    generic64_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic64_t var_68;
    generic64_t var_69;
    generic32_t var_70;
    generic64_t var_71;
    generic8_t var_72;
    generic64_t var_73;
    generic16_t var_74;
    generic64_t var_75;
    generic32_t var_76;
    generic64_t var_77;
    generic16_t var_78;
    generic16_t var_79;
    generic64_t var_80;
    generic64_t var_81;
    generic64_t var_82;
    generic64_t var_83;
    generic64_t var_84;
    generic8_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic32_t var_91;
    generic64_t var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic32_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    generic64_t var_99;
    generic8_t var_100;
    generic64_t var_101;
    generic32_t var_102;
    generic16_t var_103;
    generic64_t var_104;
    generic64_t var_105;
    generic64_t var_106;
    generic64_t var_107;
    generic64_t var_108;
    generic64_t var_109;
    generic64_t var_110;
    generic64_t var_111;
    generic64_t var_112;
    generic32_t var_113;
    generic64_t var_114;
    generic32_t var_115;
    generic64_t var_116;
    generic64_t var_117;
    generic64_t var_118;
    generic64_t var_119;
    generic32_t var_120;
    int32_t var_121;
    void *var_122;
    generic32_t var_123;
    int32_t var_124;
    generic64_t var_125;
    generic64_t var_126;
    generic64_t var_127;
    generic32_t var_128;
    generic64_t var_129;
    generic64_t var_130;
    generic64_t var_131;
    generic64_t var_132;
    generic64_t var_133;
    generic16_t var_134;
    generic16_t var_135;
    generic64_t var_136;
    generic64_t var_137;
    generic32_t var_138;
    generic16_t var_139;
    generic16_t var_140;
    generic64_t var_141;
    generic32_t var_142;
    generic64_t var_143;
    generic64_t var_144;
    generic64_t var_145;
    generic64_t var_146;
    generic64_t var_147;
    generic64_t var_148;
    generic16_t var_149;
    generic16_t var_150;
    generic32_t var_151;
    generic64_t var_152;
    generic64_t var_153;
    generic16_t var_154;
    generic64_t var_155;
    generic16_t var_156;
    generic64_t var_157;
    generic32_t var_158;
    generic64_t var_159;
    generic64_t var_160;
    generic64_t var_161;
    generic64_t var_162;
    generic64_t var_163;
    generic64_t var_164;
    generic64_t var_165;
    generic64_t var_166;
    generic32_t var_167;
    generic64_t var_168;
    generic64_t var_169;
    generic64_t var_170;
    generic64_t var_171;
    generic64_t var_172;
    generic64_t var_173;
    generic32_t var_174;
    generic64_t var_175;
    generic64_t var_176;
    generic64_t var_177;
    generic64_t var_178;
    generic64_t var_179;
    generic64_t var_180;
    generic64_t var_181;
    generic64_t var_182;
    generic64_t var_183;
    generic64_t var_184;
    generic64_t var_185;
    generic64_t var_186;
    generic16_t var_187;
    generic16_t var_188;
    generic32_t var_189;
    generic64_t var_190;
    generic64_t var_191;
    generic64_t var_192;
    generic32_t var_193;
    generic64_t var_194;
    generic64_t var_195;
    generic64_t var_196;
    generic64_t var_197;
    generic64_t var_198;
    generic64_t var_199;
    generic64_t var_200;
    generic64_t var_201;
    generic64_t var_202;
    generic64_t var_203;
    generic32_t var_204;
    generic64_t var_205;
    generic64_t var_206;
    generic64_t var_207;
    generic64_t var_208;
    generic64_t var_209;
    generic64_t var_210;
    generic64_t var_211;
    generic64_t var_212;
    generic64_t var_213;
    generic64_t var_214;
    generic64_t var_215;
    generic64_t var_216;
    generic64_t var_217;
    generic64_t var_218;
    generic64_t var_219;
    generic64_t var_220;
    generic64_t var_221;
    generic64_t var_222;
    generic64_t var_223;
    generic64_t var_224;
    generic64_t var_225;
    generic64_t var_226;
    generic64_t var_227;
    generic64_t var_228;
    generic64_t var_229;
    *(uint32_t **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = &ap[0][0];
    *(void ***) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + 8) = &nl_arg->p;
    *(int32_t **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24) = nl_type;
    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = 0;
    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 0;
    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 = 0;
    generic8_t var_230;
    var_230 = (generic64_t) &f->flags == 0;
    var_133 = init_state_0x8558();
    var_134 = init_pc_address_space();
    var_135 = init_pc_type();
    var_136 = fmt;
    var_137 = init_rax();
    var_138 = init_pc_epoch();
    while (true) {
        var_83 = var_133;
        var_65 = var_134;
        var_66 = var_135;
        var_61 = var_136;
        var_70 = var_138;
        var_113 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
        var_139 = var_65;
        var_140 = var_66;
        var_141 = var_137;
        var_142 = var_70;
        if (var_113 > 4294967295) {
            generic32_t var_231;
            var_231 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0;
            generic64_t var_232;
            var_232 = (generic64_t) 2147483647 - var_113;
            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = var_113 + var_231;
            var_139 = var_65;
            var_140 = var_66;
            var_141 = var_232;
            var_142 = var_70;
            if (var_232 << 32 < (generic64_t) var_231 << 32) {
                int32_t *var_233;
                var_233 = prefix___errno_location();
                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 4294967295;
                *var_233 = 75;
                var_139 = 0;
                var_140 = 4;
                var_141 = var_233;
                var_142 = 0;
            }
        }
        var_79 = var_139;
        var_78 = var_140;
        var_76 = var_142;
        var_143 = 0;
        var_144 = var_141;
        if (*(generic8_t *) var_61 == '\000') {
            if (!(var_230)) {
                loop_state_var = 3;
                break;
            }
            var_145 = 0;
            var_146 = 1;
            if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 == 0)) {
                loop_state_var = 4;
                break;
            }
            loop_state_var = 1;
            break;
        }
        while (true) {
            bool break_from_loop_234 = false;
            var_7 = var_143;
            var_12 = var_61 + var_7;
            generic8_t var_235;
            var_235 = *(generic8_t *) var_12;
            var_36 = var_144 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_235;
            switch (var_235) {
                case 0:
                case 37:
                {
                    break_from_loop_234 = true;
                    break;
                } break;
                default:
                {
                    var_143 = var_7 + 1;
                    var_144 = var_36;
                    continue;
                } break;
            }
            if (break_from_loop_234)
                break;
        }
        var_35 = var_12 + 1;
        var_147 = 0;
        while (true) {
            var_9 = var_147;
            var_33 = var_12 + var_9;
            var_32 = var_9 << 1;
            var_31 = var_12 + var_32;
            if ((*(generic8_t *) var_31 == '%') && (*(generic8_t *) (var_35 + var_32) == '%')) {
                var_147 = var_9 + 1;
                continue;
            }
            break;
        }
        var_22 = var_33 - var_61;
        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_22;
        var_149 = var_79;
        var_150 = var_78;
        var_151 = var_76;
        var_152 = var_22;
        if (!(var_230)) {
            *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_22;
            out(f, (int8_t const *) var_61, (size_t) (var_22 << 32 >> 32));
            var_149 = 0;
            var_150 = 4;
            var_151 = 0;
            var_152 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3;
        }
        var_55 = var_149;
        var_54 = var_150;
        var_53 = var_151;
        var_52 = var_152;
        var_153 = var_83;
        var_154 = var_55;
        var_155 = var_31;
        var_156 = var_54;
        var_157 = var_36;
        var_158 = var_53;
        if (!((var_52 & 0xFFFFFFFF) == 0)) {
            var_133 = var_153;
            var_134 = var_154;
            var_135 = var_156;
            var_136 = var_155;
            var_137 = var_157;
            var_138 = var_158;
            continue;
        }
        var_19 = var_31 + 1;
        var_18 = (generic64_t) *(generic8_t *) var_19 + 4294967248 & 0xFFFFFFFF;
        var_159 = var_19;
        var_160 = 4294967295;
        if (!(var_18 > 9)) {
            var_159 = var_19;
            var_160 = 4294967295;
            if (*(generic8_t *) (var_31 + 2) == '$') {
                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 = 1;
                var_159 = var_31 + 3;
                var_160 = var_18;
            }
        }
        var_94 = var_159;
        var_93 = var_160;
        var_161 = 0;
        var_162 = 0;
        while (true) {
            var_64 = var_161;
            var_131 = var_162;
            var_17 = var_94 + var_64;
            var_85 = *(generic8_t *) var_17;
            var_16 = (generic32_t) var_85;
            var_23 = (generic64_t) var_85 & 0x1F;
            uint32_t var_236 = compute_all_subl(var_16 - 63, 31);
            if (((var_16 & 0xFFFFFFE0) == 32) && (!((0x12889 >> var_23 & 0x1) == 0))) {
                var_161 = var_64 + 1;
                var_162 = var_131 | 0x1 << var_23;
                continue;
            }
            break;
        }
        var_163 = 0;
        var_164 = var_52;
        if (!(var_85 == '*')) {
            while (true) {
                var_51 = var_163;
                var_56 = var_164;
                var_26 = var_17 + var_51;
                var_25 = (generic64_t) *(generic8_t *) var_26 + 4294967248 & 0xFFFFFFFF;
                if (var_25 > 9) {
                    break;
                }
                var_163 = var_51 + 1;
                var_164 = (var_56 * 10 & 0xFFFFFFFE) + var_25;
                continue;
            }
            var_168 = (generic64_t) var_16;
            var_169 = var_26;
            var_170 = var_56 & 0xFFFFFFFF;
            var_171 = var_131;
            if (!((generic32_t) var_56 > 4294967295)) {
                loop_state_var = 0;
                break;
            }
        }
        var_15 = var_17 + 1;
        var_14 = var_15;
        var_13 = (generic64_t) *(generic8_t *) var_14;
        if ((var_13 + 4294967248 & 0xFFFFFFFE) > 9) {
            if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 == 0)) {
                loop_state_var = 0;
                break;
            }
            var_24 = (generic64_t) var_16;
            var_165 = var_24;
            var_166 = var_15;
            var_167 = 0;
            if (!(var_230)) {
                var_77 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                var_21 = var_77;
                var_86 = *(generic32_t *) var_21;
                if (var_86 > 47) {
                    generic64_t var_237;
                    var_237 = var_77 + 8;
                    generic64_t var_238;
                    var_238 = *(generic64_t *) var_237;
                    *(generic64_t *) var_237 = var_238 + 8;
                    var_165 = var_77;
                    var_166 = var_15;
                    var_167 = *(generic32_t *) var_238;
                } else {
                    generic64_t var_239;
                    var_239 = *(generic64_t *) (var_77 + 16) + (generic64_t) var_86;
                    *(generic32_t *) var_21 = var_86 + 8;
                    var_165 = var_24;
                    var_166 = var_15;
                    var_167 = *(generic32_t *) var_239;
                }
            }
        } else {
            if (*(generic8_t *) (var_17 + 2) == '$') {
                generic64_t var_240;
                var_240 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24);
                generic64_t var_241;
                var_241 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + 8);
                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 = 1;
                *(generic32_t *) ((var_13 << 2) + var_240 - 192) = 10;
                var_165 = var_240;
                var_166 = var_17 + 3;
                var_167 = *(generic32_t *) (((generic64_t) *(generic8_t *) var_14 << 4) + var_241 - 768);
            } else {
                if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 == 0)) {
                    loop_state_var = 0;
                    break;
                }
                var_24 = (generic64_t) var_16;
                var_165 = var_24;
                var_166 = var_15;
                var_167 = 0;
                if (!(var_230)) {
                    var_77 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                    var_21 = var_77;
                    var_86 = *(generic32_t *) var_21;
                    if (var_86 > 47) {
                        generic64_t var_242;
                        var_242 = var_77 + 8;
                        generic64_t var_243;
                        var_243 = *(generic64_t *) var_242;
                        *(generic64_t *) var_242 = var_243 + 8;
                        var_165 = var_77;
                        var_166 = var_15;
                        var_167 = *(generic32_t *) var_243;
                    } else {
                        generic64_t var_244;
                        var_244 = *(generic64_t *) (var_77 + 16) + (generic64_t) var_86;
                        *(generic32_t *) var_21 = var_86 + 8;
                        var_165 = var_24;
                        var_166 = var_15;
                        var_167 = *(generic32_t *) var_244;
                    }
                }
            }
        }
        var_73 = var_165;
        var_1 = var_166;
        var_0 = var_167;
        var_168 = var_73;
        var_169 = var_1;
        var_170 = (generic64_t) var_0;
        var_171 = var_131;
        if (!(var_0 > 4294967295)) {
            var_168 = var_73;
            var_169 = var_1;
            var_170 = (generic64_t) 0 - var_0;
            var_171 = var_131 & 0xFFFFDFFF | 0x2000;
        }
        var_114 = var_168;
        var_59 = var_169;
        var_99 = var_170;
        var_98 = var_171;
        var_172 = var_114;
        var_173 = var_59;
        var_174 = 4294967295;
        if (*(generic8_t *) var_59 == '.') {
            var_43 = var_59 + 1;
            if (*(generic8_t *) var_43 == '*') {
                var_42 = var_59 + 2;
                var_41 = var_42;
                var_40 = (generic64_t) *(generic8_t *) var_41;
                if ((var_40 + 4294967248 & 0xFFFFFFFE) > 9) {
                    if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 == 0)) {
                        loop_state_var = 0;
                        break;
                    }
                    var_172 = var_114;
                    var_173 = var_42;
                    var_174 = 0;
                    if (!(var_230)) {
                        var_96 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                        var_132 = var_96;
                        var_95 = *(generic32_t *) var_132;
                        if (var_95 > 47) {
                            generic64_t var_245;
                            var_245 = var_96 + 8;
                            generic64_t var_246;
                            var_246 = *(generic64_t *) var_245;
                            *(generic64_t *) var_245 = var_246 + 8;
                            var_179 = var_96;
                            var_180 = var_246;
                        } else {
                            generic64_t var_247;
                            var_247 = *(generic64_t *) (var_96 + 16) + (generic64_t) var_95;
                            *(generic32_t *) var_132 = var_95 + 8;
                            var_179 = var_114;
                            var_180 = var_247;
                        }
                        var_172 = var_179;
                        var_173 = var_42;
                        var_174 = *(generic32_t *) var_180;
                    }
                } else {
                    if (*(generic8_t *) (var_59 + 3) == '$') {
                        generic64_t var_248;
                        var_248 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24);
                        generic64_t var_249;
                        var_249 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + 8);
                        *(generic32_t *) ((var_40 << 2) + var_248 - 192) = 10;
                        var_172 = var_248;
                        var_173 = var_59 + 4;
                        var_174 = *(generic32_t *) (((generic64_t) *(generic8_t *) var_41 << 4) + var_249 - 768);
                    } else {
                        if (!(*(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_16 == 0)) {
                            loop_state_var = 0;
                            break;
                        }
                        var_172 = var_114;
                        var_173 = var_42;
                        var_174 = 0;
                        if (!(var_230)) {
                            var_96 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                            var_132 = var_96;
                            var_95 = *(generic32_t *) var_132;
                            if (var_95 > 47) {
                                generic64_t var_250;
                                var_250 = var_96 + 8;
                                generic64_t var_251;
                                var_251 = *(generic64_t *) var_250;
                                *(generic64_t *) var_250 = var_251 + 8;
                                var_179 = var_96;
                                var_180 = var_251;
                            } else {
                                generic64_t var_252;
                                var_252 = *(generic64_t *) (var_96 + 16) + (generic64_t) var_95;
                                *(generic32_t *) var_132 = var_95 + 8;
                                var_179 = var_114;
                                var_180 = var_252;
                            }
                            var_172 = var_179;
                            var_173 = var_42;
                            var_174 = *(generic32_t *) var_180;
                        }
                    }
                }
            } else {
                var_177 = 0;
                var_178 = var_52;
                while (true) {
                    var_58 = var_177;
                    var_82 = var_178;
                    var_50 = var_43 + var_58;
                    var_49 = (generic64_t) *(generic8_t *) var_50 + 4294967248 & 0xFFFFFFFF;
                    if (var_49 > 9) {
                        break;
                    }
                    var_177 = var_58 + 1;
                    var_178 = (var_82 * 10 & 0xFFFFFFFE) + var_49;
                    continue;
                }
                var_172 = var_114;
                var_173 = var_50;
                var_174 = (generic32_t) var_82;
            }
        }
        var_89 = var_172;
        var_92 = var_173;
        var_91 = var_174;
        var_39 = (generic64_t) var_91;
        var_38 = var_92 + 1;
        var_175 = 0;
        var_176 = 0;
        while (true) {
            var_90 = var_175;
            var_62 = var_176;
            var_37 = var_92 + var_90;
            if ((generic32_t) *(generic8_t *) var_37 - 65 > 57) {
                loop_state_var = 0;
                break;
            }
            var_48 = var_38 + var_90;
            var_72 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
            var_47 = (generic64_t) var_72;
            var_46 = (generic32_t) var_72;
            var_175 = var_90 + 1;
            var_176 = var_47;
            if (var_46 - 1 < 8) {
                continue;
            }
            loop_state_var = 1;
            break;
        }
        bool break_from_loop_253 = false;
        switch (loop_state_var) {
            case 0:
            {
                loop_state_var = 0;
                break_from_loop_253 = true;
                break;
            } break;
            case 1:
            {
                switch (var_72) {
                    case 0:
                    {
                        loop_state_var = 0;
                        break_from_loop_253 = true;
                        break;
                    } break;
                    case 21:
                    {
                        var_181 = var_89;
                        var_182 = var_83;
                        var_183 = var_93;
                        var_184 = 21;
                        if ((generic32_t) var_93 > 4294967295) {
                            loop_state_var = 0;
                            break_from_loop_253 = true;
                            break;
                        }
                        generic64_t var_254;
                        var_254 = var_182;
                        var_185 = var_181;
                        var_186 = var_254;
                        var_187 = var_55;
                        var_188 = var_54;
                        var_189 = var_53;
                        var_190 = var_52;
                        var_191 = var_184;
                        var_153 = var_254;
                        var_154 = var_55;
                        var_155 = var_48;
                        var_156 = var_54;
                        var_157 = var_183;
                        var_158 = var_53;
                        if (var_230) {
                            var_133 = var_153;
                            var_134 = var_154;
                            var_135 = var_156;
                            var_136 = var_155;
                            var_137 = var_157;
                            var_138 = var_158;
                            continue;
                        }
                        var_71 = var_185;
                        var_75 = var_186;
                        var_74 = var_187;
                        var_103 = var_188;
                        var_102 = var_189;
                        var_101 = var_190;
                        var_100 = *(generic8_t *) var_37;
                        var_128 = (generic32_t) var_100;
                        var_127 = (generic64_t) var_128;
                        var_192 = var_127;
                        var_193 = 0;
                        var_194 = var_191;
                        if (var_62 == 0) {
                            uint32_t var_255 = compute_all_logicl(var_193, (generic32_t) var_194);
                            var_195 = var_192;
                        } else {
                            var_20 = (var_100 & 0xF) - '\003';
                            if (var_20 == '\000') {
                                generic32_t var_256;
                                var_256 = var_128 & 0xFFFFFFDF;
                                var_192 = (generic64_t) var_256;
                                var_193 = var_256;
                                var_194 = 3;
                                uint32_t var_257 = compute_all_logicl(var_193, (generic32_t) var_194);
                                var_195 = var_192;
                            } else {
                                uint32_t var_258 = compute_all_subb(var_20, '\003');
                                var_195 = var_127;
                            }
                        }
                        var_88 = var_195;
                        var_29 = var_98 & 0xFFFEFFFF;
                        var_28 = (var_98 & 0x2000) == 0 ? var_98 : var_29;
                        var_27 = var_88 + 4294967231 & 0xFFFFFFFF;
                        var_196 = var_39;
                        var_197 = var_61;
                        var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                        var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                        var_200 = var_28;
                        if (var_27 > 55) {
                            generic64_t var_259;
                            var_259 = var_196;
                            generic64_t var_260;
                            var_260 = var_197;
                            generic64_t var_261;
                            var_261 = var_199 - var_260;
                            *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_261;
                            generic64_t var_262;
                            var_262 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0;
                            generic64_t var_263;
                            var_263 = var_259 << 32 >> 32 < var_261 ? (generic64_t) &((struct_4909017780462635837 *) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3)->unnamed_field_at_offset_0 : var_259;
                            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = var_198;
                            generic64_t var_264;
                            var_264 = var_263 & 0xFFFFFFFF;
                            generic64_t var_265;
                            var_265 = var_264 + var_262;
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52) = (generic32_t) var_265;
                            generic64_t var_266;
                            var_266 = var_265 << 32 < var_99 << 32 ? var_99 : var_265;
                            generic64_t var_267;
                            var_267 = var_200 & 0xFFFFFFFF;
                            generic64_t var_268;
                            var_268 = var_266 & 0xFFFFFFFF;
                            pad((struct_12231053618952106340 *) (var_265 & 0xFFFFFFFF), var_268, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_267);
                            out(f, (int8_t const *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56), (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0);
                            generic32_t var_269;
                            var_269 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52);
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_269;
                            pad((struct_12231053618952106340 *) (generic64_t) var_269, var_268, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_267 ^ 0x10000));
                            pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3, var_264, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                            out(f, (int8_t const *) var_260, (size_t) *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3);
                            pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0, var_268, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_267 ^ 0x2000));
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_266;
                            var_153 = var_75;
                            var_154 = 0;
                            var_155 = var_48;
                            var_156 = 4;
                            var_157 = var_262;
                            var_158 = 0;
                            var_133 = var_153;
                            var_134 = var_154;
                            var_135 = var_156;
                            var_136 = var_155;
                            var_137 = var_157;
                            var_138 = var_158;
                            continue;
                        }
                        var_87 = *(generic64_t *) ((var_27 << 3) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 128));
                        if (!(var_102 == 0 & var_74 == 0 & var_103 == 4)) {
                            loop_state_var = 2;
                            break_from_loop_253 = true;
                            break;
                        }
                        var_204 = var_91;
                        var_205 = var_27;
                        var_201 = var_39;
                        var_202 = var_88;
                        var_203 = var_28;
                        var_196 = var_39;
                        var_197 = var_61;
                        var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                        var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                        var_200 = var_28;
                        switch (var_87) {
                            case 4206750:
                            case 4206781:
                            {
                                switch (var_87) {
                                    case 4206781:
                                    {
                                        var_57 = var_204;
                                        var_63 = ~var_57;
                                        var_211 = var_101;
                                        var_212 = var_205;
                                        var_213 = (generic64_t) &stack.unnamed_field_at_offset_0 + 80;
                                        while (true) {
                                            var_107 = var_211;
                                            var_3 = var_212;
                                            var_2 = *(generic64_t *) var_213;
                                            var_123 = (generic32_t) var_107;
                                            var_217 = var_3;
                                            if (var_123 - var_57 > var_63) {
                                                var_115 = *(generic32_t *) var_2;
                                                var_217 = var_3;
                                                if (var_115 == 0) {
                                                    loop_state_var = 1;
                                                } else {
                                                    *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_2 + 4;
                                                    var_121 = wctomb((int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (wchar_t) var_115);
                                                    var_120 = (generic32_t) var_121;
                                                    if (!(var_120 > 4294967295)) {
                                                        loop_state_var = 0;
                                                        break;
                                                    }
                                                    var_217 = var_121;
                                                    if (!(var_57 - var_123 - var_120 > ~var_120)) {
                                                        var_211 = (var_107 & 0xFFFFFFFF) + (generic64_t) var_121;
                                                        var_212 = var_121;
                                                        var_213 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3;
                                                        continue;
                                                    }
                                                    loop_state_var = 1;
                                                }
                                            } else {
                                                loop_state_var = 1;
                                            }
                                            break;
                                        }
                                        switch (loop_state_var) {
                                            case 0:
                                            {
                                                loop_state_var = 0;
                                                break_from_loop_253 = true;
                                                break;
                                            } break;
                                            case 1:
                                            {
                                                var_45 = var_107 & 0xFFFFFFFF;
                                                var_44 = var_28 & 0xFFFFFFFF;
                                                pad((struct_12231053618952106340 *) var_45, var_99, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_44);
                                                var_119 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                var_126 = var_107 << 32;
                                                var_227 = 0;
                                                var_228 = var_217;
                                                while (true) {
                                                    var_5 = var_227;
                                                    var_4 = var_228;
                                                    var_229 = var_4;
                                                    var_11 = *(generic32_t *) (var_119 + (var_5 << 2));
                                                    var_229 = var_4;
                                                    var_124 = wctomb((int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (wchar_t) var_11);
                                                    generic32_t var_270;
                                                    var_270 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 + (generic32_t) var_124;
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_270;
                                                    var_229 = var_124;
                                                    if (((var_45 > (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0) && (!(var_11 == 0))) && (!((generic64_t) var_270 << 32 > var_126))) {
                                                        out(f, (int8_t const *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (size_t) ((generic64_t) var_124 << 32 >> 32));
                                                        var_227 = var_5 + 1;
                                                        var_228 = var_124;
                                                        continue;
                                                    }
                                                    break;
                                                }
                                                pad((struct_12231053618952106340 *) var_45, var_99, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_44 ^ 0x2000));
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) (var_99 << 32 < var_126 ? var_107 : var_99);
                                                var_153 = var_75;
                                                var_154 = 0;
                                                var_155 = var_48;
                                                var_156 = 4;
                                                var_157 = var_229;
                                                var_158 = 0;
                                                var_133 = var_153;
                                                var_134 = var_154;
                                                var_135 = var_156;
                                                var_136 = var_155;
                                                var_137 = var_157;
                                                var_138 = var_158;
                                                continue;
                                            } break;
                                        }
                                        if (break_from_loop_253)
                                            break;
                                    } break;
                                    case 4206750:
                                    {
                                        generic64_t var_271;
                                        var_271 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 76) = 0;
                                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = (generic32_t) var_271;
                                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = (generic64_t) &stack.unnamed_field_at_offset_0 + 72;
                                        var_204 = 4294967295;
                                        var_205 = (generic64_t) &stack.unnamed_field_at_offset_0 + 72;
                                    } break;
                                }
                                if (break_from_loop_253)
                                    break;
                            } break;
                            case 4206106:
                            case 4206193:
                            case 4206216:
                            case 4206315:
                            case 4206395:
                            case 4206461:
                            case 4206607:
                            case 4206659:
                            case 4206676:
                            case 4206857:
                            case 4206893:
                            {
                                switch (var_87) {
                                    case 4206857:
                                    {
                                        *(generic64_t *) &stack.unnamed_field_at_offset_0 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 88);
                                        *(generic64_t *) &stack.unnamed_field_at_offset_0 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                        int32_t var_272;
                                        var_272 = fmt_fp(f, (float128_t) (generic128_t) var_75, (int32_t) (generic32_t) var_99, (int32_t) var_91, (int32_t) (generic32_t) var_28, (int32_t) (generic32_t) var_88);
                                        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_272;
                                        var_153 = var_75;
                                        var_154 = 0;
                                        var_155 = var_48;
                                        var_156 = 4;
                                        var_157 = *(generic64_t *) &stack.unnamed_field_at_offset_0;
                                        var_158 = 0;
                                    } break;
                                    case 4206193:
                                    case 4206216:
                                    case 4206315:
                                    case 4206395:
                                    case 4206461:
                                    case 4206607:
                                    case 4206659:
                                    case 4206676:
                                    case 4206893:
                                    {
                                        switch (var_87) {
                                            case 4206193:
                                            case 4206216:
                                            case 4206315:
                                            case 4206395:
                                            case 4206461:
                                            {
                                                switch (var_87) {
                                                    case 4206395:
                                                    case 4206461:
                                                    {
                                                        switch (var_87) {
                                                            case 4206461:
                                                            {
                                                                var_214 = var_101 & 0xFFFFFFFF;
                                                                var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                            } break;
                                                            case 4206395:
                                                            {
                                                                var_67 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                                if (var_67 > 18446744073709551615) {
                                                                    uint32_t var_273 = compute_all_logicq(var_67, 55);
                                                                    var_214 = 1;
                                                                    var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1174;
                                                                    if ((var_28 & 0x800) == 0) {
                                                                        generic8_t var_274;
                                                                        var_274 = (var_28 & 0x1) == 0;
                                                                        var_214 = var_274 ? var_101 & 0xFFFFFFFF : 1;
                                                                        var_215 = var_274 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1175;
                                                                    }
                                                                } else {
                                                                    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = 0 - var_67;
                                                                    var_214 = 1;
                                                                    var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                                }
                                                            } break;
                                                        }
                                                        generic64_t var_275;
                                                        var_275 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_101;
                                                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = var_215;
                                                        int8_t *var_276;
                                                        var_276 = fmt_u((prefix_uintmax_t) var_275, (int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 144));
                                                        var_218 = var_39;
                                                        var_219 = var_276;
                                                        var_220 = var_214;
                                                        var_221 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8);
                                                        var_222 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3;
                                                        var_223 = var_28;
                                                    } break;
                                                    case 4206193:
                                                    case 4206216:
                                                    {
                                                        switch (var_87) {
                                                            case 4206193:
                                                            {
                                                                var_201 = var_39 > 16 ? var_39 : 16;
                                                                var_202 = 120;
                                                                var_203 = var_28 & 0xFFFFFFF7 | 0x8;
                                                            } break;
                                                            case 4206216:
                                                            {
                                                                var_84 = var_201;
                                                                var_60 = var_202;
                                                                var_69 = var_203;
                                                                var_68 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                                var_206 = 0;
                                                                var_207 = var_71;
                                                                var_208 = var_68;
                                                                while (true) {
                                                                    var_112 = var_206;
                                                                    var_111 = var_207;
                                                                    var_110 = var_208;
                                                                    var_130 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_112;
                                                                    if (var_110 == 0) {
                                                                        break;
                                                                    }
                                                                    generic64_t var_277;
                                                                    var_277 = var_111 & 0xFFFFFF00 | (generic64_t) *(generic8_t *) (var_110 & 0xF | (generic64_t) &prefix_segment_0x405000_Generic64_3292.xdigits[0]) | var_60 & 0x20;
                                                                    *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143 - var_112) = (generic8_t) var_277;
                                                                    var_206 = var_112 + 1;
                                                                    var_207 = var_277;
                                                                    var_208 = var_110 >> 4;
                                                                    continue;
                                                                }
                                                                var_224 = var_84;
                                                                var_225 = var_130;
                                                                var_226 = var_69;
                                                                if (var_68 == 0 | (var_69 & 0x8) == 0) {
                                                                    var_218 = var_224;
                                                                    var_219 = var_225;
                                                                    var_220 = var_101 & 0xFFFFFFFF;
                                                                    var_221 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                                    var_222 = var_101;
                                                                    var_223 = var_226;
                                                                } else {
                                                                    var_218 = var_84;
                                                                    var_219 = var_130;
                                                                    var_220 = 2;
                                                                    var_221 = (var_60 << 32 >> 36) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173);
                                                                    var_222 = var_101;
                                                                    var_223 = var_69;
                                                                }
                                                            } break;
                                                        }
                                                    } break;
                                                    case 4206315:
                                                    {
                                                        var_209 = 0;
                                                        var_210 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        while (true) {
                                                            var_109 = var_209;
                                                            var_108 = var_210;
                                                            var_129 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_109;
                                                            if (var_108 == 0) {
                                                                break;
                                                            }
                                                            *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143 - var_109) = (generic8_t) var_108 & 0x7 | 0x30;
                                                            var_209 = var_109 + 1;
                                                            var_210 = var_108 >> 3;
                                                            continue;
                                                        }
                                                        var_224 = var_39;
                                                        var_225 = var_129;
                                                        var_226 = var_28;
                                                        var_224 = var_39;
                                                        var_225 = var_129;
                                                        var_226 = var_28;
                                                        if ((!((var_28 & 0x8) == 0)) && (!(var_109 < (generic64_t) var_91))) {
                                                            var_224 = var_109 + 1 & 0xFFFFFFFF;
                                                            var_225 = var_129;
                                                            var_226 = var_28;
                                                        }
                                                        var_218 = var_224;
                                                        var_219 = var_225;
                                                        var_220 = var_101 & 0xFFFFFFFF;
                                                        var_221 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                        var_222 = var_101;
                                                        var_223 = var_226;
                                                    } break;
                                                }
                                                var_118 = var_218;
                                                var_117 = var_219;
                                                var_116 = var_220;
                                                var_106 = var_221;
                                                var_105 = var_222;
                                                generic64_t var_278;
                                                var_278 = var_223;
                                                var_125 = (generic32_t) var_118 > 4294967295 ? var_278 & 0xFFFEFFFF : var_278;
                                                var_104 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                if ((var_104 | var_118 & 0xFFFFFFFF) == 0) {
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_116;
                                                    var_196 = var_105 & 0xFFFFFFFF;
                                                    var_197 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_198 = var_106;
                                                    var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_200 = var_125;
                                                } else {
                                                    generic64_t var_279;
                                                    var_279 = var_118 << 32 >> 32;
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_116;
                                                    generic64_t var_280;
                                                    var_280 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_117 + ((generic64_t) var_104 == 0);
                                                    var_196 = var_280 < var_279 ? var_279 : var_280;
                                                    var_197 = var_117;
                                                    var_198 = var_106;
                                                    var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_200 = var_125;
                                                }
                                            } break;
                                            case 4206659:
                                            case 4206676:
                                            {
                                                switch (var_87) {
                                                    case 4206659:
                                                    {
                                                        int32_t *var_281;
                                                        var_281 = prefix___errno_location();
                                                        int8_t *var_282;
                                                        var_282 = strerror(*var_281);
                                                        var_216 = var_282;
                                                    } break;
                                                    case 4206676:
                                                    {
                                                        generic64_t var_283;
                                                        var_283 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        var_216 = var_283 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1183 : var_283;
                                                    } break;
                                                }
                                                var_97 = var_216;
                                                generic64_t var_284;
                                                var_284 = (generic64_t) var_91;
                                                *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_284;
                                                var_122 = memchr((void const *) var_97, (int32_t) 0, (size_t) var_284);
                                                if ((generic64_t) var_122 == 0) {
                                                    var_196 = var_39;
                                                    var_197 = var_97;
                                                    var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                    var_199 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + var_97;
                                                    var_200 = var_29;
                                                } else {
                                                    var_196 = (generic64_t) var_122 - var_97 & 0xFFFFFFFF;
                                                    var_197 = var_97;
                                                    var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                    var_199 = var_122;
                                                    var_200 = var_29;
                                                }
                                            } break;
                                            case 4206607:
                                            {
                                                *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143) = (generic8_t) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                var_196 = 1;
                                                var_197 = (generic64_t) &stack.unnamed_field_at_offset_0 + 143;
                                                var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                var_200 = var_29;
                                            } break;
                                            case 4206893:
                                            {
                                                generic64_t var_285;
                                                var_285 = var_196;
                                                generic64_t var_286;
                                                var_286 = var_197;
                                                generic64_t var_287;
                                                var_287 = var_199 - var_286;
                                                *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_287;
                                                generic64_t var_288;
                                                var_288 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0;
                                                generic64_t var_289;
                                                var_289 = var_285 << 32 >> 32 < var_287 ? (generic64_t) &((struct_4909017780462635837 *) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3)->unnamed_field_at_offset_0 : var_285;
                                                *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = var_198;
                                                generic64_t var_290;
                                                var_290 = var_289 & 0xFFFFFFFF;
                                                generic64_t var_291;
                                                var_291 = var_290 + var_288;
                                                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52) = (generic32_t) var_291;
                                                generic64_t var_292;
                                                var_292 = var_291 << 32 < var_99 << 32 ? var_99 : var_291;
                                                generic64_t var_293;
                                                var_293 = var_200 & 0xFFFFFFFF;
                                                generic64_t var_294;
                                                var_294 = var_292 & 0xFFFFFFFF;
                                                pad((struct_12231053618952106340 *) (var_291 & 0xFFFFFFFF), var_294, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_293);
                                                out(f, (int8_t const *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56), (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0);
                                                generic32_t var_295;
                                                var_295 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52);
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_295;
                                                pad((struct_12231053618952106340 *) (generic64_t) var_295, var_294, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_293 ^ 0x10000));
                                                pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3, var_290, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                                                out(f, (int8_t const *) var_286, (size_t) *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3);
                                                pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0, var_294, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_293 ^ 0x2000));
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_292;
                                                var_153 = var_75;
                                                var_154 = 0;
                                                var_155 = var_48;
                                                var_156 = 4;
                                                var_157 = var_288;
                                                var_158 = 0;
                                            } break;
                                        }
                                    } break;
                                    case 4206106:
                                    {
                                        var_153 = var_75;
                                        var_154 = 0;
                                        var_155 = var_48;
                                        var_156 = 4;
                                        var_157 = var_27;
                                        var_158 = 0;
                                        if ((var_62 & 0xF8) == 0) {
                                            generic64_t var_296;
                                            var_296 = *(generic64_t *) ((var_62 << 3) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 576));
                                            artificial_struct_returned_by_build_PlainMetaAddress var_297 = build_PlainMetaAddress(0, 0, 0, 0);
                                            artificial_struct_returned_by_build_PlainMetaAddress var_298 = build_PlainMetaAddress(0, 0, 4, var_296);
                                            __builtin_unreachable();
                                        }
                                    } break;
                                }
                                var_133 = var_153;
                                var_134 = var_154;
                                var_135 = var_156;
                                var_136 = var_155;
                                var_137 = var_157;
                                var_138 = var_158;
                                continue;
                            } break;
                            default:
                            {
                                loop_state_var = 2;
                                break_from_loop_253 = true;
                                break;
                            } break;
                        }
                        if (break_from_loop_253)
                            break;
                    } break;
                    default:
                    {
                        if ((generic32_t) var_93 > 4294967295) {
                            generic64_t var_299;
                            var_299 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24);
                            generic64_t var_300;
                            var_300 = var_93 << 32;
                            generic64_t var_301;
                            var_301 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + 8);
                            *(generic32_t *) ((var_300 >> 30) + var_299) = var_46;
                            generic64_t var_302;
                            var_302 = var_300 >> 28;
                            generic64_t var_303;
                            var_303 = var_302 + var_301;
                            generic64_t var_304;
                            var_304 = *(generic64_t *) var_303;
                            generic64_t var_305;
                            var_305 = *(generic64_t *) (var_303 + 8);
                            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = var_304;
                            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 88) = var_305;
                            var_181 = var_299;
                            var_182 = var_304;
                            var_183 = var_302;
                            var_184 = var_300 >> 29;
                            generic64_t var_306;
                            var_306 = var_182;
                            var_185 = var_181;
                            var_186 = var_306;
                            var_187 = var_55;
                            var_188 = var_54;
                            var_189 = var_53;
                            var_190 = var_52;
                            var_191 = var_184;
                            var_153 = var_306;
                            var_154 = var_55;
                            var_155 = var_48;
                            var_156 = var_54;
                            var_157 = var_183;
                            var_158 = var_53;
                            if (var_230) {
                                var_133 = var_153;
                                var_134 = var_154;
                                var_135 = var_156;
                                var_136 = var_155;
                                var_137 = var_157;
                                var_138 = var_158;
                                continue;
                            }
                        }
                        if (var_230) {
                            loop_state_var = 1;
                            break_from_loop_253 = true;
                            break;
                        }
                        generic64_t var_307;
                        var_307 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16);
                        *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_52;
                        pop_arg((struct_6160509669349238517 *) var_307, (struct_12231053618952106340 *) var_47, (struct_12618651705284700279 *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80));
                        var_185 = (generic64_t) &stack.unnamed_field_at_offset_0 + 80;
                        var_186 = var_83;
                        var_187 = 0;
                        var_188 = 4;
                        var_189 = 0;
                        var_190 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3;
                        var_191 = 21;
                        var_71 = var_185;
                        var_75 = var_186;
                        var_74 = var_187;
                        var_103 = var_188;
                        var_102 = var_189;
                        var_101 = var_190;
                        var_100 = *(generic8_t *) var_37;
                        var_128 = (generic32_t) var_100;
                        var_127 = (generic64_t) var_128;
                        var_192 = var_127;
                        var_193 = 0;
                        var_194 = var_191;
                        if (var_62 == 0) {
                            uint32_t var_308 = compute_all_logicl(var_193, (generic32_t) var_194);
                            var_195 = var_192;
                        } else {
                            var_20 = (var_100 & 0xF) - '\003';
                            if (var_20 == '\000') {
                                generic32_t var_309;
                                var_309 = var_128 & 0xFFFFFFDF;
                                var_192 = (generic64_t) var_309;
                                var_193 = var_309;
                                var_194 = 3;
                                uint32_t var_310 = compute_all_logicl(var_193, (generic32_t) var_194);
                                var_195 = var_192;
                            } else {
                                uint32_t var_311 = compute_all_subb(var_20, '\003');
                                var_195 = var_127;
                            }
                        }
                        var_88 = var_195;
                        var_29 = var_98 & 0xFFFEFFFF;
                        var_28 = (var_98 & 0x2000) == 0 ? var_98 : var_29;
                        var_27 = var_88 + 4294967231 & 0xFFFFFFFF;
                        var_196 = var_39;
                        var_197 = var_61;
                        var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                        var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                        var_200 = var_28;
                        if (var_27 > 55) {
                            generic64_t var_312;
                            var_312 = var_196;
                            generic64_t var_313;
                            var_313 = var_197;
                            generic64_t var_314;
                            var_314 = var_199 - var_313;
                            *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_314;
                            generic64_t var_315;
                            var_315 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0;
                            generic64_t var_316;
                            var_316 = var_312 << 32 >> 32 < var_314 ? (generic64_t) &((struct_4909017780462635837 *) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3)->unnamed_field_at_offset_0 : var_312;
                            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = var_198;
                            generic64_t var_317;
                            var_317 = var_316 & 0xFFFFFFFF;
                            generic64_t var_318;
                            var_318 = var_317 + var_315;
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52) = (generic32_t) var_318;
                            generic64_t var_319;
                            var_319 = var_318 << 32 < var_99 << 32 ? var_99 : var_318;
                            generic64_t var_320;
                            var_320 = var_200 & 0xFFFFFFFF;
                            generic64_t var_321;
                            var_321 = var_319 & 0xFFFFFFFF;
                            pad((struct_12231053618952106340 *) (var_318 & 0xFFFFFFFF), var_321, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_320);
                            out(f, (int8_t const *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56), (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0);
                            generic32_t var_322;
                            var_322 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52);
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_322;
                            pad((struct_12231053618952106340 *) (generic64_t) var_322, var_321, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_320 ^ 0x10000));
                            pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3, var_317, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                            out(f, (int8_t const *) var_313, (size_t) *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3);
                            pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0, var_321, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_320 ^ 0x2000));
                            *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_319;
                            var_153 = var_75;
                            var_154 = 0;
                            var_155 = var_48;
                            var_156 = 4;
                            var_157 = var_315;
                            var_158 = 0;
                            var_133 = var_153;
                            var_134 = var_154;
                            var_135 = var_156;
                            var_136 = var_155;
                            var_137 = var_157;
                            var_138 = var_158;
                            continue;
                        }
                        var_87 = *(generic64_t *) ((var_27 << 3) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 128));
                        if (!(var_102 == 0 & var_74 == 0 & var_103 == 4)) {
                            loop_state_var = 2;
                            break_from_loop_253 = true;
                            break;
                        }
                        var_204 = var_91;
                        var_205 = var_27;
                        var_201 = var_39;
                        var_202 = var_88;
                        var_203 = var_28;
                        var_196 = var_39;
                        var_197 = var_61;
                        var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                        var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                        var_200 = var_28;
                        switch (var_87) {
                            case 4206750:
                            case 4206781:
                            {
                                switch (var_87) {
                                    case 4206781:
                                    {
                                        var_57 = var_204;
                                        var_63 = ~var_57;
                                        var_211 = var_101;
                                        var_212 = var_205;
                                        var_213 = (generic64_t) &stack.unnamed_field_at_offset_0 + 80;
                                        while (true) {
                                            var_107 = var_211;
                                            var_3 = var_212;
                                            var_2 = *(generic64_t *) var_213;
                                            var_123 = (generic32_t) var_107;
                                            var_217 = var_3;
                                            if (var_123 - var_57 > var_63) {
                                                var_115 = *(generic32_t *) var_2;
                                                var_217 = var_3;
                                                if (var_115 == 0) {
                                                    loop_state_var = 1;
                                                } else {
                                                    *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_2 + 4;
                                                    var_121 = wctomb((int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (wchar_t) var_115);
                                                    var_120 = (generic32_t) var_121;
                                                    if (!(var_120 > 4294967295)) {
                                                        loop_state_var = 0;
                                                        break;
                                                    }
                                                    var_217 = var_121;
                                                    if (!(var_57 - var_123 - var_120 > ~var_120)) {
                                                        var_211 = (var_107 & 0xFFFFFFFF) + (generic64_t) var_121;
                                                        var_212 = var_121;
                                                        var_213 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3;
                                                        continue;
                                                    }
                                                    loop_state_var = 1;
                                                }
                                            } else {
                                                loop_state_var = 1;
                                            }
                                            break;
                                        }
                                        switch (loop_state_var) {
                                            case 0:
                                            {
                                                loop_state_var = 0;
                                                break_from_loop_253 = true;
                                                break;
                                            } break;
                                            case 1:
                                            {
                                                var_45 = var_107 & 0xFFFFFFFF;
                                                var_44 = var_28 & 0xFFFFFFFF;
                                                pad((struct_12231053618952106340 *) var_45, var_99, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_44);
                                                var_119 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                var_126 = var_107 << 32;
                                                var_227 = 0;
                                                var_228 = var_217;
                                                while (true) {
                                                    var_5 = var_227;
                                                    var_4 = var_228;
                                                    var_229 = var_4;
                                                    var_11 = *(generic32_t *) (var_119 + (var_5 << 2));
                                                    var_229 = var_4;
                                                    var_124 = wctomb((int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (wchar_t) var_11);
                                                    generic32_t var_323;
                                                    var_323 = *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 + (generic32_t) var_124;
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_323;
                                                    var_229 = var_124;
                                                    if (((var_45 > (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0) && (!(var_11 == 0))) && (!((generic64_t) var_323 << 32 > var_126))) {
                                                        out(f, (int8_t const *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 68), (size_t) ((generic64_t) var_124 << 32 >> 32));
                                                        var_227 = var_5 + 1;
                                                        var_228 = var_124;
                                                        continue;
                                                    }
                                                    break;
                                                }
                                                pad((struct_12231053618952106340 *) var_45, var_99, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_44 ^ 0x2000));
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) (var_99 << 32 < var_126 ? var_107 : var_99);
                                                var_153 = var_75;
                                                var_154 = 0;
                                                var_155 = var_48;
                                                var_156 = 4;
                                                var_157 = var_229;
                                                var_158 = 0;
                                                var_133 = var_153;
                                                var_134 = var_154;
                                                var_135 = var_156;
                                                var_136 = var_155;
                                                var_137 = var_157;
                                                var_138 = var_158;
                                                continue;
                                            } break;
                                        }
                                        if (break_from_loop_253)
                                            break;
                                    } break;
                                    case 4206750:
                                    {
                                        generic64_t var_324;
                                        var_324 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 76) = 0;
                                        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 72) = (generic32_t) var_324;
                                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = (generic64_t) &stack.unnamed_field_at_offset_0 + 72;
                                        var_204 = 4294967295;
                                        var_205 = (generic64_t) &stack.unnamed_field_at_offset_0 + 72;
                                    } break;
                                }
                                if (break_from_loop_253)
                                    break;
                            } break;
                            case 4206106:
                            case 4206193:
                            case 4206216:
                            case 4206315:
                            case 4206395:
                            case 4206461:
                            case 4206607:
                            case 4206659:
                            case 4206676:
                            case 4206857:
                            case 4206893:
                            {
                                switch (var_87) {
                                    case 4206857:
                                    {
                                        *(generic64_t *) &stack.unnamed_field_at_offset_0 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 88);
                                        *(generic64_t *) &stack.unnamed_field_at_offset_0 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                        int32_t var_325;
                                        var_325 = fmt_fp(f, (float128_t) (generic128_t) var_75, (int32_t) (generic32_t) var_99, (int32_t) var_91, (int32_t) (generic32_t) var_28, (int32_t) (generic32_t) var_88);
                                        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_325;
                                        var_153 = var_75;
                                        var_154 = 0;
                                        var_155 = var_48;
                                        var_156 = 4;
                                        var_157 = *(generic64_t *) &stack.unnamed_field_at_offset_0;
                                        var_158 = 0;
                                    } break;
                                    case 4206193:
                                    case 4206216:
                                    case 4206315:
                                    case 4206395:
                                    case 4206461:
                                    case 4206607:
                                    case 4206659:
                                    case 4206676:
                                    case 4206893:
                                    {
                                        switch (var_87) {
                                            case 4206193:
                                            case 4206216:
                                            case 4206315:
                                            case 4206395:
                                            case 4206461:
                                            {
                                                switch (var_87) {
                                                    case 4206395:
                                                    case 4206461:
                                                    {
                                                        switch (var_87) {
                                                            case 4206461:
                                                            {
                                                                var_214 = var_101 & 0xFFFFFFFF;
                                                                var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                            } break;
                                                            case 4206395:
                                                            {
                                                                var_67 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                                if (var_67 > 18446744073709551615) {
                                                                    uint32_t var_326 = compute_all_logicq(var_67, 55);
                                                                    var_214 = 1;
                                                                    var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1174;
                                                                    if ((var_28 & 0x800) == 0) {
                                                                        generic8_t var_327;
                                                                        var_327 = (var_28 & 0x1) == 0;
                                                                        var_214 = var_327 ? var_101 & 0xFFFFFFFF : 1;
                                                                        var_215 = var_327 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173 : (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1175;
                                                                    }
                                                                } else {
                                                                    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80) = 0 - var_67;
                                                                    var_214 = 1;
                                                                    var_215 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                                }
                                                            } break;
                                                        }
                                                        generic64_t var_328;
                                                        var_328 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_101;
                                                        *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = var_215;
                                                        int8_t *var_329;
                                                        var_329 = fmt_u((prefix_uintmax_t) var_328, (int8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 144));
                                                        var_218 = var_39;
                                                        var_219 = var_329;
                                                        var_220 = var_214;
                                                        var_221 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8);
                                                        var_222 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3;
                                                        var_223 = var_28;
                                                    } break;
                                                    case 4206193:
                                                    case 4206216:
                                                    {
                                                        switch (var_87) {
                                                            case 4206193:
                                                            {
                                                                var_201 = var_39 > 16 ? var_39 : 16;
                                                                var_202 = 120;
                                                                var_203 = var_28 & 0xFFFFFFF7 | 0x8;
                                                            } break;
                                                            case 4206216:
                                                            {
                                                                var_84 = var_201;
                                                                var_60 = var_202;
                                                                var_69 = var_203;
                                                                var_68 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                                var_206 = 0;
                                                                var_207 = var_71;
                                                                var_208 = var_68;
                                                                while (true) {
                                                                    var_112 = var_206;
                                                                    var_111 = var_207;
                                                                    var_110 = var_208;
                                                                    var_130 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_112;
                                                                    if (var_110 == 0) {
                                                                        break;
                                                                    }
                                                                    generic64_t var_330;
                                                                    var_330 = var_111 & 0xFFFFFF00 | (generic64_t) *(generic8_t *) (var_110 & 0xF | (generic64_t) &prefix_segment_0x405000_Generic64_3292.xdigits[0]) | var_60 & 0x20;
                                                                    *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143 - var_112) = (generic8_t) var_330;
                                                                    var_206 = var_112 + 1;
                                                                    var_207 = var_330;
                                                                    var_208 = var_110 >> 4;
                                                                    continue;
                                                                }
                                                                var_224 = var_84;
                                                                var_225 = var_130;
                                                                var_226 = var_69;
                                                                if (var_68 == 0 | (var_69 & 0x8) == 0) {
                                                                    var_218 = var_224;
                                                                    var_219 = var_225;
                                                                    var_220 = var_101 & 0xFFFFFFFF;
                                                                    var_221 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                                    var_222 = var_101;
                                                                    var_223 = var_226;
                                                                } else {
                                                                    var_218 = var_84;
                                                                    var_219 = var_130;
                                                                    var_220 = 2;
                                                                    var_221 = (var_60 << 32 >> 36) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173);
                                                                    var_222 = var_101;
                                                                    var_223 = var_69;
                                                                }
                                                            } break;
                                                        }
                                                    } break;
                                                    case 4206315:
                                                    {
                                                        var_209 = 0;
                                                        var_210 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        while (true) {
                                                            var_109 = var_209;
                                                            var_108 = var_210;
                                                            var_129 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_109;
                                                            if (var_108 == 0) {
                                                                break;
                                                            }
                                                            *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143 - var_109) = (generic8_t) var_108 & 0x7 | 0x30;
                                                            var_209 = var_109 + 1;
                                                            var_210 = var_108 >> 3;
                                                            continue;
                                                        }
                                                        var_224 = var_39;
                                                        var_225 = var_129;
                                                        var_226 = var_28;
                                                        var_224 = var_39;
                                                        var_225 = var_129;
                                                        var_226 = var_28;
                                                        if ((!((var_28 & 0x8) == 0)) && (!(var_109 < (generic64_t) var_91))) {
                                                            var_224 = var_109 + 1 & 0xFFFFFFFF;
                                                            var_225 = var_129;
                                                            var_226 = var_28;
                                                        }
                                                        var_218 = var_224;
                                                        var_219 = var_225;
                                                        var_220 = var_101 & 0xFFFFFFFF;
                                                        var_221 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                        var_222 = var_101;
                                                        var_223 = var_226;
                                                    } break;
                                                }
                                                var_118 = var_218;
                                                var_117 = var_219;
                                                var_116 = var_220;
                                                var_106 = var_221;
                                                var_105 = var_222;
                                                generic64_t var_331;
                                                var_331 = var_223;
                                                var_125 = (generic32_t) var_118 > 4294967295 ? var_331 & 0xFFFEFFFF : var_331;
                                                var_104 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                if ((var_104 | var_118 & 0xFFFFFFFF) == 0) {
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_116;
                                                    var_196 = var_105 & 0xFFFFFFFF;
                                                    var_197 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_198 = var_106;
                                                    var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_200 = var_125;
                                                } else {
                                                    generic64_t var_332;
                                                    var_332 = var_118 << 32 >> 32;
                                                    *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_116;
                                                    generic64_t var_333;
                                                    var_333 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144 - var_117 + ((generic64_t) var_104 == 0);
                                                    var_196 = var_333 < var_332 ? var_332 : var_333;
                                                    var_197 = var_117;
                                                    var_198 = var_106;
                                                    var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                    var_200 = var_125;
                                                }
                                            } break;
                                            case 4206659:
                                            case 4206676:
                                            {
                                                switch (var_87) {
                                                    case 4206659:
                                                    {
                                                        int32_t *var_334;
                                                        var_334 = prefix___errno_location();
                                                        int8_t *var_335;
                                                        var_335 = strerror(*var_334);
                                                        var_216 = var_335;
                                                    } break;
                                                    case 4206676:
                                                    {
                                                        generic64_t var_336;
                                                        var_336 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                        var_216 = var_336 == 0 ? (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1183 : var_336;
                                                    } break;
                                                }
                                                var_97 = var_216;
                                                generic64_t var_337;
                                                var_337 = (generic64_t) var_91;
                                                *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_337;
                                                var_122 = memchr((void const *) var_97, (int32_t) 0, (size_t) var_337);
                                                if ((generic64_t) var_122 == 0) {
                                                    var_196 = var_39;
                                                    var_197 = var_97;
                                                    var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                    var_199 = *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + var_97;
                                                    var_200 = var_29;
                                                } else {
                                                    var_196 = (generic64_t) var_122 - var_97 & 0xFFFFFFFF;
                                                    var_197 = var_97;
                                                    var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                    var_199 = var_122;
                                                    var_200 = var_29;
                                                }
                                            } break;
                                            case 4206607:
                                            {
                                                *(generic8_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 143) = (generic8_t) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 80);
                                                var_196 = 1;
                                                var_197 = (generic64_t) &stack.unnamed_field_at_offset_0 + 143;
                                                var_198 = (generic64_t) &prefix_segment_0x405000_Generic64_3292 + 1173;
                                                var_199 = (generic64_t) &stack.unnamed_field_at_offset_0 + 144;
                                                var_200 = var_29;
                                            } break;
                                            case 4206893:
                                            {
                                                generic64_t var_338;
                                                var_338 = var_196;
                                                generic64_t var_339;
                                                var_339 = var_197;
                                                generic64_t var_340;
                                                var_340 = var_199 - var_339;
                                                *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 = var_340;
                                                generic64_t var_341;
                                                var_341 = (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0;
                                                generic64_t var_342;
                                                var_342 = var_338 << 32 >> 32 < var_340 ? (generic64_t) &((struct_4909017780462635837 *) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3)->unnamed_field_at_offset_0 : var_338;
                                                *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56) = var_198;
                                                generic64_t var_343;
                                                var_343 = var_342 & 0xFFFFFFFF;
                                                generic64_t var_344;
                                                var_344 = var_343 + var_341;
                                                *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52) = (generic32_t) var_344;
                                                generic64_t var_345;
                                                var_345 = var_344 << 32 < var_99 << 32 ? var_99 : var_344;
                                                generic64_t var_346;
                                                var_346 = var_200 & 0xFFFFFFFF;
                                                generic64_t var_347;
                                                var_347 = var_345 & 0xFFFFFFFF;
                                                pad((struct_12231053618952106340 *) (var_344 & 0xFFFFFFFF), var_347, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_346);
                                                out(f, (int8_t const *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 56), (size_t) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0);
                                                generic32_t var_348;
                                                var_348 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 52);
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = var_348;
                                                pad((struct_12231053618952106340 *) (generic64_t) var_348, var_347, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_346 ^ 0x10000));
                                                pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3.unnamed_field_at_offset_0.unnamed_field_3, var_343, 48, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) 0);
                                                out(f, (int8_t const *) var_339, (size_t) *(generic64_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3);
                                                pad((struct_12231053618952106340 *) (generic64_t) *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0, var_347, 32, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) (var_346 ^ 0x2000));
                                                *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8.unnamed_field_0 = (generic32_t) var_345;
                                                var_153 = var_75;
                                                var_154 = 0;
                                                var_155 = var_48;
                                                var_156 = 4;
                                                var_157 = var_341;
                                                var_158 = 0;
                                            } break;
                                        }
                                    } break;
                                    case 4206106:
                                    {
                                        var_153 = var_75;
                                        var_154 = 0;
                                        var_155 = var_48;
                                        var_156 = 4;
                                        var_157 = var_27;
                                        var_158 = 0;
                                        if ((var_62 & 0xF8) == 0) {
                                            generic64_t var_349;
                                            var_349 = *(generic64_t *) ((var_62 << 3) + ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 576));
                                            artificial_struct_returned_by_build_PlainMetaAddress var_350 = build_PlainMetaAddress(0, 0, 0, 0);
                                            artificial_struct_returned_by_build_PlainMetaAddress var_351 = build_PlainMetaAddress(0, 0, 4, var_349);
                                            __builtin_unreachable();
                                        }
                                    } break;
                                }
                                var_133 = var_153;
                                var_134 = var_154;
                                var_135 = var_156;
                                var_136 = var_155;
                                var_137 = var_157;
                                var_138 = var_158;
                                continue;
                            } break;
                            default:
                            {
                                loop_state_var = 2;
                                break_from_loop_253 = true;
                                break;
                            } break;
                        }
                        if (break_from_loop_253)
                            break;
                    } break;
                }
                if (break_from_loop_253)
                    break;
            } break;
        }
        if (break_from_loop_253)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 4294967295;
        } break;
        case 1:
        {
            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 0;
        } break;
        case 2:
        {
            artificial_struct_returned_by_build_PlainMetaAddress var_352 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_353 = build_PlainMetaAddress(var_102, var_74, var_103, var_87);
            __builtin_unreachable();
        } break;
        case 3:
        {
            return (int32_t) (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
        } break;
        case 4:
        {
            while (true) {
                var_6 = var_145;
                var_81 = var_146;
                var_34 = var_6 + 1;
                var_80 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24);
                var_10 = *(generic32_t *) ((var_81 << 2) + var_80);
                if (!(var_10 == 0)) {
                    pop_arg((struct_6160509669349238517 *) *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16), (struct_12231053618952106340 *) (generic64_t) var_10, (struct_12618651705284700279 *) ((var_81 << 4) + *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_32.unnamed_field_3 + 8)));
                    if (var_6 == 8) {
                        loop_state_var = 1;
                        break;
                    }
                    var_145 = var_34;
                    var_146 = var_81 + 1;
                    continue;
                }
                var_30 = var_80 + (var_34 << 2);
                var_148 = 0;
                loop_state_var = 0;
                break;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_8 = var_148;
                        if (var_34 + var_8 > 9) {
                            loop_state_var = 1;
                            break;
                        }
                        var_148 = var_8 + 1;
                        if (*(generic32_t *) (var_30 + (var_8 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 0;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 4294967295;
                        } break;
                        case 1:
                        {
                            *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 1;
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4) = 1;
                    return (int32_t) (generic64_t) *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 4);
                } break;
            }
        } break;
    }
}

generic64_t prefix_function_0x402b52_Code_x86_64(struct_9698377958653239472 stack_args) {
    uint64_t loop_state_var;
    struct_9186906714890880050 *var_0;
    generic16_t var_1;
    generic32_t var_2;
    generic32_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic16_t var_16;
    generic64_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic32_t var_20;
    generic64_t var_21;
    generic16_t var_22;
    generic16_t var_23;
    generic64_t var_24;
    generic32_t var_25;
    generic64_t var_26;
    generic16_t var_27;
    generic16_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic8_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic32_t var_36;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic8_t var_52;
    generic64_t var_53;
    generic64_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic16_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic16_t var_60;
    generic64_t var_61;
    generic16_t var_62;
    generic64_t var_63;
    generic32_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic32_t var_73;
    generic64_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic64_t var_80;
    generic16_t var_81;
    generic16_t var_82;
    generic32_t var_83;
    generic16_t var_84;
    generic16_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic8_t *var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    generic64_t var_99;
    var_99 = (revng_init_local_sp()) + 4;
    var_58 = init_rax();
    var_59 = init_pc_epoch();
    var_55 = init_pc_address_space();
    var_56 = 0 /* undef */;
    var_57 = init_pc_type();
    while (true) {
        var_60 = var_55;
        var_61 = var_56;
        var_62 = var_57;
        var_63 = var_58;
        var_64 = var_59;
        while (true) {
            var_16 = var_60;
            var_24 = var_61;
            var_22 = var_62;
            var_20 = var_64;
            var_2 = *(generic32_t *) var_99;
            var_65 = var_16;
            var_66 = var_22;
            var_67 = var_63;
            var_68 = var_20;
            if (var_2 > 4294967295) {
                generic32_t var_100;
                var_100 = stack_args.unnamed_field_at_offset_0;
                generic64_t var_101;
                var_101 = (generic64_t) 2147483647 - var_2;
                *(generic32_t *) var_99 = var_2 + var_100;
                var_65 = var_16;
                var_66 = var_22;
                var_67 = var_101;
                var_68 = var_20;
                if (var_101 << 32 < (generic64_t) var_100 << 32) {
                    int32_t *var_102;
                    var_102 = prefix___errno_location();
                    *(generic32_t *) var_99 = 4294967295;
                    *var_102 = 75;
                    var_65 = 0;
                    var_66 = 4;
                    var_67 = var_102;
                    var_68 = 0;
                }
            }
            var_28 = var_65;
            var_27 = var_66;
            var_3 = var_68;
            var_69 = 0;
            var_70 = var_67;
            if (*(generic8_t *) var_24 == '\000') {
                var_74 = 0;
                var_75 = var_28;
                var_76 = var_27;
                var_77 = 1;
                var_78 = var_3;
                if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                    loop_state_var = 0;
                    break;
                }
                loop_state_var = 2;
                break;
            }
            while (true) {
                bool break_from_loop_103 = false;
                var_29 = var_69;
                var_11 = var_24 + var_29;
                generic8_t var_104;
                var_104 = *(generic8_t *) var_11;
                var_10 = var_70 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_104;
                switch (var_104) {
                    case 0:
                    case 37:
                    {
                        break_from_loop_103 = true;
                        break;
                    } break;
                    default:
                    {
                        var_69 = var_29 + 1;
                        var_70 = var_10;
                        continue;
                    } break;
                }
                if (break_from_loop_103)
                    break;
            }
            var_32 = var_11 + 1;
            var_79 = 0;
            while (true) {
                var_19 = var_79;
                var_8 = var_11 + var_19;
                var_7 = var_19 << 1;
                var_6 = var_11 + var_7;
                if ((*(generic8_t *) var_6 == '%') && (*(generic8_t *) (var_32 + var_7) == '%')) {
                    var_79 = var_19 + 1;
                    continue;
                }
                break;
            }
            var_49 = var_8 - var_24;
            stack_args.unnamed_field_at_offset_0 = (generic32_t) var_49;
            var_60 = var_28;
            var_61 = var_6;
            var_62 = var_27;
            var_63 = var_10;
            var_64 = var_3;
            if (!((var_49 & 0xFFFFFFFF) == 0)) {
                continue;
            }
            loop_state_var = 1;
            break;
        }
        bool break_from_loop_105 = false;
        switch (loop_state_var) {
            case 0:
            {
                loop_state_var = 0;
                break_from_loop_105 = true;
                break;
            } break;
            case 1:
            {
                var_48 = var_6 + 1;
                var_47 = (generic64_t) *(generic8_t *) var_48 + 4294967248 & 0xFFFFFFFF;
                var_87 = var_48;
                var_88 = 4294967295;
                if (!(var_47 > 9)) {
                    var_87 = var_48;
                    var_88 = 4294967295;
                    if (*(generic8_t *) (var_6 + 2) == '$') {
                        stack_args.unnamed_field_at_offset_40 = 1;
                        var_87 = var_6 + 3;
                        var_88 = var_47;
                    }
                }
                var_30 = var_87;
                var_53 = var_88;
                var_89 = 0;
                while (true) {
                    var_4 = var_89;
                    var_46 = var_30 + var_4;
                    var_31 = *(generic8_t *) var_46;
                    if (((generic64_t) var_31 + 4294967264 & 0xFFFFFFE0) == 0) {
                        uint32_t var_106 = compute_all_subl((generic32_t) var_31 - 63, 31);
                        if (!((0x12889 >> ((generic64_t) var_31 & 0x1F) & 0x1) == 0)) {
                            var_89 = var_4 + 1;
                            continue;
                        }
                    }
                    break;
                }
                var_90 = 0;
                var_91 = var_49;
                if (!(var_31 == '*')) {
                    while (true) {
                        var_12 = var_90;
                        var_54 = var_91;
                        var_42 = var_46 + var_12;
                        var_41 = var_42;
                        var_40 = (generic64_t) *(generic8_t *) var_41 + 4294967248 & 0xFFFFFFFF;
                        if (var_40 > 9) {
                            break;
                        }
                        var_90 = var_12 + 1;
                        var_91 = (var_54 * 10 & 0xFFFFFFFE) + var_40;
                        continue;
                    }
                    var_93 = var_42;
                    var_84 = var_28;
                    var_85 = var_27;
                    var_86 = var_3;
                    var_92 = var_41;
                    if (!((generic32_t) var_54 > 4294967295)) {
                        loop_state_var = 1;
                        break_from_loop_105 = true;
                        break;
                    }
                }
                var_45 = var_46 + 1;
                var_44 = var_45;
                var_43 = (generic64_t) *(generic8_t *) var_44;
                if ((var_43 + 4294967248 & 0xFFFFFFFE) > 9) {
                    generic8_t var_107;
                    var_107 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_45;
                    var_84 = var_28;
                    var_85 = var_27;
                    var_86 = var_3;
                    var_92 = var_44;
                    if (!(var_107)) {
                        loop_state_var = 1;
                        break_from_loop_105 = true;
                        break;
                    }
                }
                if (!(*(generic8_t *) (var_46 + 2) == '$')) {
                    generic8_t var_108;
                    var_108 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_45;
                    var_84 = var_28;
                    var_85 = var_27;
                    var_86 = var_3;
                    var_92 = var_44;
                    if (!(var_108)) {
                        loop_state_var = 1;
                        break_from_loop_105 = true;
                        break;
                    }
                }
                struct_9186906714890880050 *var_109;
                var_109 = stack_args.unnamed_field_at_offset_16;
                stack_args.unnamed_field_at_offset_40 = 1;
                generic64_t var_110;
                var_110 = var_46 + 3;
                *(generic32_t *) ((var_43 << 2) + (generic64_t) var_109 - 192) = 10;
                var_93 = var_110;
                var_92 = var_110;
                var_15 = var_93;
                var_94 = var_15;
                if (*var_92 == '.') {
                    var_50 = var_15 + 1;
                    if (!(*(generic8_t *) var_50 == '*')) {
                        var_96 = 0;
                        var_97 = var_49;
                        while (true) {
                            var_5 = var_96;
                            var_35 = var_97;
                            generic64_t var_111;
                            var_111 = var_50 + var_5;
                            var_38 = (generic64_t) *(generic8_t *) var_111 + 4294967248 & 0xFFFFFFFF;
                            var_94 = var_111;
                            if (var_38 > 9) {
                                break;
                            }
                            var_96 = var_5 + 1;
                            var_97 = (var_35 * 10 & 0xFFFFFFFE) + var_38;
                            continue;
                        }
                    }
                    var_34 = var_15 + 2;
                    var_33 = (generic64_t) *(generic8_t *) var_34;
                    if ((var_33 + 4294967248 & 0xFFFFFFFE) > 9) {
                        var_84 = var_28;
                        var_85 = var_27;
                        var_86 = var_3;
                        var_94 = var_34;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 1;
                            break_from_loop_105 = true;
                            break;
                        }
                    }
                    if (!(*(generic8_t *) (var_15 + 3) == '$')) {
                        var_84 = var_28;
                        var_85 = var_27;
                        var_86 = var_3;
                        var_94 = var_34;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 1;
                            break_from_loop_105 = true;
                            break;
                        }
                    }
                    *(generic32_t *) ((var_33 << 2) + (generic64_t) stack_args.unnamed_field_at_offset_16 - 192) = 10;
                    var_94 = var_15 + 4;
                }
                var_17 = var_94;
                var_39 = var_17 + 1;
                var_95 = 0;
                while (true) {
                    var_13 = var_95;
                    var_84 = var_28;
                    var_85 = var_27;
                    var_86 = var_3;
                    if ((generic32_t) *(generic8_t *) (var_17 + var_13) - 65 > 57) {
                        loop_state_var = 0;
                        break;
                    }
                    var_37 = var_39 + var_13;
                    var_52 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
                    var_36 = (generic32_t) var_52;
                    var_95 = var_13 + 1;
                    if (var_36 - 1 < 8) {
                        continue;
                    }
                    loop_state_var = 1;
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        loop_state_var = 1;
                        break_from_loop_105 = true;
                        break;
                    } break;
                    case 1:
                    {
                        var_84 = var_28;
                        var_85 = var_27;
                        var_86 = var_3;
                        switch (var_52) {
                            case 0:
                            {
                                loop_state_var = 1;
                                break_from_loop_105 = true;
                                break;
                            } break;
                            case 21:
                            {
                                var_84 = var_28;
                                var_85 = var_27;
                                var_86 = var_3;
                                var_98 = var_53;
                                if ((generic32_t) var_53 > 4294967295) {
                                    loop_state_var = 1;
                                    break_from_loop_105 = true;
                                    break;
                                }
                                var_58 = var_98;
                                var_59 = var_3;
                                var_55 = var_28;
                                var_56 = var_37;
                                var_57 = var_27;
                                continue;
                            } break;
                            default:
                            {
                                if (!((generic32_t) var_53 > 4294967295)) {
                                    loop_state_var = 2;
                                    break_from_loop_105 = true;
                                    break;
                                }
                                struct_9186906714890880050 *var_112;
                                var_112 = stack_args.unnamed_field_at_offset_16;
                                generic64_t var_113;
                                var_113 = var_53 << 32;
                                generic64_t var_114;
                                var_114 = stack_args.unnamed_field_at_offset_32;
                                *(generic32_t *) ((var_113 >> 30) + (generic64_t) var_112) = var_36;
                                generic64_t var_115;
                                var_115 = var_113 >> 28;
                                generic64_t var_116;
                                var_116 = var_115 + var_114;
                                generic64_t var_117;
                                var_117 = *(generic64_t *) (var_116 + 8);
                                stack_args.unnamed_field_at_offset_72 = *(generic64_t *) var_116;
                                stack_args.unnamed_field_at_offset_80 = var_117;
                                var_98 = var_115;
                                var_58 = var_98;
                                var_59 = var_3;
                                var_55 = var_28;
                                var_56 = var_37;
                                var_57 = var_27;
                                continue;
                            } break;
                        }
                        if (break_from_loop_105)
                            break;
                    } break;
                }
                if (break_from_loop_105)
                    break;
            } break;
            case 2:
            {
                loop_state_var = 2;
                break_from_loop_105 = true;
                break;
            } break;
        }
        if (break_from_loop_105)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            while (true) {
                var_21 = var_74;
                var_23 = var_75;
                var_1 = var_76;
                var_26 = var_77;
                var_25 = var_78;
                var_9 = var_21 + 1;
                var_0 = stack_args.unnamed_field_at_offset_16;
                var_18 = *(generic32_t *) ((var_26 << 2) + (generic64_t) var_0);
                if (var_18 == 0) {
                    var_51 = (generic64_t) var_0 + (var_9 << 2);
                    var_80 = 0;
                    loop_state_var = 0;
                    break;
                }
                pop_arg(stack_args.unnamed_field_at_offset_8, (struct_12231053618952106340 *) (generic64_t) var_18, (struct_12618651705284700279 *) ((var_26 << 4) + stack_args.unnamed_field_at_offset_32));
                var_81 = 0;
                var_82 = 4;
                var_83 = 0;
                if (var_21 == 8) {
                    loop_state_var = 1;
                    break;
                }
                var_74 = var_9;
                var_75 = 0;
                var_76 = 4;
                var_77 = var_26 + 1;
                var_78 = 0;
                continue;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_14 = var_80;
                        var_81 = var_23;
                        var_82 = var_1;
                        var_83 = var_25;
                        if (var_9 + var_14 > 9) {
                            loop_state_var = 1;
                            break;
                        }
                        var_80 = var_14 + 1;
                        var_84 = var_23;
                        var_85 = var_1;
                        var_86 = var_25;
                        if (*(generic32_t *) (var_51 + (var_14 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 0;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) var_99 = 4294967295;
                            var_71 = var_84;
                            var_72 = var_85;
                            var_73 = var_86;
                            generic64_t var_118;
                            var_118 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_119 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_120 = build_PlainMetaAddress(var_73, var_71, var_72, var_118);
                            __builtin_unreachable();
                        } break;
                        case 1:
                        {
                            break;
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) var_99 = 1;
                    var_71 = var_81;
                    var_72 = var_82;
                    var_73 = var_83;
                    generic64_t var_121;
                    var_121 = stack_args.unnamed_field_at_offset_192;
                    artificial_struct_returned_by_build_PlainMetaAddress var_122 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_123 = build_PlainMetaAddress(var_73, var_71, var_72, var_121);
                    __builtin_unreachable();
                } break;
            }
        } break;
        case 1:
        {
            *(generic32_t *) var_99 = 4294967295;
            var_71 = var_84;
            var_72 = var_85;
            var_73 = var_86;
            generic64_t var_124;
            var_124 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_125 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_126 = build_PlainMetaAddress(var_73, var_71, var_72, var_124);
            __builtin_unreachable();
        } break;
        case 2:
        {
            *(generic32_t *) var_99 = 0;
            var_71 = var_28;
            var_72 = var_27;
            var_73 = var_3;
            generic64_t var_127;
            var_127 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_128 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_129 = build_PlainMetaAddress(var_73, var_71, var_72, var_127);
            __builtin_unreachable();
        } break;
    }
}

generic64_t prefix_function_0x402e2c_Code_x86_64(struct_7942162182287730404 stack_args) {
    uint64_t loop_state_var;
    generic64_t var_0;
    generic32_t var_1;
    generic32_t var_2;
    generic16_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    struct_2778762867532781530 *var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic16_t var_31;
    generic16_t var_32;
    generic32_t var_33;
    generic64_t var_34;
    generic16_t var_35;
    generic32_t var_36;
    generic16_t var_37;
    generic8_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic8_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic32_t var_52;
    generic64_t var_53;
    generic16_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic16_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic16_t var_60;
    generic64_t var_61;
    generic16_t var_62;
    generic64_t var_63;
    generic32_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic32_t var_73;
    generic64_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic64_t var_80;
    generic16_t var_81;
    generic16_t var_82;
    generic32_t var_83;
    generic16_t var_84;
    generic16_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic8_t *var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    struct_12231053618952106340 *var_99;
    var_99 = stack_args.unnamed_field_at_offset_72;
    generic64_t var_100;
    var_100 = (revng_init_local_sp()) + 4;
    *(generic32_t *) var_99 = *(generic32_t *) var_100;
    var_57 = init_pc_type();
    var_58 = var_99;
    var_59 = init_pc_epoch();
    var_55 = init_pc_address_space();
    var_56 = 0 /* undef */;
    while (true) {
        var_60 = var_55;
        var_61 = var_56;
        var_62 = var_57;
        var_63 = var_58;
        var_64 = var_59;
        while (true) {
            var_3 = var_60;
            var_0 = var_61;
            var_35 = var_62;
            var_36 = var_64;
            var_2 = *(generic32_t *) var_100;
            var_65 = var_3;
            var_66 = var_35;
            var_67 = var_63;
            var_68 = var_36;
            if (var_2 > 4294967295) {
                generic32_t var_101;
                var_101 = stack_args.unnamed_field_at_offset_0;
                generic64_t var_102;
                var_102 = (generic64_t) 2147483647 - var_2;
                *(generic32_t *) var_100 = var_2 + var_101;
                var_65 = var_3;
                var_66 = var_35;
                var_67 = var_102;
                var_68 = var_36;
                if (var_102 << 32 < (generic64_t) var_101 << 32) {
                    int32_t *var_103;
                    var_103 = prefix___errno_location();
                    *(generic32_t *) var_100 = 4294967295;
                    *var_103 = 75;
                    var_65 = 0;
                    var_66 = 4;
                    var_67 = var_103;
                    var_68 = 0;
                }
            }
            var_31 = var_65;
            var_54 = var_66;
            var_1 = var_68;
            var_69 = 0;
            var_70 = var_67;
            if (*(generic8_t *) var_0 == '\000') {
                var_74 = 0;
                var_75 = var_31;
                var_76 = var_54;
                var_77 = 1;
                var_78 = var_1;
                if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                    loop_state_var = 1;
                    break;
                }
                loop_state_var = 2;
                break;
            }
            while (true) {
                bool break_from_loop_104 = false;
                var_11 = var_69;
                var_10 = var_0 + var_11;
                generic8_t var_105;
                var_105 = *(generic8_t *) var_10;
                var_9 = var_70 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_105;
                switch (var_105) {
                    case 0:
                    case 37:
                    {
                        break_from_loop_104 = true;
                        break;
                    } break;
                    default:
                    {
                        var_69 = var_11 + 1;
                        var_70 = var_9;
                        continue;
                    } break;
                }
                if (break_from_loop_104)
                    break;
            }
            var_45 = var_10 + 1;
            var_79 = 0;
            while (true) {
                var_53 = var_79;
                var_43 = var_10 + var_53;
                var_42 = var_53 << 1;
                var_41 = var_10 + var_42;
                if ((*(generic8_t *) var_41 == '%') && (*(generic8_t *) (var_45 + var_42) == '%')) {
                    var_79 = var_53 + 1;
                    continue;
                }
                break;
            }
            var_14 = var_43 - var_0;
            stack_args.unnamed_field_at_offset_0 = (generic32_t) var_14;
            var_60 = var_31;
            var_61 = var_41;
            var_62 = var_54;
            var_63 = var_9;
            var_64 = var_1;
            if (!((var_14 & 0xFFFFFFFF) == 0)) {
                continue;
            }
            loop_state_var = 0;
            break;
        }
        bool break_from_loop_106 = false;
        switch (loop_state_var) {
            case 0:
            {
                var_13 = var_41 + 1;
                var_12 = (generic64_t) *(generic8_t *) var_13 + 4294967248 & 0xFFFFFFFF;
                var_87 = var_13;
                var_88 = 4294967295;
                if (!(var_12 > 9)) {
                    var_87 = var_13;
                    var_88 = 4294967295;
                    if (*(generic8_t *) (var_41 + 2) == '$') {
                        stack_args.unnamed_field_at_offset_40 = 1;
                        var_87 = var_41 + 3;
                        var_88 = var_12;
                    }
                }
                var_5 = var_87;
                var_8 = var_88;
                var_89 = 0;
                while (true) {
                    var_7 = var_89;
                    var_28 = var_5 + var_7;
                    var_47 = *(generic8_t *) var_28;
                    if (((generic64_t) var_47 + 4294967264 & 0xFFFFFFE0) == 0) {
                        uint32_t var_107 = compute_all_subl((generic32_t) var_47 - 63, 31);
                        if (!((0x12889 >> ((generic64_t) var_47 & 0x1F) & 0x1) == 0)) {
                            var_89 = var_7 + 1;
                            continue;
                        }
                    }
                    break;
                }
                var_90 = 0;
                var_91 = var_14;
                if (!(var_47 == '*')) {
                    while (true) {
                        var_48 = var_90;
                        var_29 = var_91;
                        var_51 = var_28 + var_48;
                        var_50 = var_51;
                        var_15 = (generic64_t) *(generic8_t *) var_50 + 4294967248 & 0xFFFFFFFF;
                        if (var_15 > 9) {
                            break;
                        }
                        var_90 = var_48 + 1;
                        var_91 = (var_29 * 10 & 0xFFFFFFFE) + var_15;
                        continue;
                    }
                    var_84 = var_31;
                    var_85 = var_54;
                    var_86 = var_1;
                    var_92 = var_50;
                    var_93 = var_51;
                    if (!((generic32_t) var_29 > 4294967295)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                var_27 = var_28 + 1;
                var_26 = var_27;
                var_25 = (generic64_t) *(generic8_t *) var_26;
                if ((var_25 + 4294967248 & 0xFFFFFFFE) > 9) {
                    generic8_t var_108;
                    var_108 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_84 = var_31;
                    var_85 = var_54;
                    var_86 = var_1;
                    var_92 = var_26;
                    var_93 = var_27;
                    if (!(var_108)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                if (!(*(generic8_t *) (var_28 + 2) == '$')) {
                    generic8_t var_109;
                    var_109 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_84 = var_31;
                    var_85 = var_54;
                    var_86 = var_1;
                    var_92 = var_26;
                    var_93 = var_27;
                    if (!(var_109)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                struct_2778762867532781530 *var_110;
                var_110 = stack_args.unnamed_field_at_offset_16;
                stack_args.unnamed_field_at_offset_40 = 1;
                generic64_t var_111;
                var_111 = var_28 + 3;
                *(generic32_t *) ((var_25 << 2) + (generic64_t) var_110 - 192) = 10;
                var_92 = var_111;
                var_93 = var_111;
                var_30 = var_93;
                var_94 = var_30;
                if (*var_92 == '.') {
                    var_16 = var_30 + 1;
                    if (!(*(generic8_t *) var_16 == '*')) {
                        var_96 = 0;
                        var_97 = var_14;
                        while (true) {
                            var_49 = var_96;
                            var_46 = var_97;
                            generic64_t var_112;
                            var_112 = var_16 + var_49;
                            var_20 = (generic64_t) *(generic8_t *) var_112 + 4294967248 & 0xFFFFFFFF;
                            var_94 = var_112;
                            if (var_20 > 9) {
                                break;
                            }
                            var_96 = var_49 + 1;
                            var_97 = (var_46 * 10 & 0xFFFFFFFE) + var_20;
                            continue;
                        }
                    }
                    var_23 = var_30 + 2;
                    var_22 = (generic64_t) *(generic8_t *) var_23;
                    if ((var_22 + 4294967248 & 0xFFFFFFFE) > 9) {
                        var_84 = var_31;
                        var_85 = var_54;
                        var_86 = var_1;
                        var_94 = var_23;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    if (!(*(generic8_t *) (var_30 + 3) == '$')) {
                        var_84 = var_31;
                        var_85 = var_54;
                        var_86 = var_1;
                        var_94 = var_23;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    *(generic32_t *) ((var_22 << 2) + (generic64_t) stack_args.unnamed_field_at_offset_16 - 192) = 10;
                    var_94 = var_30 + 4;
                }
                var_34 = var_94;
                var_21 = var_34 + 1;
                var_95 = 0;
                while (true) {
                    var_17 = var_95;
                    var_84 = var_31;
                    var_85 = var_54;
                    var_86 = var_1;
                    if ((generic32_t) *(generic8_t *) (var_34 + var_17) - 65 > 57) {
                        loop_state_var = 0;
                        break;
                    }
                    var_19 = var_21 + var_17;
                    var_38 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
                    var_18 = (generic32_t) var_38;
                    var_95 = var_17 + 1;
                    if (var_18 - 1 < 8) {
                        continue;
                    }
                    loop_state_var = 1;
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    } break;
                    case 1:
                    {
                        var_84 = var_31;
                        var_85 = var_54;
                        var_86 = var_1;
                        switch (var_38) {
                            case 0:
                            {
                                loop_state_var = 0;
                                break_from_loop_106 = true;
                                break;
                            } break;
                            case 21:
                            {
                                var_98 = var_8;
                                var_84 = var_31;
                                var_85 = var_54;
                                var_86 = var_1;
                                if ((generic32_t) var_8 > 4294967295) {
                                    loop_state_var = 0;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                var_57 = var_54;
                                var_58 = var_98;
                                var_59 = var_1;
                                var_55 = var_31;
                                var_56 = var_19;
                                continue;
                            } break;
                            default:
                            {
                                if (!((generic32_t) var_8 > 4294967295)) {
                                    loop_state_var = 2;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                struct_2778762867532781530 *var_113;
                                var_113 = stack_args.unnamed_field_at_offset_16;
                                generic64_t var_114;
                                var_114 = var_8 << 32;
                                generic64_t var_115;
                                var_115 = stack_args.unnamed_field_at_offset_32;
                                *(generic32_t *) ((var_114 >> 30) + (generic64_t) var_113) = var_18;
                                generic64_t var_116;
                                var_116 = var_114 >> 28;
                                generic64_t var_117;
                                var_117 = var_116 + var_115;
                                generic64_t var_118;
                                var_118 = *(generic64_t *) var_117;
                                generic64_t var_119;
                                var_119 = *(generic64_t *) (var_117 + 8);
                                stack_args.unnamed_field_at_offset_72 = var_118;
                                stack_args.unnamed_field_at_offset_80 = var_119;
                                var_98 = var_116;
                                var_57 = var_54;
                                var_58 = var_98;
                                var_59 = var_1;
                                var_55 = var_31;
                                var_56 = var_19;
                                continue;
                            } break;
                        }
                        if (break_from_loop_106)
                            break;
                    } break;
                }
                if (break_from_loop_106)
                    break;
            } break;
            case 1:
            {
                loop_state_var = 1;
                break_from_loop_106 = true;
                break;
            } break;
            case 2:
            {
                loop_state_var = 2;
                break_from_loop_106 = true;
                break;
            } break;
        }
        if (break_from_loop_106)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            *(generic32_t *) var_100 = 4294967295;
            var_71 = var_84;
            var_72 = var_85;
            var_73 = var_86;
            generic64_t var_120;
            var_120 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_121 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_122 = build_PlainMetaAddress(var_73, var_71, var_72, var_120);
            __builtin_unreachable();
        } break;
        case 1:
        {
            while (true) {
                var_4 = var_74;
                var_32 = var_75;
                var_37 = var_76;
                var_39 = var_77;
                var_33 = var_78;
                var_44 = var_4 + 1;
                var_6 = stack_args.unnamed_field_at_offset_16;
                var_52 = *(generic32_t *) ((var_39 << 2) + (generic64_t) var_6);
                if (var_52 == 0) {
                    var_40 = (generic64_t) var_6 + (var_44 << 2);
                    var_80 = 0;
                    loop_state_var = 0;
                    break;
                }
                pop_arg(stack_args.unnamed_field_at_offset_8, (struct_12231053618952106340 *) (generic64_t) var_52, (struct_12618651705284700279 *) ((var_39 << 4) + stack_args.unnamed_field_at_offset_32));
                var_81 = 0;
                var_82 = 4;
                var_83 = 0;
                if (var_4 == 8) {
                    loop_state_var = 1;
                    break;
                }
                var_74 = var_44;
                var_75 = 0;
                var_76 = 4;
                var_77 = var_39 + 1;
                var_78 = 0;
                continue;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_24 = var_80;
                        var_81 = var_32;
                        var_82 = var_37;
                        var_83 = var_33;
                        if (var_44 + var_24 > 9) {
                            loop_state_var = 1;
                            break;
                        }
                        var_80 = var_24 + 1;
                        var_84 = var_32;
                        var_85 = var_37;
                        var_86 = var_33;
                        if (*(generic32_t *) (var_40 + (var_24 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 0;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) var_100 = 4294967295;
                            var_71 = var_84;
                            var_72 = var_85;
                            var_73 = var_86;
                            generic64_t var_123;
                            var_123 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_124 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_125 = build_PlainMetaAddress(var_73, var_71, var_72, var_123);
                            __builtin_unreachable();
                        } break;
                        case 1:
                        {
                            break;
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) var_100 = 1;
                    var_71 = var_81;
                    var_72 = var_82;
                    var_73 = var_83;
                    generic64_t var_126;
                    var_126 = stack_args.unnamed_field_at_offset_192;
                    artificial_struct_returned_by_build_PlainMetaAddress var_127 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_128 = build_PlainMetaAddress(var_73, var_71, var_72, var_126);
                    __builtin_unreachable();
                } break;
            }
        } break;
        case 2:
        {
            *(generic32_t *) var_100 = 0;
            var_71 = var_31;
            var_72 = var_54;
            var_73 = var_1;
            generic64_t var_129;
            var_129 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_130 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_131 = build_PlainMetaAddress(var_73, var_71, var_72, var_129);
            __builtin_unreachable();
        } break;
    }
}

generic64_t prefix_function_0x402e3c_Code_x86_64(struct_1274559209353379215 stack_args) {
    uint64_t loop_state_var;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic16_t var_3;
    generic32_t var_4;
    generic16_t var_5;
    generic32_t var_6;
    generic16_t var_7;
    generic32_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic32_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic16_t var_31;
    generic8_t var_32;
    generic64_t var_33;
    generic32_t var_34;
    generic16_t var_35;
    generic64_t var_36;
    generic64_t var_37;
    generic16_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    struct_16849604420174575025 *var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic64_t var_52;
    generic64_t var_53;
    generic8_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic16_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic16_t var_60;
    generic64_t var_61;
    generic16_t var_62;
    generic64_t var_63;
    generic32_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic32_t var_73;
    generic64_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic64_t var_80;
    generic16_t var_81;
    generic16_t var_82;
    generic32_t var_83;
    generic16_t var_84;
    generic16_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic8_t *var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    struct_12231053618952106340 *var_99;
    var_99 = stack_args.unnamed_field_at_offset_72;
    generic64_t var_100;
    var_100 = (revng_init_local_sp()) + 4;
    *(generic16_t *) var_99 = (generic16_t) *(generic32_t *) var_100;
    var_55 = init_pc_address_space();
    var_56 = 0 /* undef */;
    var_57 = init_pc_type();
    var_58 = var_99;
    var_59 = init_pc_epoch();
    while (true) {
        var_60 = var_55;
        var_61 = var_56;
        var_62 = var_57;
        var_63 = var_58;
        var_64 = var_59;
        while (true) {
            var_38 = var_60;
            var_49 = var_61;
            var_3 = var_62;
            var_34 = var_64;
            var_15 = *(generic32_t *) var_100;
            var_65 = var_38;
            var_66 = var_3;
            var_67 = var_63;
            var_68 = var_34;
            if (var_15 > 4294967295) {
                generic32_t var_101;
                var_101 = stack_args.unnamed_field_at_offset_0;
                generic64_t var_102;
                var_102 = (generic64_t) 2147483647 - var_15;
                *(generic32_t *) var_100 = var_15 + var_101;
                var_65 = var_38;
                var_66 = var_3;
                var_67 = var_102;
                var_68 = var_34;
                if (var_102 << 32 < (generic64_t) var_101 << 32) {
                    int32_t *var_103;
                    var_103 = prefix___errno_location();
                    *(generic32_t *) var_100 = 4294967295;
                    *var_103 = 75;
                    var_65 = 0;
                    var_66 = 4;
                    var_67 = var_103;
                    var_68 = 0;
                }
            }
            var_7 = var_65;
            var_5 = var_66;
            var_6 = var_68;
            var_69 = 0;
            var_70 = var_67;
            if (*(generic8_t *) var_49 == '\000') {
                var_74 = 0;
                var_75 = var_7;
                var_76 = var_5;
                var_77 = 1;
                var_78 = var_6;
                if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                    loop_state_var = 2;
                    break;
                }
                loop_state_var = 1;
                break;
            }
            while (true) {
                bool break_from_loop_104 = false;
                var_28 = var_69;
                var_41 = var_49 + var_28;
                generic8_t var_105;
                var_105 = *(generic8_t *) var_41;
                var_52 = var_70 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_105;
                switch (var_105) {
                    case 0:
                    case 37:
                    {
                        break_from_loop_104 = true;
                        break;
                    } break;
                    default:
                    {
                        var_69 = var_28 + 1;
                        var_70 = var_52;
                        continue;
                    } break;
                }
                if (break_from_loop_104)
                    break;
            }
            var_51 = var_41 + 1;
            var_79 = 0;
            while (true) {
                var_10 = var_79;
                var_48 = var_41 + var_10;
                var_47 = var_10 << 1;
                var_46 = var_41 + var_47;
                if ((*(generic8_t *) var_46 == '%') && (*(generic8_t *) (var_51 + var_47) == '%')) {
                    var_79 = var_10 + 1;
                    continue;
                }
                break;
            }
            var_14 = var_48 - var_49;
            stack_args.unnamed_field_at_offset_0 = (generic32_t) var_14;
            var_60 = var_7;
            var_61 = var_46;
            var_62 = var_5;
            var_63 = var_52;
            var_64 = var_6;
            if (!((var_14 & 0xFFFFFFFF) == 0)) {
                continue;
            }
            loop_state_var = 0;
            break;
        }
        bool break_from_loop_106 = false;
        switch (loop_state_var) {
            case 0:
            {
                var_12 = var_46 + 1;
                var_11 = (generic64_t) *(generic8_t *) var_12 + 4294967248 & 0xFFFFFFFF;
                var_87 = var_12;
                var_88 = 4294967295;
                if (!(var_11 > 9)) {
                    var_87 = var_12;
                    var_88 = 4294967295;
                    if (*(generic8_t *) (var_46 + 2) == '$') {
                        stack_args.unnamed_field_at_offset_40 = 1;
                        var_87 = var_46 + 3;
                        var_88 = var_11;
                    }
                }
                var_1 = var_87;
                var_40 = var_88;
                var_89 = 0;
                while (true) {
                    var_30 = var_89;
                    var_9 = var_1 + var_30;
                    var_32 = *(generic8_t *) var_9;
                    if (((generic64_t) var_32 + 4294967264 & 0xFFFFFFE0) == 0) {
                        uint32_t var_107 = compute_all_subl((generic32_t) var_32 - 63, 31);
                        if (!((0x12889 >> ((generic64_t) var_32 & 0x1F) & 0x1) == 0)) {
                            var_89 = var_30 + 1;
                            continue;
                        }
                    }
                    break;
                }
                var_90 = 0;
                var_91 = var_14;
                if (!(var_32 == '*')) {
                    while (true) {
                        var_36 = var_90;
                        var_0 = var_91;
                        var_23 = var_9 + var_36;
                        var_22 = var_23;
                        var_42 = (generic64_t) *(generic8_t *) var_22 + 4294967248 & 0xFFFFFFFF;
                        if (var_42 > 9) {
                            break;
                        }
                        var_90 = var_36 + 1;
                        var_91 = (var_0 * 10 & 0xFFFFFFFE) + var_42;
                        continue;
                    }
                    var_93 = var_23;
                    var_92 = var_22;
                    var_84 = var_7;
                    var_85 = var_5;
                    var_86 = var_6;
                    if (!((generic32_t) var_0 > 4294967295)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                var_26 = var_9 + 1;
                var_25 = var_26;
                var_24 = (generic64_t) *(generic8_t *) var_25;
                if ((var_24 + 4294967248 & 0xFFFFFFFE) > 9) {
                    generic8_t var_108;
                    var_108 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_26;
                    var_92 = var_25;
                    var_84 = var_7;
                    var_85 = var_5;
                    var_86 = var_6;
                    if (!(var_108)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                if (!(*(generic8_t *) (var_9 + 2) == '$')) {
                    generic8_t var_109;
                    var_109 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_26;
                    var_92 = var_25;
                    var_84 = var_7;
                    var_85 = var_5;
                    var_86 = var_6;
                    if (!(var_109)) {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                struct_16849604420174575025 *var_110;
                var_110 = stack_args.unnamed_field_at_offset_16;
                stack_args.unnamed_field_at_offset_40 = 1;
                generic64_t var_111;
                var_111 = var_9 + 3;
                *(generic32_t *) ((var_24 << 2) + (generic64_t) var_110 - 192) = 10;
                var_93 = var_111;
                var_92 = var_111;
                var_29 = var_93;
                var_94 = var_29;
                if (*var_92 == '.') {
                    var_44 = var_29 + 1;
                    if (!(*(generic8_t *) var_44 == '*')) {
                        var_96 = 0;
                        var_97 = var_14;
                        while (true) {
                            var_37 = var_96;
                            var_53 = var_97;
                            generic64_t var_112;
                            var_112 = var_44 + var_37;
                            var_18 = (generic64_t) *(generic8_t *) var_112 + 4294967248 & 0xFFFFFFFF;
                            var_94 = var_112;
                            if (var_18 > 9) {
                                break;
                            }
                            var_96 = var_37 + 1;
                            var_97 = (var_53 * 10 & 0xFFFFFFFE) + var_18;
                            continue;
                        }
                    }
                    var_21 = var_29 + 2;
                    var_20 = (generic64_t) *(generic8_t *) var_21;
                    if ((var_20 + 4294967248 & 0xFFFFFFFE) > 9) {
                        var_94 = var_21;
                        var_84 = var_7;
                        var_85 = var_5;
                        var_86 = var_6;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    if (!(*(generic8_t *) (var_29 + 3) == '$')) {
                        var_94 = var_21;
                        var_84 = var_7;
                        var_85 = var_5;
                        var_86 = var_6;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    *(generic32_t *) ((var_20 << 2) + (generic64_t) stack_args.unnamed_field_at_offset_16 - 192) = 10;
                    var_94 = var_29 + 4;
                }
                var_39 = var_94;
                var_19 = var_39 + 1;
                var_95 = 0;
                while (true) {
                    var_27 = var_95;
                    var_84 = var_7;
                    var_85 = var_5;
                    var_86 = var_6;
                    if ((generic32_t) *(generic8_t *) (var_39 + var_27) - 65 > 57) {
                        loop_state_var = 0;
                        break;
                    }
                    var_17 = var_19 + var_27;
                    var_54 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
                    var_16 = (generic32_t) var_54;
                    var_95 = var_27 + 1;
                    if (var_16 - 1 < 8) {
                        continue;
                    }
                    loop_state_var = 1;
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        loop_state_var = 0;
                        break_from_loop_106 = true;
                        break;
                    } break;
                    case 1:
                    {
                        var_84 = var_7;
                        var_85 = var_5;
                        var_86 = var_6;
                        switch (var_54) {
                            case 0:
                            {
                                loop_state_var = 0;
                                break_from_loop_106 = true;
                                break;
                            } break;
                            case 21:
                            {
                                var_84 = var_7;
                                var_85 = var_5;
                                var_86 = var_6;
                                var_98 = var_40;
                                if ((generic32_t) var_40 > 4294967295) {
                                    loop_state_var = 0;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                var_55 = var_7;
                                var_56 = var_17;
                                var_57 = var_5;
                                var_58 = var_98;
                                var_59 = var_6;
                                continue;
                            } break;
                            default:
                            {
                                if (!((generic32_t) var_40 > 4294967295)) {
                                    loop_state_var = 1;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                struct_16849604420174575025 *var_113;
                                var_113 = stack_args.unnamed_field_at_offset_16;
                                generic64_t var_114;
                                var_114 = var_40 << 32;
                                generic64_t var_115;
                                var_115 = stack_args.unnamed_field_at_offset_32;
                                *(generic32_t *) ((var_114 >> 30) + (generic64_t) var_113) = var_16;
                                generic64_t var_116;
                                var_116 = var_114 >> 28;
                                generic64_t var_117;
                                var_117 = var_116 + var_115;
                                generic64_t var_118;
                                var_118 = *(generic64_t *) var_117;
                                generic64_t var_119;
                                var_119 = *(generic64_t *) (var_117 + 8);
                                stack_args.unnamed_field_at_offset_72 = var_118;
                                stack_args.unnamed_field_at_offset_80 = var_119;
                                var_98 = var_116;
                                var_55 = var_7;
                                var_56 = var_17;
                                var_57 = var_5;
                                var_58 = var_98;
                                var_59 = var_6;
                                continue;
                            } break;
                        }
                        if (break_from_loop_106)
                            break;
                    } break;
                }
                if (break_from_loop_106)
                    break;
            } break;
            case 1:
            {
                loop_state_var = 1;
                break_from_loop_106 = true;
                break;
            } break;
            case 2:
            {
                loop_state_var = 2;
                break_from_loop_106 = true;
                break;
            } break;
        }
        if (break_from_loop_106)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            *(generic32_t *) var_100 = 4294967295;
            var_71 = var_84;
            var_72 = var_85;
            var_73 = var_86;
            generic64_t var_120;
            var_120 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_121 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_122 = build_PlainMetaAddress(var_73, var_71, var_72, var_120);
            __builtin_unreachable();
        } break;
        case 1:
        {
            *(generic32_t *) var_100 = 0;
            var_71 = var_7;
            var_72 = var_5;
            var_73 = var_6;
            generic64_t var_123;
            var_123 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_124 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_125 = build_PlainMetaAddress(var_73, var_71, var_72, var_123);
            __builtin_unreachable();
        } break;
        case 2:
        {
            while (true) {
                var_2 = var_74;
                var_35 = var_75;
                var_31 = var_76;
                var_13 = var_77;
                var_8 = var_78;
                var_50 = var_2 + 1;
                var_43 = stack_args.unnamed_field_at_offset_16;
                var_4 = *(generic32_t *) ((var_13 << 2) + (generic64_t) var_43);
                if (var_4 == 0) {
                    var_45 = (generic64_t) var_43 + (var_50 << 2);
                    var_80 = 0;
                    loop_state_var = 0;
                    break;
                }
                pop_arg(stack_args.unnamed_field_at_offset_8, (struct_12231053618952106340 *) (generic64_t) var_4, (struct_12618651705284700279 *) ((var_13 << 4) + stack_args.unnamed_field_at_offset_32));
                var_81 = 0;
                var_82 = 4;
                var_83 = 0;
                if (var_2 == 8) {
                    loop_state_var = 1;
                    break;
                }
                var_74 = var_50;
                var_75 = 0;
                var_76 = 4;
                var_77 = var_13 + 1;
                var_78 = 0;
                continue;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_33 = var_80;
                        var_81 = var_35;
                        var_82 = var_31;
                        var_83 = var_8;
                        if (var_50 + var_33 > 9) {
                            loop_state_var = 0;
                            break;
                        }
                        var_80 = var_33 + 1;
                        var_84 = var_35;
                        var_85 = var_31;
                        var_86 = var_8;
                        if (*(generic32_t *) (var_45 + (var_33 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 1;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) var_100 = 1;
                            var_71 = var_81;
                            var_72 = var_82;
                            var_73 = var_83;
                            generic64_t var_126;
                            var_126 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_127 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_128 = build_PlainMetaAddress(var_73, var_71, var_72, var_126);
                            __builtin_unreachable();
                        } break;
                        case 1:
                        {
                            *(generic32_t *) var_100 = 4294967295;
                            var_71 = var_84;
                            var_72 = var_85;
                            var_73 = var_86;
                            generic64_t var_129;
                            var_129 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_130 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_131 = build_PlainMetaAddress(var_73, var_71, var_72, var_129);
                            __builtin_unreachable();
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) var_100 = 1;
                    var_71 = var_81;
                    var_72 = var_82;
                    var_73 = var_83;
                    generic64_t var_132;
                    var_132 = stack_args.unnamed_field_at_offset_192;
                    artificial_struct_returned_by_build_PlainMetaAddress var_133 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_134 = build_PlainMetaAddress(var_73, var_71, var_72, var_132);
                    __builtin_unreachable();
                } break;
            }
        } break;
    }
}

generic64_t prefix_function_0x402e4d_Code_x86_64(generic64_t rsi, generic64_t rdi, struct_17525779123381774512 stack_args) {
    uint64_t loop_state_var;
    generic16_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic8_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic64_t var_7;
    generic16_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic16_t var_21;
    generic16_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic32_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic32_t var_31;
    generic16_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic8_t var_36;
    generic32_t var_37;
    generic32_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic16_t var_52;
    struct_1451936193171741701 *var_53;
    generic32_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic16_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic16_t var_60;
    generic64_t var_61;
    generic16_t var_62;
    generic64_t var_63;
    generic32_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic32_t var_73;
    generic64_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic64_t var_80;
    generic16_t var_81;
    generic16_t var_82;
    generic32_t var_83;
    generic16_t var_84;
    generic16_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic8_t *var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    struct_12231053618952106340 *var_99;
    var_99 = stack_args.unnamed_field_at_offset_72;
    generic64_t var_100;
    var_100 = (revng_init_local_sp()) + 4;
    *(generic8_t *) var_99 = *(generic8_t *) var_100;
    generic64_t var_101;
    var_101 = var_100;
    var_55 = init_pc_address_space();
    var_56 = 0 /* undef */;
    var_57 = init_pc_type();
    var_58 = var_99;
    var_59 = init_pc_epoch();
    while (true) {
        var_60 = var_55;
        var_61 = var_56;
        var_62 = var_57;
        var_63 = var_58;
        var_64 = var_59;
        while (true) {
            var_21 = var_60;
            var_29 = var_61;
            var_22 = var_62;
            var_31 = var_64;
            var_27 = *(generic32_t *) var_101;
            var_65 = var_21;
            var_66 = var_22;
            var_67 = var_63;
            var_68 = var_31;
            if (var_27 > 4294967295) {
                generic32_t var_102;
                var_102 = stack_args.unnamed_field_at_offset_0;
                generic64_t var_103;
                var_103 = (generic64_t) 2147483647 - var_27;
                *(generic32_t *) var_101 = var_27 + var_102;
                var_65 = var_21;
                var_66 = var_22;
                var_67 = var_103;
                var_68 = var_31;
                if (var_103 << 32 < (generic64_t) var_102 << 32) {
                    int32_t *var_104;
                    var_104 = prefix___errno_location();
                    *(generic32_t *) var_101 = 4294967295;
                    *var_104 = 75;
                    var_65 = 0;
                    var_66 = 4;
                    var_67 = var_104;
                    var_68 = 0;
                }
            }
            var_52 = var_65;
            var_8 = var_66;
            var_37 = var_68;
            var_69 = 0;
            var_70 = var_67;
            if (*(generic8_t *) var_29 == '\000') {
                var_74 = 0;
                var_75 = var_52;
                var_76 = var_8;
                var_77 = 1;
                var_78 = var_37;
                if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                    loop_state_var = 1;
                    break;
                }
                loop_state_var = 0;
                break;
            }
            while (true) {
                bool break_from_loop_105 = false;
                var_24 = var_69;
                var_12 = var_29 + var_24;
                generic8_t var_106;
                var_106 = *(generic8_t *) var_12;
                var_20 = var_70 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_106;
                switch (var_106) {
                    case 0:
                    case 37:
                    {
                        break_from_loop_105 = true;
                        break;
                    } break;
                    default:
                    {
                        var_69 = var_24 + 1;
                        var_70 = var_20;
                        continue;
                    } break;
                }
                if (break_from_loop_105)
                    break;
            }
            var_19 = var_12 + 1;
            var_79 = 0;
            while (true) {
                var_4 = var_79;
                var_51 = var_12 + var_4;
                var_50 = var_4 << 1;
                var_49 = var_12 + var_50;
                if ((*(generic8_t *) var_49 == '%') && (*(generic8_t *) (var_19 + var_50) == '%')) {
                    var_79 = var_4 + 1;
                    continue;
                }
                break;
            }
            var_45 = var_51 - var_29;
            stack_args.unnamed_field_at_offset_0 = (generic32_t) var_45;
            var_60 = var_52;
            var_61 = var_49;
            var_62 = var_8;
            var_63 = var_20;
            var_64 = var_37;
            if (!((var_45 & 0xFFFFFFFF) == 0)) {
                continue;
            }
            loop_state_var = 2;
            break;
        }
        bool break_from_loop_107 = false;
        switch (loop_state_var) {
            case 0:
            {
                loop_state_var = 1;
                break_from_loop_107 = true;
                break;
            } break;
            case 1:
            {
                loop_state_var = 2;
                break_from_loop_107 = true;
                break;
            } break;
            case 2:
            {
                var_44 = var_49 + 1;
                var_43 = (generic64_t) *(generic8_t *) var_44 + 4294967248 & 0xFFFFFFFF;
                var_87 = var_44;
                var_88 = 4294967295;
                if (!(var_43 > 9)) {
                    var_87 = var_44;
                    var_88 = 4294967295;
                    if (*(generic8_t *) (var_49 + 2) == '$') {
                        stack_args.unnamed_field_at_offset_40 = 1;
                        var_87 = var_49 + 3;
                        var_88 = var_43;
                    }
                }
                var_33 = var_87;
                var_34 = var_88;
                var_89 = 0;
                while (true) {
                    var_5 = var_89;
                    var_42 = var_33 + var_5;
                    var_3 = *(generic8_t *) var_42;
                    if (((generic64_t) var_3 + 4294967264 & 0xFFFFFFE0) == 0) {
                        uint32_t var_108 = compute_all_subl((generic32_t) var_3 - 63, 31);
                        if (!((0x12889 >> ((generic64_t) var_3 & 0x1F) & 0x1) == 0)) {
                            var_89 = var_5 + 1;
                            continue;
                        }
                    }
                    break;
                }
                var_90 = 0;
                var_91 = var_45;
                if (!(var_3 == '*')) {
                    while (true) {
                        var_26 = var_90;
                        var_1 = var_91;
                        var_14 = var_42 + var_26;
                        var_13 = var_14;
                        var_46 = (generic64_t) *(generic8_t *) var_13 + 4294967248 & 0xFFFFFFFF;
                        if (var_46 > 9) {
                            break;
                        }
                        var_90 = var_26 + 1;
                        var_91 = (var_1 * 10 & 0xFFFFFFFE) + var_46;
                        continue;
                    }
                    var_93 = var_14;
                    var_84 = var_52;
                    var_85 = var_8;
                    var_86 = var_37;
                    var_92 = var_13;
                    if (!((generic32_t) var_1 > 4294967295)) {
                        loop_state_var = 0;
                        break_from_loop_107 = true;
                        break;
                    }
                }
                var_17 = var_42 + 1;
                var_16 = var_17;
                var_15 = (generic64_t) *(generic8_t *) var_16;
                if ((var_15 + 4294967248 & 0xFFFFFFFE) > 9) {
                    generic8_t var_109;
                    var_109 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_17;
                    var_84 = var_52;
                    var_85 = var_8;
                    var_86 = var_37;
                    var_92 = var_16;
                    if (!(var_109)) {
                        loop_state_var = 0;
                        break_from_loop_107 = true;
                        break;
                    }
                }
                if (!(*(generic8_t *) (var_42 + 2) == '$')) {
                    generic8_t var_110;
                    var_110 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_93 = var_17;
                    var_84 = var_52;
                    var_85 = var_8;
                    var_86 = var_37;
                    var_92 = var_16;
                    if (!(var_110)) {
                        loop_state_var = 0;
                        break_from_loop_107 = true;
                        break;
                    }
                }
                struct_1451936193171741701 *var_111;
                var_111 = stack_args.unnamed_field_at_offset_16;
                stack_args.unnamed_field_at_offset_40 = 1;
                generic64_t var_112;
                var_112 = var_42 + 3;
                *(generic32_t *) ((var_15 << 2) + (generic64_t) var_111 - 192) = 10;
                var_93 = var_112;
                var_92 = var_112;
                var_7 = var_93;
                var_94 = var_7;
                if (*var_92 == '.') {
                    var_47 = var_7 + 1;
                    if (!(*(generic8_t *) var_47 == '*')) {
                        var_96 = 0;
                        var_97 = var_45;
                        while (true) {
                            var_2 = var_96;
                            var_30 = var_97;
                            generic64_t var_113;
                            var_113 = var_47 + var_2;
                            var_40 = (generic64_t) *(generic8_t *) var_113 + 4294967248 & 0xFFFFFFFF;
                            var_94 = var_113;
                            if (var_40 > 9) {
                                break;
                            }
                            var_96 = var_2 + 1;
                            var_97 = (var_30 * 10 & 0xFFFFFFFE) + var_40;
                            continue;
                        }
                    }
                    var_11 = var_7 + 2;
                    var_10 = (generic64_t) *(generic8_t *) var_11;
                    if ((var_10 + 4294967248 & 0xFFFFFFFE) > 9) {
                        var_84 = var_52;
                        var_85 = var_8;
                        var_86 = var_37;
                        var_94 = var_11;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_107 = true;
                            break;
                        }
                    }
                    if (!(*(generic8_t *) (var_7 + 3) == '$')) {
                        var_84 = var_52;
                        var_85 = var_8;
                        var_86 = var_37;
                        var_94 = var_11;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 0;
                            break_from_loop_107 = true;
                            break;
                        }
                    }
                    *(generic32_t *) ((var_10 << 2) + (generic64_t) stack_args.unnamed_field_at_offset_16 - 192) = 10;
                    var_94 = var_7 + 4;
                }
                var_25 = var_94;
                var_9 = var_25 + 1;
                var_95 = 0;
                while (true) {
                    var_35 = var_95;
                    var_84 = var_52;
                    var_85 = var_8;
                    var_86 = var_37;
                    if ((generic32_t) *(generic8_t *) (var_25 + var_35) - 65 > 57) {
                        loop_state_var = 0;
                        break;
                    }
                    var_39 = var_9 + var_35;
                    var_36 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
                    var_38 = (generic32_t) var_36;
                    var_95 = var_35 + 1;
                    if (var_38 - 1 < 8) {
                        continue;
                    }
                    loop_state_var = 1;
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        loop_state_var = 0;
                        break_from_loop_107 = true;
                        break;
                    } break;
                    case 1:
                    {
                        var_84 = var_52;
                        var_85 = var_8;
                        var_86 = var_37;
                        switch (var_36) {
                            case 0:
                            {
                                loop_state_var = 0;
                                break_from_loop_107 = true;
                                break;
                            } break;
                            case 21:
                            {
                                var_84 = var_52;
                                var_85 = var_8;
                                var_86 = var_37;
                                var_98 = var_34;
                                if ((generic32_t) var_34 > 4294967295) {
                                    loop_state_var = 0;
                                    break_from_loop_107 = true;
                                    break;
                                }
                                var_55 = var_52;
                                var_56 = var_39;
                                var_57 = var_8;
                                var_58 = var_98;
                                var_59 = var_37;
                                continue;
                            } break;
                            default:
                            {
                                if (!((generic32_t) var_34 > 4294967295)) {
                                    loop_state_var = 1;
                                    break_from_loop_107 = true;
                                    break;
                                }
                                struct_1451936193171741701 *var_114;
                                var_114 = stack_args.unnamed_field_at_offset_16;
                                generic64_t var_115;
                                var_115 = var_34 << 32;
                                generic64_t var_116;
                                var_116 = stack_args.unnamed_field_at_offset_32;
                                *(generic32_t *) ((var_115 >> 30) + (generic64_t) var_114) = var_38;
                                generic64_t var_117;
                                var_117 = var_115 >> 28;
                                generic64_t var_118;
                                var_118 = var_117 + var_116;
                                generic64_t var_119;
                                var_119 = *(generic64_t *) var_118;
                                generic64_t var_120;
                                var_120 = *(generic64_t *) (var_118 + 8);
                                stack_args.unnamed_field_at_offset_72 = var_119;
                                stack_args.unnamed_field_at_offset_80 = var_120;
                                var_98 = var_117;
                                var_55 = var_52;
                                var_56 = var_39;
                                var_57 = var_8;
                                var_58 = var_98;
                                var_59 = var_37;
                                continue;
                            } break;
                        }
                        if (break_from_loop_107)
                            break;
                    } break;
                }
                if (break_from_loop_107)
                    break;
            } break;
        }
        if (break_from_loop_107)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            *(generic32_t *) var_101 = 4294967295;
            var_71 = var_84;
            var_72 = var_85;
            var_73 = var_86;
            generic64_t var_121;
            var_121 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_122 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_123 = build_PlainMetaAddress(var_73, var_71, var_72, var_121);
            __builtin_unreachable();
        } break;
        case 1:
        {
            *(generic32_t *) var_101 = 0;
            var_71 = var_52;
            var_72 = var_8;
            var_73 = var_37;
            generic64_t var_124;
            var_124 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_125 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_126 = build_PlainMetaAddress(var_73, var_71, var_72, var_124);
            __builtin_unreachable();
        } break;
        case 2:
        {
            while (true) {
                var_41 = var_74;
                var_32 = var_75;
                var_0 = var_76;
                var_28 = var_77;
                var_54 = var_78;
                var_18 = var_41 + 1;
                var_53 = stack_args.unnamed_field_at_offset_16;
                var_6 = *(generic32_t *) ((var_28 << 2) + (generic64_t) var_53);
                if (var_6 == 0) {
                    var_48 = (generic64_t) var_53 + (var_18 << 2);
                    var_80 = 0;
                    loop_state_var = 0;
                    break;
                }
                pop_arg(stack_args.unnamed_field_at_offset_8, (struct_12231053618952106340 *) (generic64_t) var_6, (struct_12618651705284700279 *) ((var_28 << 4) + stack_args.unnamed_field_at_offset_32));
                var_81 = 0;
                var_82 = 4;
                var_83 = 0;
                if (var_41 == 8) {
                    loop_state_var = 1;
                    break;
                }
                var_74 = var_18;
                var_75 = 0;
                var_76 = 4;
                var_77 = var_28 + 1;
                var_78 = 0;
                continue;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_23 = var_80;
                        var_81 = var_32;
                        var_82 = var_0;
                        var_83 = var_54;
                        if (var_18 + var_23 > 9) {
                            loop_state_var = 1;
                            break;
                        }
                        var_80 = var_23 + 1;
                        var_84 = var_32;
                        var_85 = var_0;
                        var_86 = var_54;
                        if (*(generic32_t *) (var_48 + (var_23 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 0;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) var_101 = 4294967295;
                            var_71 = var_84;
                            var_72 = var_85;
                            var_73 = var_86;
                            generic64_t var_127;
                            var_127 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_128 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_129 = build_PlainMetaAddress(var_73, var_71, var_72, var_127);
                            __builtin_unreachable();
                        } break;
                        case 1:
                        {
                            break;
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) var_101 = 1;
                    var_71 = var_81;
                    var_72 = var_82;
                    var_73 = var_83;
                    generic64_t var_130;
                    var_130 = stack_args.unnamed_field_at_offset_192;
                    artificial_struct_returned_by_build_PlainMetaAddress var_131 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_132 = build_PlainMetaAddress(var_73, var_71, var_72, var_130);
                    __builtin_unreachable();
                } break;
            }
        } break;
    }
}

generic64_t prefix_function_0x402e5f_Code_x86_64(struct_17108008022882685490 stack_args) {
    uint64_t loop_state_var;
    generic64_t var_0;
    generic8_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic16_t var_4;
    generic32_t var_5;
    struct_11892291434676661713 *var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic32_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic8_t var_26;
    generic16_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic64_t var_36;
    generic64_t var_37;
    generic32_t var_38;
    generic16_t var_39;
    generic16_t var_40;
    generic64_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic32_t var_48;
    generic64_t var_49;
    generic16_t var_50;
    generic16_t var_51;
    generic64_t var_52;
    generic64_t var_53;
    generic32_t var_54;
    generic16_t var_55;
    generic64_t var_56;
    generic16_t var_57;
    generic64_t var_58;
    generic32_t var_59;
    generic16_t var_60;
    generic64_t var_61;
    generic16_t var_62;
    generic64_t var_63;
    generic32_t var_64;
    generic16_t var_65;
    generic16_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic16_t var_71;
    generic16_t var_72;
    generic32_t var_73;
    generic64_t var_74;
    generic16_t var_75;
    generic16_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic64_t var_80;
    generic16_t var_81;
    generic16_t var_82;
    generic32_t var_83;
    generic16_t var_84;
    generic16_t var_85;
    generic32_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic64_t var_91;
    generic8_t *var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic64_t var_97;
    generic64_t var_98;
    generic64_t var_99;
    var_99 = (revng_init_local_sp()) + 4;
    generic64_t var_100;
    var_100 = (generic64_t) *(generic32_t *) var_99;
    *stack_args.unnamed_field_at_offset_72 = var_100;
    var_55 = init_pc_address_space();
    var_56 = 0 /* undef */;
    var_57 = init_pc_type();
    var_58 = var_100;
    var_59 = init_pc_epoch();
    while (true) {
        var_60 = var_55;
        var_61 = var_56;
        var_62 = var_57;
        var_63 = var_58;
        var_64 = var_59;
        while (true) {
            var_4 = var_60;
            var_53 = var_61;
            var_40 = var_62;
            var_38 = var_64;
            var_18 = *(generic32_t *) var_99;
            var_65 = var_4;
            var_66 = var_40;
            var_67 = var_63;
            var_68 = var_38;
            if (var_18 > 4294967295) {
                generic32_t var_101;
                var_101 = stack_args.unnamed_field_at_offset_0;
                generic64_t var_102;
                var_102 = (generic64_t) 2147483647 - var_18;
                *(generic32_t *) var_99 = var_18 + var_101;
                var_65 = var_4;
                var_66 = var_40;
                var_67 = var_102;
                var_68 = var_38;
                if (var_102 << 32 < (generic64_t) var_101 << 32) {
                    int32_t *var_103;
                    var_103 = prefix___errno_location();
                    *(generic32_t *) var_99 = 4294967295;
                    *var_103 = 75;
                    var_65 = 0;
                    var_66 = 4;
                    var_67 = var_103;
                    var_68 = 0;
                }
            }
            var_39 = var_65;
            var_51 = var_66;
            var_21 = var_68;
            var_69 = 0;
            var_70 = var_67;
            if (*(generic8_t *) var_53 == '\000') {
                var_74 = 0;
                var_75 = var_39;
                var_76 = var_51;
                var_77 = 1;
                var_78 = var_21;
                if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                    loop_state_var = 1;
                    break;
                }
                loop_state_var = 0;
                break;
            }
            while (true) {
                bool break_from_loop_104 = false;
                var_20 = var_69;
                var_17 = var_53 + var_20;
                generic8_t var_105;
                var_105 = *(generic8_t *) var_17;
                var_46 = var_70 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_105;
                switch (var_105) {
                    case 0:
                    case 37:
                    {
                        break_from_loop_104 = true;
                        break;
                    } break;
                    default:
                    {
                        var_69 = var_20 + 1;
                        var_70 = var_46;
                        continue;
                    } break;
                }
                if (break_from_loop_104)
                    break;
            }
            var_45 = var_17 + 1;
            var_79 = 0;
            while (true) {
                var_30 = var_79;
                var_43 = var_17 + var_30;
                var_42 = var_30 << 1;
                var_41 = var_17 + var_42;
                if ((*(generic8_t *) var_41 == '%') && (*(generic8_t *) (var_45 + var_42) == '%')) {
                    var_79 = var_30 + 1;
                    continue;
                }
                break;
            }
            var_7 = var_43 - var_53;
            stack_args.unnamed_field_at_offset_0 = (generic32_t) var_7;
            var_60 = var_39;
            var_61 = var_41;
            var_62 = var_51;
            var_63 = var_46;
            var_64 = var_21;
            if (!((var_7 & 0xFFFFFFFF) == 0)) {
                continue;
            }
            loop_state_var = 2;
            break;
        }
        bool break_from_loop_106 = false;
        switch (loop_state_var) {
            case 0:
            {
                loop_state_var = 0;
                break_from_loop_106 = true;
                break;
            } break;
            case 1:
            {
                loop_state_var = 1;
                break_from_loop_106 = true;
                break;
            } break;
            case 2:
            {
                var_16 = var_41 + 1;
                var_15 = (generic64_t) *(generic8_t *) var_16 + 4294967248 & 0xFFFFFFFF;
                var_87 = var_16;
                var_88 = 4294967295;
                if (!(var_15 > 9)) {
                    var_87 = var_16;
                    var_88 = 4294967295;
                    if (*(generic8_t *) (var_41 + 2) == '$') {
                        stack_args.unnamed_field_at_offset_40 = 1;
                        var_87 = var_41 + 3;
                        var_88 = var_15;
                    }
                }
                var_24 = var_87;
                var_47 = var_88;
                var_89 = 0;
                while (true) {
                    var_29 = var_89;
                    var_14 = var_24 + var_29;
                    var_1 = *(generic8_t *) var_14;
                    if (((generic64_t) var_1 + 4294967264 & 0xFFFFFFE0) == 0) {
                        uint32_t var_107 = compute_all_subl((generic32_t) var_1 - 63, 31);
                        if (!((0x12889 >> ((generic64_t) var_1 & 0x1F) & 0x1) == 0)) {
                            var_89 = var_29 + 1;
                            continue;
                        }
                    }
                    break;
                }
                var_90 = 0;
                var_91 = var_7;
                if (!(var_1 == '*')) {
                    while (true) {
                        var_2 = var_90;
                        var_23 = var_91;
                        var_37 = var_14 + var_2;
                        var_36 = var_37;
                        var_8 = (generic64_t) *(generic8_t *) var_36 + 4294967248 & 0xFFFFFFFF;
                        if (var_8 > 9) {
                            break;
                        }
                        var_90 = var_2 + 1;
                        var_91 = (var_23 * 10 & 0xFFFFFFFE) + var_8;
                        continue;
                    }
                    var_92 = var_36;
                    var_93 = var_37;
                    var_84 = var_39;
                    var_85 = var_51;
                    var_86 = var_21;
                    if (!((generic32_t) var_23 > 4294967295)) {
                        loop_state_var = 2;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                var_13 = var_14 + 1;
                var_12 = var_13;
                var_11 = (generic64_t) *(generic8_t *) var_12;
                if ((var_11 + 4294967248 & 0xFFFFFFFE) > 9) {
                    generic8_t var_108;
                    var_108 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_92 = var_12;
                    var_93 = var_13;
                    var_84 = var_39;
                    var_85 = var_51;
                    var_86 = var_21;
                    if (!(var_108)) {
                        loop_state_var = 2;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                if (!(*(generic8_t *) (var_14 + 2) == '$')) {
                    generic8_t var_109;
                    var_109 = stack_args.unnamed_field_at_offset_40 == 0;
                    var_92 = var_12;
                    var_93 = var_13;
                    var_84 = var_39;
                    var_85 = var_51;
                    var_86 = var_21;
                    if (!(var_109)) {
                        loop_state_var = 2;
                        break_from_loop_106 = true;
                        break;
                    }
                }
                struct_11892291434676661713 *var_110;
                var_110 = stack_args.unnamed_field_at_offset_16;
                stack_args.unnamed_field_at_offset_40 = 1;
                generic64_t var_111;
                var_111 = var_14 + 3;
                *(generic32_t *) ((var_11 << 2) + (generic64_t) var_110 - 192) = 10;
                var_92 = var_111;
                var_93 = var_111;
                var_49 = var_93;
                var_94 = var_49;
                if (*var_92 == '.') {
                    var_9 = var_49 + 1;
                    if (!(*(generic8_t *) var_9 == '*')) {
                        var_96 = 0;
                        var_97 = var_7;
                        while (true) {
                            var_19 = var_96;
                            var_25 = var_97;
                            generic64_t var_112;
                            var_112 = var_9 + var_19;
                            var_32 = (generic64_t) *(generic8_t *) var_112 + 4294967248 & 0xFFFFFFFF;
                            var_94 = var_112;
                            if (var_32 > 9) {
                                break;
                            }
                            var_96 = var_19 + 1;
                            var_97 = (var_25 * 10 & 0xFFFFFFFE) + var_32;
                            continue;
                        }
                    }
                    var_35 = var_49 + 2;
                    var_34 = (generic64_t) *(generic8_t *) var_35;
                    if ((var_34 + 4294967248 & 0xFFFFFFFE) > 9) {
                        var_94 = var_35;
                        var_84 = var_39;
                        var_85 = var_51;
                        var_86 = var_21;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 2;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    if (!(*(generic8_t *) (var_49 + 3) == '$')) {
                        var_94 = var_35;
                        var_84 = var_39;
                        var_85 = var_51;
                        var_86 = var_21;
                        if (!(stack_args.unnamed_field_at_offset_40 == 0)) {
                            loop_state_var = 2;
                            break_from_loop_106 = true;
                            break;
                        }
                    }
                    *(generic32_t *) ((var_34 << 2) + (generic64_t) stack_args.unnamed_field_at_offset_16 - 192) = 10;
                    var_94 = var_49 + 4;
                }
                var_28 = var_94;
                var_33 = var_28 + 1;
                var_95 = 0;
                while (true) {
                    var_52 = var_95;
                    var_84 = var_39;
                    var_85 = var_51;
                    var_86 = var_21;
                    if ((generic32_t) *(generic8_t *) (var_28 + var_52) - 65 > 57) {
                        loop_state_var = 1;
                        break;
                    }
                    var_31 = var_33 + var_52;
                    var_26 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.states;
                    var_54 = (generic32_t) var_26;
                    var_95 = var_52 + 1;
                    if (var_54 - 1 < 8) {
                        continue;
                    }
                    loop_state_var = 0;
                    break;
                }
                switch (loop_state_var) {
                    case 0:
                    {
                        var_84 = var_39;
                        var_85 = var_51;
                        var_86 = var_21;
                        switch (var_26) {
                            case 0:
                            {
                                loop_state_var = 2;
                                break_from_loop_106 = true;
                                break;
                            } break;
                            case 21:
                            {
                                var_98 = var_47;
                                var_84 = var_39;
                                var_85 = var_51;
                                var_86 = var_21;
                                if ((generic32_t) var_47 > 4294967295) {
                                    loop_state_var = 2;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                var_55 = var_39;
                                var_56 = var_31;
                                var_57 = var_51;
                                var_58 = var_98;
                                var_59 = var_21;
                                continue;
                            } break;
                            default:
                            {
                                if (!((generic32_t) var_47 > 4294967295)) {
                                    loop_state_var = 0;
                                    break_from_loop_106 = true;
                                    break;
                                }
                                struct_11892291434676661713 *var_113;
                                var_113 = stack_args.unnamed_field_at_offset_16;
                                generic64_t var_114;
                                var_114 = var_47 << 32;
                                generic64_t var_115;
                                var_115 = stack_args.unnamed_field_at_offset_32;
                                *(generic32_t *) ((var_114 >> 30) + (generic64_t) var_113) = var_54;
                                generic64_t var_116;
                                var_116 = var_114 >> 28;
                                generic64_t var_117;
                                var_117 = var_116 + var_115;
                                generic64_t var_118;
                                var_118 = *(generic64_t *) var_117;
                                generic64_t var_119;
                                var_119 = *(generic64_t *) (var_117 + 8);
                                stack_args.unnamed_field_at_offset_72 = var_118;
                                stack_args.unnamed_field_at_offset_80 = var_119;
                                var_98 = var_116;
                                var_55 = var_39;
                                var_56 = var_31;
                                var_57 = var_51;
                                var_58 = var_98;
                                var_59 = var_21;
                                continue;
                            } break;
                        }
                        if (break_from_loop_106)
                            break;
                    } break;
                    case 1:
                    {
                        loop_state_var = 2;
                        break_from_loop_106 = true;
                        break;
                    } break;
                }
                if (break_from_loop_106)
                    break;
            } break;
        }
        if (break_from_loop_106)
            break;
    }
    switch (loop_state_var) {
        case 0:
        {
            *(generic32_t *) var_99 = 0;
            var_71 = var_39;
            var_72 = var_51;
            var_73 = var_21;
            generic64_t var_120;
            var_120 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_121 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_122 = build_PlainMetaAddress(var_73, var_71, var_72, var_120);
            __builtin_unreachable();
        } break;
        case 1:
        {
            while (true) {
                var_3 = var_74;
                var_27 = var_75;
                var_50 = var_76;
                var_0 = var_77;
                var_5 = var_78;
                var_44 = var_3 + 1;
                var_6 = stack_args.unnamed_field_at_offset_16;
                var_48 = *(generic32_t *) ((var_0 << 2) + (generic64_t) var_6);
                if (var_48 == 0) {
                    var_10 = (generic64_t) var_6 + (var_44 << 2);
                    var_80 = 0;
                    loop_state_var = 0;
                    break;
                }
                pop_arg(stack_args.unnamed_field_at_offset_8, (struct_12231053618952106340 *) (generic64_t) var_48, (struct_12618651705284700279 *) ((var_0 << 4) + stack_args.unnamed_field_at_offset_32));
                var_81 = 0;
                var_82 = 4;
                var_83 = 0;
                if (var_3 == 8) {
                    loop_state_var = 1;
                    break;
                }
                var_74 = var_44;
                var_75 = 0;
                var_76 = 4;
                var_77 = var_0 + 1;
                var_78 = 0;
                continue;
            }
            switch (loop_state_var) {
                case 0:
                {
                    while (true) {
                        var_22 = var_80;
                        var_81 = var_27;
                        var_82 = var_50;
                        var_83 = var_5;
                        if (var_44 + var_22 > 9) {
                            loop_state_var = 0;
                            break;
                        }
                        var_84 = var_27;
                        var_85 = var_50;
                        var_86 = var_5;
                        var_80 = var_22 + 1;
                        if (*(generic32_t *) (var_10 + (var_22 << 2)) == 0) {
                            continue;
                        }
                        loop_state_var = 1;
                        break;
                    }
                    switch (loop_state_var) {
                        case 0:
                        {
                            *(generic32_t *) var_99 = 1;
                            var_71 = var_81;
                            var_72 = var_82;
                            var_73 = var_83;
                            generic64_t var_123;
                            var_123 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_124 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_125 = build_PlainMetaAddress(var_73, var_71, var_72, var_123);
                            __builtin_unreachable();
                        } break;
                        case 1:
                        {
                            *(generic32_t *) var_99 = 4294967295;
                            var_71 = var_84;
                            var_72 = var_85;
                            var_73 = var_86;
                            generic64_t var_126;
                            var_126 = stack_args.unnamed_field_at_offset_192;
                            artificial_struct_returned_by_build_PlainMetaAddress var_127 = build_PlainMetaAddress(0, 0, 0, 0);
                            artificial_struct_returned_by_build_PlainMetaAddress var_128 = build_PlainMetaAddress(var_73, var_71, var_72, var_126);
                            __builtin_unreachable();
                        } break;
                    }
                } break;
                case 1:
                {
                    *(generic32_t *) var_99 = 1;
                    var_71 = var_81;
                    var_72 = var_82;
                    var_73 = var_83;
                    generic64_t var_129;
                    var_129 = stack_args.unnamed_field_at_offset_192;
                    artificial_struct_returned_by_build_PlainMetaAddress var_130 = build_PlainMetaAddress(0, 0, 0, 0);
                    artificial_struct_returned_by_build_PlainMetaAddress var_131 = build_PlainMetaAddress(var_73, var_71, var_72, var_129);
                    __builtin_unreachable();
                } break;
            }
        } break;
        case 2:
        {
            *(generic32_t *) var_99 = 4294967295;
            var_71 = var_84;
            var_72 = var_85;
            var_73 = var_86;
            generic64_t var_132;
            var_132 = stack_args.unnamed_field_at_offset_192;
            artificial_struct_returned_by_build_PlainMetaAddress var_133 = build_PlainMetaAddress(0, 0, 0, 0);
            artificial_struct_returned_by_build_PlainMetaAddress var_134 = build_PlainMetaAddress(var_73, var_71, var_72, var_132);
            __builtin_unreachable();
        } break;
    }
}

int32_t vfprintf(typedef_13961186704558040277 f, typedef_13260647459820579882 fmt, prefix___va_list_tag *ap) {
    struct_75866045404981507 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    uint32_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    var_6 = 0;
    while (true) {
        var_1 = var_6;
        if (var_1 == 10) {
            break;
        }
        *(generic32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_0.unnamed_field_14 = 0;
        var_6 = var_1 + 1;
        continue;
    }
    void *var_11;
    var_11 = ap->overflow_arg_area;
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = *(generic64_t *) &ap->gp_offset;
    *(void **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24) = var_11;
    *(void **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32) = ap->reg_save_area;
    int32_t var_12;
    var_12 = printf_core((FILE *) 0, (int8_t const *) fmt, (va_list *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16), (arg *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40 + 120), (int32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_0.unnamed_field_14);
    var_7 = 4294967295;
    if ((generic32_t) var_12 > 4294967295) {
        var_8 = 0;
        if ((generic32_t) ((FILE *) f)->lock > 4294967295) {
            int32_t var_13;
            var_13 = prefix___lockfile((FILE *) f);
            var_8 = (generic64_t) var_13 & 0xFFFFFFFF;
        }
        var_0 = var_8;
        var_3 = ((FILE *) f)->flags;
        int8_t var_14;
        var_14 = ((FILE *) f)->mode;
        *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 12) = (generic32_t) var_3 & 0x20;
        if (!((generic8_t) var_14 > '\000')) {
            ((FILE *) f)->flags = (generic32_t) var_3 & 0xFFFFFFDF;
        }
        var_9 = 0;
        if ((generic64_t) ((FILE *) f)->buf_size == 0) {
            uint8_t *var_15;
            var_15 = ((FILE *) f)->buf;
            ((FILE *) f)->buf_size = 80;
            ((FILE *) f)->buf = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_31.unnamed_field_2.unnamed_field_at_offset_9;
            ((FILE *) f)->wbase = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_31.unnamed_field_2.unnamed_field_at_offset_9;
            ((FILE *) f)->wpos = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_31.unnamed_field_2.unnamed_field_at_offset_9;
            ((FILE *) f)->wend = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_120;
            var_9 = var_15;
        }
        var_2 = var_9;
        int32_t var_16;
        var_16 = printf_core((FILE *) f, (int8_t const *) fmt, (va_list *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16), (arg *) ((generic64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40 + 120), (int32_t *) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_0.unnamed_field_14);
        var_5 = (generic64_t) var_16 & 0xFFFFFFFF;
        var_10 = var_5;
        if (!(var_2 == 0)) {
            artificial_struct_returned_by_rawfunction_10449372223158023403 var_17 = ((function_type_rawfunction_10449372223158023403 *) ((FILE *) f)->write)(((pointer_or_number64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_120), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) &((FILE *) f)->flags), ((pointer_or_number64_t) &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_40.unnamed_field_at_offset_0.unnamed_field_19), ((pointer_or_number64_t) (init_r9())));
            uint8_t *var_18;
            var_18 = ((FILE *) f)->wpos;
            ((FILE *) f)->buf = var_2;
            ((FILE *) f)->buf_size = 0;
            ((FILE *) f)->wend = 0;
            ((FILE *) f)->wbase = 0;
            ((FILE *) f)->wpos = 0;
            var_10 = (generic64_t) var_18 == 0 ? 4294967295 : var_5;
        }
        uint32_t var_19;
        var_19 = ((FILE *) f)->flags;
        generic32_t var_20;
        var_20 = *(generic32_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 12);
        var_4 = ((generic32_t) var_19 & 0x20) == 0 ? var_10 & 0xFFFFFFFF : 4294967295;
        ((FILE *) f)->flags = var_20 | (generic32_t) var_19;
        var_7 = var_4;
        if (!(var_0 == 0)) {
            prefix___unlockfile((FILE *) f);
            var_7 = var_4;
        }
    }
    return (int32_t) (var_7 & 0xFFFFFFFF);
}

void *memchr(void const *src, int32_t c, size_t n) {
    uint64_t loop_state_var;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    var_26 = (generic64_t) c;
    generic64_t var_27;
    var_27 = revng_init_local_sp();
    var_18 = src;
    var_19 = n;
    if (!(((generic64_t) src & 0x7) == 0)) {
        var_20 = 0;
        if ((generic64_t) n == 0) {
            return (void *) var_20;
        }
        var_15 = (generic64_t) n + (generic64_t) src;
        var_14 = (generic64_t) src + 1;
        var_21 = 0;
        while (true) {
            var_17 = var_21;
            generic64_t var_28;
            var_28 = var_17 + (generic64_t) src;
            var_11 = var_14 + var_17;
            var_20 = var_28;
            if (((generic64_t) *(generic8_t *) var_28 - (var_26 & 0xFF) & 0xFFFFFFFF) == 0) {
                loop_state_var = 1;
            } else {
                if ((var_11 & 0x7) == 0) {
                    var_18 = var_11;
                    var_19 = var_15 - var_11;
                    loop_state_var = 0;
                    break;
                }
                var_20 = 0;
                var_21 = var_17 + 1;
                if (!(var_15 == var_11)) {
                    continue;
                }
                loop_state_var = 1;
            }
            break;
        }
        switch (loop_state_var) {
            case 0:
            {
                break;
            } break;
            case 1:
            {
                return (void *) var_20;
            } break;
        }
    }
    var_7 = var_18;
    var_0 = var_19;
    var_20 = 0;
    generic8_t var_29;
    var_29 = *(generic8_t *) var_7;
    var_12 = var_26 & 0xFF;
    var_20 = var_7;
    if ((!(var_0 == 0)) && (!(((generic64_t) var_29 - var_12 & 0xFFFFFFFF) == 0))) {
        var_10 = var_12 * 72340172838076673;
        var_23 = var_7;
        var_24 = var_0;
        if (var_0 > 7) {
            var_13 = var_7 + 8;
            var_4 = var_0 - 8;
            var_22 = 0;
            while (true) {
                var_16 = var_22;
                var_5 = var_16 * -8;
                var_9 = var_16 << 3;
                generic64_t var_30;
                var_30 = var_7 + var_9;
                generic64_t var_31;
                var_31 = *(generic64_t *) var_30 ^ var_10;
                var_23 = var_30;
                var_24 = var_0 + var_5;
                if ((var_31 - 72340172838076673 & ~var_31 & 0x8080808080808080) == 0) {
                    var_8 = var_4 + var_5;
                    var_22 = var_16 + 1;
                    if (var_8 > 7) {
                        continue;
                    }
                    var_20 = 0;
                    var_23 = var_13 + var_9;
                    var_24 = var_8;
                    if (var_8 == 0) {
                        loop_state_var = 1;
                        break;
                    }
                    loop_state_var = 0;
                } else {
                    loop_state_var = 0;
                }
                break;
            }
            switch (loop_state_var) {
                case 0:
                {
                    break;
                } break;
                case 1:
                {
                    return (void *) var_20;
                } break;
            }
        }
        var_3 = var_23;
        var_2 = var_3 + var_24;
        var_1 = var_3 + 1;
        var_25 = 0;
        while (true) {
            var_6 = var_25;
            generic64_t var_32;
            var_32 = var_3 + var_6;
            var_20 = var_32;
            var_20 = 0;
            var_25 = var_6 + 1;
            if ((!(((generic64_t) *(generic8_t *) var_32 - var_12 & 0xFFFFFFFF) == 0)) && (!(var_1 + var_6 == var_2))) {
                continue;
            }
            break;
        }
    }
    return (void *) var_20;
}

struct_12231053618952106340 *memset(struct_12231053618952106340 *rdx, generic64_t rsi, struct_12231053618952106340 *rdi) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    var_9 = revng_init_local_sp();
    generic8_t var_10;
    var_10 = (generic8_t) rsi;
    generic64_t var_11;
    var_11 = (rsi & 0xFF) * 72340172838076673;
    if ((generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 > 126) {
        *(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 + (generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19 - 8) = var_11;
        var_6 = &rdi->unnamed_field_at_offset_0.unnamed_field_19;
        var_7 = &rdx->unnamed_field_at_offset_0.unnamed_field_19;
        if (!(((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19 & 0xF) == 0)) {
            *(generic64_t *) &rdi->unnamed_field_at_offset_0.unnamed_field_14 = var_11;
            *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_14 + 8) = var_11;
            var_6 = &rdi->unnamed_field_at_offset_0.unnamed_field_19;
            var_7 = (generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 - (0 - (generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19 & 0xF);
        }
        var_2 = var_6;
        var_5 = var_7 >> 3;
        var_4 = (generic64_t) (init_state_0x82fc()) << 3;
        var_8 = 0;
        while (true) {
            var_3 = var_8;
            if (var_5 == var_3) {
                break;
            }
            *(generic64_t *) (var_2 + var_4 * var_3) = var_11;
            var_8 = var_3 + 1;
            continue;
        }
    }
    var_1 = (generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 & 0xFFFFFFFF;
    if (!(var_1 == 0)) {
        *(generic8_t *) &rdi->unnamed_field_at_offset_0.unnamed_field_18 = var_10;
        var_0 = (generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 + (generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19;
        *(generic8_t *) (var_0 - 1) = var_10;
        if (var_1 > 2) {
            generic16_t var_12;
            var_12 = (generic16_t) var_11;
            *(generic16_t *) ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_18 + 1) = var_12;
            *(generic16_t *) (var_0 - 3) = var_12;
            if (var_1 > 6) {
                generic32_t var_13;
                var_13 = (generic32_t) var_11;
                *(generic32_t *) ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_14 + 3) = var_13;
                *(generic32_t *) (var_0 - 7) = var_13;
                if (var_1 > 14) {
                    *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_14 + 7) = var_11;
                    *(generic64_t *) (var_0 - 15) = var_11;
                    if (var_1 > 30) {
                        *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_14 + 15) = var_11;
                        rdi->unnamed_field_at_offset_0.unnamed_field_10.unnamed_field_at_offset_23 = var_11;
                        *(generic64_t *) (var_0 - 31) = var_11;
                        *(generic64_t *) (var_0 - 23) = var_11;
                        if (var_1 > 62) {
                            *(generic64_t *) &rdi->unnamed_field_at_offset_31.unnamed_field_7 = var_11;
                            *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_31.unnamed_field_7 + 8) = var_11;
                            *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_31.unnamed_field_5 + 16) = var_11;
                            *(generic64_t *) ((generic64_t) &rdi->unnamed_field_at_offset_31.unnamed_field_1 + 24) = var_11;
                            *(generic64_t *) (var_0 - 63) = var_11;
                            *(generic64_t *) (var_0 - 55) = var_11;
                            *(generic64_t *) (var_0 - 47) = var_11;
                            *(generic64_t *) (var_0 - 39) = var_11;
                        }
                    }
                }
            }
        }
    }
    return rdi;
}

size_t strlen(int8_t const *s) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    var_12 = revng_init_local_sp();
    var_8 = s;
    if (!(((generic64_t) s & 0x7) == 0)) {
        var_3 = (generic64_t) s + 1;
        var_7 = 0;
        while (true) {
            var_0 = var_7;
            if (!(*(generic8_t *) (var_0 + (generic64_t) s) == '\000')) {
                generic64_t var_13;
                var_13 = var_3 + var_0;
                var_7 = var_0 + 1;
                var_8 = var_13;
                if (!((var_13 & 0x7) == 0)) {
                    continue;
                }
                break;
            }
            return (size_t) var_0;
        }
    }
    var_4 = var_8;
    generic64_t var_14;
    var_14 = *(generic64_t *) var_4;
    var_9 = var_4;
    if ((var_14 - 72340172838076673 & ~var_14 & 0x8080808080808080) == 0) {
        var_2 = var_4 + 8;
        var_11 = 0;
        while (true) {
            generic64_t var_15;
            var_15 = var_11;
            generic64_t var_16;
            var_16 = var_2 + (var_15 << 3);
            generic64_t var_17;
            var_17 = *(generic64_t *) var_16;
            var_9 = var_16;
            var_11 = var_15 + 1;
            if ((var_17 - 72340172838076673 & ~var_17 & 0x8080808080808080) == 0) {
                continue;
            }
            break;
        }
    }
    var_6 = var_9;
    var_10 = 0;
    while (true) {
        var_5 = var_10;
        var_1 = var_6 + var_5;
        if (*(generic8_t *) var_1 == '\000') {
            break;
        }
        var_10 = var_5 + 1;
        continue;
    }
    return (size_t) (var_1 - (generic64_t) s);
}

struct_9248848853126295176 *prefix___copy_tls(struct_9248848853126295176 *rdi) {
    if (*(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls == 0) {
        return rdi;
    }
    generic64_t var_0;
    var_0 = *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls[24];
    rdi->unnamed_field_at_offset_0.unnamed_field_1 = 1;
    generic64_t var_1;
    var_1 = *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls;
    generic64_t var_2;
    var_2 = (generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_1 & 0 - var_0;
    generic64_t var_3;
    var_3 = *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 8);
    generic64_t var_4;
    var_4 = var_2 - *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 16);
    *(struct_9248848853126295176 ***) (var_2 + 8) = &rdi->unnamed_field_at_offset_0.unnamed_field_1;
    *(struct_9248848853126295176 ***) (var_2 + 328) = &rdi->unnamed_field_at_offset_0.unnamed_field_1;
    rdi->unnamed_field_at_offset_8 = var_4;
    generic64_t var_5;
    var_5 = memcpy((struct_12231053618952106340 *) var_3, (struct_12231053618952106340 *) var_1, var_4);
    return (struct_9248848853126295176 *) var_2;
}

void prefix___init_tls(size_t *aux) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic32_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic32_t var_22;
    struct_9248848853126295176 *var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic32_t var_34;
    generic32_t var_35;
    generic64_t var_36;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic32_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic32_t var_45;
    generic32_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic32_t var_50;
    generic32_t var_51;
    generic64_t var_52;
    generic64_t var_53;
    generic32_t var_54;
    generic64_t var_55;
    generic32_t var_56;
    generic32_t var_57;
    generic32_t var_58;
    generic32_t var_59;
    generic32_t var_60;
    generic32_t var_61;
    generic32_t var_62;
    generic32_t var_63;
    generic8_t var_64;
    generic32_t var_65;
    generic64_t var_66;
    generic32_t var_67;
    generic64_t var_68;
    generic64_t var_69;
    generic64_t var_70;
    generic64_t var_71;
    generic64_t var_72;
    generic32_t var_73;
    generic32_t var_74;
    generic32_t var_75;
    generic64_t var_76;
    generic64_t var_77;
    generic32_t var_78;
    generic64_t var_79;
    generic32_t var_80;
    generic32_t var_81;
    generic32_t var_82;
    generic32_t var_83;
    generic32_t var_84;
    generic32_t var_85;
    generic32_t var_86;
    generic32_t var_87;
    generic8_t var_88;
    generic32_t var_89;
    generic64_t var_90;
    generic32_t var_91;
    generic64_t var_92;
    generic64_t var_93;
    generic64_t var_94;
    generic64_t var_95;
    generic64_t var_96;
    generic32_t var_97;
    generic64_t var_98;
    var_98 = init_state_0x83f8();
    generic64_t var_99;
    var_99 = init_state_0x8340();
    generic32_t var_100;
    var_100 = init_state_0x9080();
    generic64_t var_101;
    var_101 = init_state_0x83d0();
    generic32_t var_102;
    var_102 = init_state_0x8248();
    generic64_t var_103;
    var_103 = init_state_0x83a0();
    generic64_t var_104;
    var_104 = init_state_0x8388();
    generic32_t var_105;
    var_105 = init_state_0x83a8();
    generic32_t var_106;
    var_106 = init_state_0x83d8();
    generic64_t var_107;
    var_107 = init_state_0x9018();
    generic32_t var_108;
    var_108 = init_state_0x9010();
    generic64_t var_109;
    var_109 = init_state_0x8408();
    generic64_t var_110;
    var_110 = init_state_0x8328();
    generic64_t var_111;
    var_111 = init_state_0x8370();
    generic64_t var_112;
    var_112 = init_state_0x82d8();
    generic32_t var_113;
    var_113 = init_state_0x8300();
    generic64_t var_114;
    var_114 = init_state_0x8358();
    generic64_t var_115;
    var_115 = init_state_0x8310();
    generic32_t var_116;
    var_116 = init_state_0x8334();
    generic32_t var_117;
    var_117 = init_state_0x834c();
    generic64_t var_118;
    var_118 = *(generic64_t *) ((generic64_t) aux + 24);
    var_25 = 0;
    var_26 = init_r9();
    var_27 = 0;
    var_28 = var_118;
    var_29 = 0;
    while (true) {
        var_21 = var_25;
        var_20 = var_26;
        var_11 = var_27;
        var_3 = var_28;
        var_13 = var_29;
        if (*(generic64_t *) ((generic64_t) aux + 40) == var_21) {
            break;
        }
        var_19 = *(generic32_t *) var_3;
        var_16 = (generic64_t) var_19;
        if (var_19 == 6) {
            var_31 = var_118 - *(generic64_t *) (var_3 + 16);
            var_32 = var_11;
        } else {
            var_31 = var_13;
            var_32 = var_19 == 7 ? var_3 : var_11;
        }
        var_25 = var_21 + 1;
        var_26 = var_16;
        var_27 = var_32;
        var_28 = var_3 + *(generic64_t *) ((generic64_t) aux + 32);
        var_29 = var_31;
        continue;
    }
    if (var_11 == 0) {
        var_30 = *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls[24];
    } else {
        generic64_t var_119;
        var_119 = *(generic64_t *) (var_11 + 32);
        *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls = var_13 + *(generic64_t *) (var_11 + 16);
        *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 8) = var_119;
        generic64_t var_120;
        var_120 = *(generic64_t *) (var_11 + 40);
        generic64_t var_121;
        var_121 = *(generic64_t *) (var_11 + 48);
        *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 16) = var_120;
        *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls[24] = var_121;
        var_30 = var_121;
    }
    generic64_t var_122;
    var_122 = var_30;
    var_5 = *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 16);
    var_14 = (var_122 - 1 & 0 - (*(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + var_5)) + var_5;
    *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls + 16) = var_14;
    if (!(var_122 > 7)) {
        *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls[24] = 8;
    }
    generic64_t var_123;
    var_123 = *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___static_tls[24];
    var_0 = var_123 + var_14 + 359 & 0xFFFFFFFFFFFFFFF8;
    *(generic64_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc + 24) = var_0;
    var_33 = var_107;
    var_36 = var_104;
    var_37 = var_118;
    var_38 = var_111;
    var_39 = var_20;
    var_40 = init_r10();
    var_41 = 472;
    var_42 = var_123;
    var_43 = var_103;
    var_44 = var_112;
    var_45 = var_113;
    var_46 = var_102;
    var_47 = var_100;
    var_48 = &prefix_segment_0x406fd0_Generic64_2224.builtin_tls[0];
    var_49 = (revng_init_local_sp()) - 8;
    var_34 = var_108;
    var_35 = var_105;
    if (var_0 > 472) {
        helper_syscall_wrapper(NULL, 2, 0, var_98, var_99, var_100, var_101, var_102, var_103, var_104, var_105, var_106, var_107, var_108, var_109, var_110, 0 /* undef */, 0 /* undef */, 18446744073709551615, var_111, 0, 9, 34, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10233, var_0, 3, var_5, var_112, var_113, var_114, var_115, var_116, var_117, &var_74, &var_75, &var_76, &var_77, &var_78, &var_79, &var_80, &var_81, &var_82, &var_83, &var_84, &var_85, &var_86, &var_87, &var_88, &var_89, &var_90, &var_91, &var_92, &var_93, &var_94, &var_95, &var_96, &var_97);
        var_33 = var_79;
        var_36 = var_77;
        var_37 = 18446744073709551615;
        var_38 = var_92;
        var_39 = 0;
        var_40 = 34;
        var_41 = (generic32_t) var_94;
        var_42 = 3;
        var_43 = var_76;
        var_44 = var_96;
        var_45 = var_97;
        var_46 = var_75;
        var_47 = var_74;
        var_48 = var_93;
        var_49 = var_90;
        var_34 = var_80;
        var_35 = var_78;
    }
    var_18 = var_33;
    var_15 = var_34;
    var_22 = var_35;
    var_10 = var_36;
    var_1 = var_37;
    var_17 = var_38;
    var_24 = var_39;
    var_6 = var_40;
    var_2 = var_42;
    var_9 = var_43;
    var_12 = var_44;
    var_4 = var_45;
    var_7 = var_46;
    var_8 = var_47;
    generic64_t var_124;
    var_124 = var_49 - 8;
    *(generic64_t *) var_124 = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10243;
    var_23 = prefix___copy_tls((struct_9248848853126295176 *) var_48);
    var_23->unnamed_field_at_offset_0.unnamed_field_1 = &var_23->unnamed_field_at_offset_0.unnamed_field_1;
    *(generic64_t *) var_124 = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10257;
    generic64_t var_125;
    var_125 = prefix___set_thread_area(var_23);
    uint32_t var_126 = compute_all_logicl((generic32_t) var_125, var_41);
    if (!((var_126 & 0x40) == 0)) {
        *(generic32_t *) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc = 1;
    }
    helper_syscall_wrapper(NULL, 2, (generic64_t) &var_23->unnamed_field_at_offset_0.unnamed_field_1 + 56, var_98, var_99, var_8, var_101, var_7, var_9, var_10, var_22, var_106, var_18, var_15, var_109, var_110, var_23, 0 /* undef */, var_1, var_17, var_24, 218, var_6, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10285, var_0, var_2, var_5, var_12, var_4, var_114, var_115, var_116, var_117, &var_50, &var_51, &var_52, &var_53, &var_54, &var_55, &var_56, &var_57, &var_58, &var_59, &var_60, &var_61, &var_62, &var_63, &var_64, &var_65, &var_66, &var_67, &var_68, &var_69, &var_70, &var_71, &var_72, &var_73);
    var_23->unnamed_field_at_offset_56 = (generic32_t) var_69;
    var_23->unnamed_field_at_offset_256 = &prefix_segment_0x406fd0_Generic64_2224.prefix___libc[40];
    var_23->unnamed_field_at_offset_224 = &var_23->unnamed_field_at_offset_224;
    return;
}

int32_t *prefix___errno_location(void) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return (int32_t *) (*(generic64_t *) (init_state_0x8370()) + 68);
}

int8_t *strerror_l(int32_t e, locale_t loc) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic8_t var_4;
    generic8_t var_5;
    generic8_t var_6;
    generic32_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic8_t var_11;
    generic8_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic32_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic8_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    var_32 = (generic64_t) e;
    generic64_t var_33;
    var_33 = revng_init_local_sp();
    generic64_t var_34;
    var_34 = init_cc_src2();
    var_18 = init_cc_src();
    var_19 = 0;
    while (true) {
        var_17 = var_19;
        generic8_t var_35;
        var_35 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.errid;
        var_8 = (generic64_t) var_35;
        var_20 = var_18;
        var_20 = var_32;
        if ((!(var_35 == '\000')) && (!((var_8 - var_32 & 0xFFFFFFFF) == 0))) {
            var_18 = var_32;
            var_19 = var_17 + 1;
            continue;
        }
        break;
    }
    var_7 = (generic32_t) var_34;
    var_6 = var_7 == 0;
    var_5 = (generic8_t) var_34;
    var_4 = (var_34 & 0xFF) == 0;
    var_21 = var_8;
    var_22 = var_20;
    var_23 = var_17;
    var_24 = &prefix_segment_0x405000_Generic64_3292.errmsg[0];
    while (true) {
        var_1 = var_21;
        var_10 = var_22;
        var_9 = var_24;
        var_3 = var_23 & 0xFFFFFFFF;
        if (var_3 == 0) {
            break;
        }
        var_2 = var_9 + 1;
        var_28 = var_1;
        var_29 = var_10;
        var_25 = 0;
        var_26 = var_3;
        var_27 = 24;
        while (true) {
            bool break_from_loop_36 = false;
            var_16 = var_25;
            var_15 = var_26;
            var_0 = var_29;
            var_14 = var_2 + var_16;
            var_11 = *(generic8_t *) (var_9 + var_16);
            var_13 = var_28 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_11;
            var_31 = 0;
            switch (var_27) {
                case 26:
                case 28:
                case 30:
                {
                    var_31 = var_0;
                } break;
                case 20:
                {
                    generic32_t var_37;
                    var_37 = (generic32_t) var_0;
                    generic32_t var_38;
                    var_38 = (generic32_t) var_15 + var_37 + var_7;
                    var_31 = (generic64_t) var_6 ? var_38 < var_37 : var_38 <= var_37;
                } break;
                case 18:
                {
                    var_12 = (generic8_t) var_15 + (generic8_t) var_0 + var_5;
                    if (var_4) {
                        var_30 = ((generic32_t) var_0 & 0xFF) > (generic32_t) var_12;
                    } else {
                        var_30 = ((generic32_t) var_0 & 0xFF) >= (generic32_t) var_12;
                    }
                    var_31 = (generic64_t) var_30;
                } break;
                case 16:
                {
                    var_31 = (generic64_t) ~(generic32_t) var_0 < (generic32_t) var_15;
                } break;
                default:
                {
                    var_28 = var_13;
                    var_29 = var_31;
                    var_25 = var_16 + 1;
                    var_26 = var_13;
                    var_27 = 22;
                    if (!(var_11 == '\000')) {
                        continue;
                    }
                    break_from_loop_36 = true;
                    break;
                } break;
            }
            if (break_from_loop_36)
                break;
        }
        var_21 = var_13;
        var_22 = 0;
        var_23 = var_3 - 1;
        var_24 = var_14;
        continue;
    }
    return (int8_t *) var_9;
}

int8_t *strerror(int32_t e) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic8_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic8_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic8_t var_13;
    generic8_t var_14;
    generic8_t var_15;
    generic32_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic32_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic8_t var_30;
    generic64_t var_31;
    generic64_t var_32;
    var_32 = (generic64_t) e;
    generic64_t var_33;
    var_33 = revng_init_local_sp();
    generic64_t var_34;
    var_34 = init_cc_src2();
    var_18 = init_cc_src();
    var_19 = 0;
    while (true) {
        var_5 = var_19;
        generic8_t var_35;
        var_35 = *(generic8_t *) &prefix_segment_0x405000_Generic64_3292.errid;
        var_17 = (generic64_t) var_35;
        var_20 = var_18;
        var_20 = var_32;
        if ((!(var_35 == '\000')) && (!((var_17 - var_32 & 0xFFFFFFFF) == 0))) {
            var_18 = var_32;
            var_19 = var_5 + 1;
            continue;
        }
        break;
    }
    var_16 = (generic32_t) var_34;
    var_15 = var_16 == 0;
    var_14 = (generic8_t) var_34;
    var_13 = (var_34 & 0xFF) == 0;
    var_21 = var_17;
    var_22 = var_20;
    var_23 = var_5;
    var_24 = &prefix_segment_0x405000_Generic64_3292.errmsg[0];
    while (true) {
        var_0 = var_21;
        var_7 = var_22;
        var_2 = var_24;
        var_12 = var_23 & 0xFFFFFFFF;
        if (var_12 == 0) {
            break;
        }
        var_11 = var_2 + 1;
        var_25 = 0;
        var_26 = 24;
        var_27 = var_12;
        var_28 = var_0;
        var_29 = var_7;
        while (true) {
            bool break_from_loop_36 = false;
            var_1 = var_25;
            var_6 = var_27;
            var_4 = var_29;
            var_10 = var_11 + var_1;
            var_3 = *(generic8_t *) (var_2 + var_1);
            var_9 = var_28 & 0xFFFFFFFFFFFFFF00 | (generic64_t) var_3;
            var_31 = 0;
            switch (var_26) {
                case 26:
                case 28:
                case 30:
                {
                    var_31 = var_4;
                } break;
                case 20:
                {
                    generic32_t var_37;
                    var_37 = (generic32_t) var_4;
                    generic32_t var_38;
                    var_38 = (generic32_t) var_6 + var_37 + var_16;
                    var_31 = (generic64_t) var_15 ? var_38 < var_37 : var_38 <= var_37;
                } break;
                case 18:
                {
                    var_8 = (generic8_t) var_6 + (generic8_t) var_4 + var_14;
                    if (var_13) {
                        var_30 = ((generic32_t) var_4 & 0xFF) > (generic32_t) var_8;
                    } else {
                        var_30 = ((generic32_t) var_4 & 0xFF) >= (generic32_t) var_8;
                    }
                    var_31 = (generic64_t) var_30;
                } break;
                case 16:
                {
                    var_31 = (generic64_t) ~(generic32_t) var_4 < (generic32_t) var_6;
                } break;
                default:
                {
                    var_25 = var_1 + 1;
                    var_26 = 22;
                    var_27 = var_9;
                    var_28 = var_9;
                    var_29 = var_31;
                    if (!(var_3 == '\000')) {
                        continue;
                    }
                    break_from_loop_36 = true;
                    break;
                } break;
            }
            if (break_from_loop_36)
                break;
        }
        var_21 = var_9;
        var_22 = 0;
        var_23 = var_12 - 1;
        var_24 = var_10;
        continue;
    }
    return (int8_t *) var_2;
}

void prefix__Exit(int32_t ec) {
    generic64_t *var_0;
    generic32_t *var_1;
    generic64_t *var_2;
    generic32_t *var_3;
    generic64_t *var_4;
    generic64_t *var_5;
    generic32_t *var_6;
    generic64_t *var_7;
    generic32_t *var_8;
    generic32_t *var_9;
    generic32_t var_10;
    generic32_t *var_11;
    var_11 = &var_10;
    generic32_t var_12;
    generic32_t *var_13;
    var_13 = &var_12;
    generic64_t var_14;
    generic64_t *var_15;
    var_15 = &var_14;
    generic64_t var_16;
    generic64_t *var_17;
    var_17 = &var_16;
    generic32_t var_18;
    generic32_t *var_19;
    var_19 = &var_18;
    generic64_t var_20;
    generic64_t *var_21;
    var_21 = &var_20;
    generic32_t var_22;
    generic32_t *var_23;
    var_23 = &var_22;
    generic32_t var_24;
    generic32_t var_25;
    generic32_t var_26;
    generic32_t var_27;
    generic32_t var_28;
    generic32_t var_29;
    generic32_t var_30;
    generic8_t var_31;
    generic32_t var_32;
    generic64_t var_33;
    generic32_t var_34;
    generic64_t var_35;
    generic64_t *var_36;
    var_36 = &var_35;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t *var_41;
    var_41 = &var_40;
    generic32_t var_42;
    generic32_t *var_43;
    var_43 = &var_42;
    generic32_t var_44;
    generic32_t *var_45;
    var_45 = &var_44;
    generic32_t var_46;
    generic32_t *var_47;
    var_47 = &var_46;
    generic64_t var_48;
    generic64_t *var_49;
    var_49 = &var_48;
    generic64_t var_50;
    generic64_t *var_51;
    var_51 = &var_50;
    generic32_t var_52;
    generic32_t *var_53;
    var_53 = &var_52;
    generic64_t var_54;
    generic64_t *var_55;
    var_55 = &var_54;
    generic32_t var_56;
    generic32_t *var_57;
    var_57 = &var_56;
    generic32_t var_58;
    generic32_t var_59;
    generic32_t var_60;
    generic32_t var_61;
    generic32_t var_62;
    generic32_t var_63;
    generic32_t var_64;
    generic8_t var_65;
    generic32_t var_66;
    generic64_t var_67;
    generic32_t var_68;
    generic64_t var_69;
    generic64_t *var_70;
    var_70 = &var_69;
    generic64_t var_71;
    generic64_t var_72;
    generic64_t var_73;
    generic64_t var_74;
    generic64_t *var_75;
    var_75 = &var_74;
    generic32_t var_76;
    generic32_t *var_77;
    var_77 = &var_76;
    generic64_t var_78;
    var_78 = revng_init_local_sp();
    generic64_t var_79;
    var_79 = init_state_0x83f8();
    generic64_t var_80;
    var_80 = init_state_0x8340();
    generic64_t var_81;
    var_81 = init_state_0x83d0();
    generic32_t var_82;
    var_82 = init_state_0x83d8();
    generic64_t var_83;
    var_83 = init_state_0x8408();
    generic64_t var_84;
    var_84 = init_state_0x8328();
    generic64_t var_85;
    var_85 = init_r8();
    generic64_t var_86;
    var_86 = init_r9();
    generic64_t var_87;
    var_87 = init_r10();
    generic64_t var_88;
    var_88 = init_rsi();
    generic64_t var_89;
    var_89 = init_rcx();
    generic64_t var_90;
    var_90 = init_state_0x8358();
    generic64_t var_91;
    var_91 = init_state_0x8310();
    generic32_t var_92;
    var_92 = init_state_0x8334();
    generic32_t var_93;
    var_93 = init_state_0x834c();
    generic64_t var_94;
    var_94 = (generic64_t) ec;
    helper_syscall_wrapper(NULL, 2, var_94, var_79, var_80, init_state_0x9080(), var_81, init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), var_82, init_state_0x9018(), init_state_0x9010(), var_83, var_84, 0 /* undef */, 0 /* undef */, var_85, init_state_0x8370(), var_86, 231, var_87, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10410, var_88, init_rdx(), var_89, init_state_0x82d8(), init_state_0x8300(), var_90, var_91, var_92, var_93, var_45, var_47, var_49, var_51, var_53, var_55, var_57, &var_58, &var_59, &var_60, &var_61, &var_62, &var_63, &var_64, &var_65, &var_66, &var_67, &var_68, var_70, &var_71, &var_72, &var_73, var_75, var_77);
    var_0 = var_70;
    var_1 = var_57;
    var_2 = var_55;
    var_3 = var_53;
    var_4 = var_51;
    var_5 = var_75;
    var_6 = var_77;
    var_7 = var_49;
    var_8 = var_47;
    var_9 = var_45;
    while (true) {
        helper_syscall_wrapper(NULL, 2, var_94, var_79, var_80, *var_9, var_81, *var_8, *var_7, *var_4, *var_3, var_82, *var_2, *var_1, var_83, var_84, 0 /* undef */, 0 /* undef */, var_85, *var_0, var_86, 60, var_87, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10420, var_88, 60, var_89, *var_5, *var_6, var_90, var_91, var_92, var_93, var_11, var_13, var_15, var_17, var_19, var_21, var_23, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, var_36, &var_37, &var_38, &var_39, var_41, var_43);
        var_0 = var_36;
        var_1 = var_23;
        var_2 = var_21;
        var_3 = var_19;
        var_4 = var_17;
        var_5 = var_41;
        var_6 = var_43;
        var_7 = var_15;
        var_8 = var_13;
        var_9 = var_11;
    }
}

int8_t const *dummy__(int8_t const *msg, prefix___locale_map const *lm) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return msg;
}

int8_t const *prefix___lctrans(int8_t const *msg, prefix___locale_map const *lm) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return msg;
}

int8_t const *prefix___lctrans_cur(int8_t const *msg) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return msg;
}

int32_t prefix___fpclassifyl(float128_t x) {
    generic64_t var_0;
    generic64_t var_1;
    var_1 = revng_init_local_sp();
    generic64_t var_2;
    var_2 = *(generic64_t *) (var_1 + 8);
    generic16_t var_3;
    var_3 = (generic16_t) *(generic64_t *) (var_1 + 16) & 0x7FFF;
    if ((var_2 >> 63 | (generic64_t) var_3) == 0) {
        return (int32_t) (var_2 == 0 ? 2 : 3);
    }
    var_0 = 0;
    if (!(var_2 > 18446744073709551615)) {
        var_0 = 4;
        if (var_3 == 32767) {
            var_0 = (generic64_t) (var_2 & 0x7FFFFFFFFFFFFFFF) == 0;
        }
    }
    return (int32_t) var_0;
}

int32_t prefix___signbitl(float128_t x) {
    return (int32_t) ((generic64_t) *(generic32_t *) ((revng_init_local_sp()) + 16) >> 15 & 0x1);
}

float128_t frexpl(float128_t x, int32_t *e) {
    struct_1905384652958498309 stack;
    generic32_t var_0;
    generic8_t var_1;
    generic32_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic8_t var_5;
    generic8_t var_6;
    generic8_t var_7;
    generic8_t var_8;
    generic8_t var_9;
    generic8_t var_10;
    generic8_t var_11;
    generic8_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic8_t var_15;
    generic8_t var_16;
    generic8_t var_17;
    generic8_t var_18;
    generic8_t var_19;
    generic8_t var_20;
    generic8_t var_21;
    generic32_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic16_t var_31;
    generic16_t var_32;
    generic16_t var_33;
    generic16_t var_34;
    generic16_t var_35;
    generic16_t var_36;
    generic16_t var_37;
    generic8_t var_38;
    generic8_t var_39;
    generic8_t var_40;
    generic8_t var_41;
    generic8_t var_42;
    generic8_t var_43;
    generic8_t var_44;
    generic8_t var_45;
    generic16_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic64_t var_52;
    generic64_t var_53;
    generic64_t var_54;
    generic64_t var_55;
    generic16_t var_56;
    generic16_t var_57;
    generic16_t var_58;
    generic16_t var_59;
    generic16_t var_60;
    generic16_t var_61;
    generic16_t var_62;
    generic8_t var_63;
    generic8_t var_64;
    generic8_t var_65;
    generic8_t var_66;
    generic8_t var_67;
    generic8_t var_68;
    generic8_t var_69;
    generic8_t var_70;
    generic16_t var_71;
    generic32_t var_72;
    generic8_t var_73;
    generic8_t var_74;
    generic8_t var_75;
    generic8_t var_76;
    generic8_t var_77;
    generic8_t var_78;
    generic8_t var_79;
    generic8_t var_80;
    generic32_t var_81;
    generic8_t var_82;
    generic64_t var_83;
    generic64_t var_84;
    generic64_t var_85;
    generic64_t var_86;
    generic64_t var_87;
    generic64_t var_88;
    generic64_t var_89;
    generic64_t var_90;
    generic16_t var_91;
    generic16_t var_92;
    generic16_t var_93;
    generic16_t var_94;
    generic16_t var_95;
    generic16_t var_96;
    generic16_t var_97;
    generic16_t var_98;
    generic8_t var_99;
    generic64_t var_100;
    generic16_t var_101;
    generic64_t var_102;
    generic64_t var_103;
    generic64_t var_104;
    generic64_t var_105;
    generic64_t var_106;
    generic64_t var_107;
    generic64_t var_108;
    generic64_t var_109;
    generic16_t var_110;
    generic16_t var_111;
    generic16_t var_112;
    generic16_t var_113;
    generic16_t var_114;
    generic16_t var_115;
    generic16_t var_116;
    generic8_t var_117;
    generic8_t var_118;
    generic8_t var_119;
    generic8_t var_120;
    generic8_t var_121;
    generic8_t var_122;
    generic8_t var_123;
    generic8_t var_124;
    generic16_t var_125;
    generic32_t var_126;
    generic8_t var_127;
    generic8_t var_128;
    generic8_t var_129;
    generic8_t var_130;
    generic8_t var_131;
    generic8_t var_132;
    generic8_t var_133;
    generic8_t var_134;
    generic32_t var_135;
    generic64_t var_136;
    generic64_t var_137;
    generic64_t var_138;
    generic64_t var_139;
    generic64_t var_140;
    generic64_t var_141;
    generic64_t var_142;
    generic64_t var_143;
    generic16_t var_144;
    generic16_t var_145;
    generic16_t var_146;
    generic16_t var_147;
    generic16_t var_148;
    generic16_t var_149;
    generic16_t var_150;
    generic16_t var_151;
    generic8_t var_152;
    generic8_t var_153;
    generic8_t var_154;
    generic8_t var_155;
    generic8_t var_156;
    generic8_t var_157;
    generic8_t var_158;
    generic8_t var_159;
    generic32_t var_160;
    generic64_t var_161;
    generic64_t var_162;
    generic64_t var_163;
    generic64_t var_164;
    generic64_t var_165;
    generic64_t var_166;
    generic64_t var_167;
    generic64_t var_168;
    generic16_t var_169;
    generic16_t var_170;
    generic16_t var_171;
    generic16_t var_172;
    generic16_t var_173;
    generic16_t var_174;
    generic16_t var_175;
    generic16_t var_176;
    generic8_t var_177;
    generic8_t var_178;
    generic8_t var_179;
    generic8_t var_180;
    generic8_t var_181;
    generic8_t var_182;
    generic8_t var_183;
    generic8_t var_184;
    generic32_t var_185;
    generic8_t var_186;
    generic64_t var_187;
    generic64_t var_188;
    generic16_t var_189;
    generic64_t var_190;
    generic64_t var_191;
    generic64_t var_192;
    generic64_t var_193;
    generic64_t var_194;
    generic64_t var_195;
    generic64_t var_196;
    generic64_t var_197;
    generic16_t var_198;
    generic16_t var_199;
    generic16_t var_200;
    generic16_t var_201;
    generic16_t var_202;
    generic16_t var_203;
    generic16_t var_204;
    generic16_t var_205;
    generic64_t var_206;
    generic64_t var_207;
    generic64_t var_208;
    generic64_t var_209;
    generic64_t var_210;
    generic64_t var_211;
    generic64_t var_212;
    generic64_t var_213;
    generic16_t var_214;
    generic16_t var_215;
    generic16_t var_216;
    generic16_t var_217;
    generic16_t var_218;
    generic16_t var_219;
    generic16_t var_220;
    generic16_t var_221;
    generic8_t var_222;
    generic8_t var_223;
    generic8_t var_224;
    generic8_t var_225;
    generic8_t var_226;
    generic8_t var_227;
    generic8_t var_228;
    generic8_t var_229;
    generic32_t var_230;
    generic8_t var_231;
    generic8_t var_232;
    generic8_t var_233;
    generic8_t var_234;
    generic8_t var_235;
    generic8_t var_236;
    generic8_t var_237;
    generic8_t var_238;
    generic32_t var_239;
    generic64_t var_240;
    generic64_t var_241;
    generic64_t var_242;
    generic64_t var_243;
    generic64_t var_244;
    generic64_t var_245;
    generic64_t var_246;
    generic64_t var_247;
    generic16_t var_248;
    generic16_t var_249;
    generic16_t var_250;
    generic16_t var_251;
    generic16_t var_252;
    generic16_t var_253;
    generic16_t var_254;
    generic16_t var_255;
    generic8_t var_256;
    generic8_t var_257;
    generic8_t var_258;
    generic8_t var_259;
    generic8_t var_260;
    generic8_t var_261;
    generic8_t var_262;
    generic8_t var_263;
    generic32_t var_264;
    generic64_t var_265;
    generic64_t var_266;
    generic64_t var_267;
    generic64_t var_268;
    generic64_t var_269;
    generic64_t var_270;
    generic64_t var_271;
    generic64_t var_272;
    generic16_t var_273;
    generic16_t var_274;
    generic16_t var_275;
    generic16_t var_276;
    generic16_t var_277;
    generic16_t var_278;
    generic16_t var_279;
    generic8_t var_280;
    generic8_t var_281;
    generic8_t var_282;
    generic8_t var_283;
    generic8_t var_284;
    generic8_t var_285;
    generic8_t var_286;
    generic8_t var_287;
    generic16_t var_288;
    generic32_t var_289;
    generic64_t var_290;
    var_290 = (generic64_t) x;
    generic8_t var_291;
    var_291 = init_state_0x852e();
    generic64_t var_292;
    var_292 = (generic64_t) &stack.unnamed_field_at_offset_0 + 24;
    generic64_t var_293;
    var_293 = (generic64_t) &stack.unnamed_field_at_offset_0 + 56;
    helper_fldt_ST0_wrapper(NULL, var_293, init_state_0x8480(), &var_265, &var_266, &var_267, &var_268, &var_269, &var_270, &var_271, &var_272, &var_273, &var_274, &var_275, &var_276, &var_277, &var_278, &var_279, &var_280, &var_281, &var_282, &var_283, &var_284, &var_285, &var_286, &var_287, &var_288, &var_289);
    generic64_t var_294;
    var_294 = *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 64);
    helper_fpush_wrapper(NULL, var_289, &var_256, &var_257, &var_258, &var_259, &var_260, &var_261, &var_262, &var_263, &var_264);
    generic32_t var_295;
    var_295 = var_264;
    helper_fmov_ST0_STN_wrapper(NULL, 1, var_265, var_266, var_267, var_268, var_269, var_270, var_271, var_272, var_273, var_274, var_275, var_276, var_277, var_278, var_279, var_288, var_295, &var_240, &var_241, &var_242, &var_243, &var_244, &var_245, &var_246, &var_247, &var_248, &var_249, &var_250, &var_251, &var_252, &var_253, &var_254, &var_255);
    generic64_t var_296;
    var_296 = var_240;
    generic64_t var_297;
    var_297 = var_241;
    generic64_t var_298;
    var_298 = var_242;
    generic64_t var_299;
    var_299 = var_243;
    generic64_t var_300;
    var_300 = var_244;
    generic64_t var_301;
    var_301 = var_245;
    generic64_t var_302;
    var_302 = var_246;
    generic64_t var_303;
    var_303 = var_247;
    generic16_t var_304;
    var_304 = var_248;
    generic16_t var_305;
    var_305 = var_249;
    generic16_t var_306;
    var_306 = var_250;
    generic16_t var_307;
    var_307 = var_251;
    generic16_t var_308;
    var_308 = var_252;
    generic16_t var_309;
    var_309 = var_253;
    generic16_t var_310;
    var_310 = var_254;
    generic16_t var_311;
    var_311 = var_255;
    helper_fstt_ST0_wrapper(NULL, var_292, var_296, var_297, var_298, var_299, var_300, var_301, var_302, var_303, var_304, var_305, var_306, var_307, var_308, var_309, var_310, var_311, var_295);
    helper_fpop_wrapper(NULL, var_295, &var_231, &var_232, &var_233, &var_234, &var_235, &var_236, &var_237, &var_238, &var_239);
    generic32_t var_312;
    var_312 = var_239;
    generic32_t var_313;
    var_313 = (generic32_t) var_294;
    generic32_t var_314;
    var_314 = var_313 & 0xFFFF7FFF;
    if ((var_294 & 0x7FFF) == 0) {
        helper_fpush_wrapper(NULL, var_312, &var_222, &var_223, &var_224, &var_225, &var_226, &var_227, &var_228, &var_229, &var_230);
        generic32_t var_315;
        var_315 = var_230;
        helper_fldz_ST0_wrapper(NULL, var_315, &var_206, &var_207, &var_208, &var_209, &var_210, &var_211, &var_212, &var_213, &var_214, &var_215, &var_216, &var_217, &var_218, &var_219, &var_220, &var_221);
        helper_fxchg_ST0_STN_wrapper(NULL, 1, var_206, var_207, var_208, var_209, var_210, var_211, var_212, var_213, var_214, var_215, var_216, var_217, var_218, var_219, var_220, var_221, var_315, &var_190, &var_191, &var_192, &var_193, &var_194, &var_195, &var_196, &var_197, &var_198, &var_199, &var_200, &var_201, &var_202, &var_203, &var_204, &var_205);
        generic64_t var_316;
        var_316 = var_190;
        generic64_t var_317;
        var_317 = var_191;
        generic64_t var_318;
        var_318 = var_192;
        generic64_t var_319;
        var_319 = var_193;
        generic64_t var_320;
        var_320 = var_194;
        generic64_t var_321;
        var_321 = var_195;
        generic64_t var_322;
        var_322 = var_196;
        generic64_t var_323;
        var_323 = var_197;
        generic16_t var_324;
        var_324 = var_198;
        generic16_t var_325;
        var_325 = var_199;
        generic16_t var_326;
        var_326 = var_200;
        generic16_t var_327;
        var_327 = var_201;
        generic16_t var_328;
        var_328 = var_202;
        generic16_t var_329;
        var_329 = var_203;
        generic16_t var_330;
        var_330 = var_204;
        generic16_t var_331;
        var_331 = var_205;
        helper_fmov_FT0_STN_wrapper(NULL, 1, var_316, var_317, var_318, var_319, var_320, var_321, var_322, var_323, var_324, var_325, var_326, var_327, var_328, var_329, var_330, var_331, var_315, &var_188, &var_189);
        helper_fucomi_ST0_FT0_wrapper(NULL, init_state_0x852a(), var_316, var_317, var_318, var_319, var_320, var_321, var_322, var_323, var_324, var_325, var_326, var_327, var_328, var_329, var_330, 0, 23, 16, init_cc_src2(), var_331, var_188, var_189, var_315, &var_186, &var_187);
        var_1 = var_186;
        helper_fpop_wrapper(NULL, var_315, &var_177, &var_178, &var_179, &var_180, &var_181, &var_182, &var_183, &var_184, &var_185);
        generic32_t var_332;
        var_332 = var_185;
        helper_fmov_STN_ST0_wrapper(NULL, 0, var_316, var_317, var_318, var_319, var_320, var_321, var_322, var_323, var_324, var_325, var_326, var_327, var_328, var_329, var_330, var_331, var_332, &var_161, &var_162, &var_163, &var_164, &var_165, &var_166, &var_167, &var_168, &var_169, &var_170, &var_171, &var_172, &var_173, &var_174, &var_175, &var_176);
        helper_fpop_wrapper(NULL, var_332, &var_152, &var_153, &var_154, &var_155, &var_156, &var_157, &var_158, &var_159, &var_160);
        var_0 = var_160;
        if ((var_187 & 0x44) == 64) {
            *e = 0;
            var_3 = var_290;
            var_4 = var_0;
        } else {
            helper_fldt_ST0_wrapper(NULL, var_293, var_0, &var_102, &var_103, &var_104, &var_105, &var_106, &var_107, &var_108, &var_109, &var_110, &var_111, &var_112, &var_113, &var_114, &var_115, &var_116, &var_117, &var_118, &var_119, &var_120, &var_121, &var_122, &var_123, &var_124, &var_125, &var_126);
            generic32_t var_333;
            var_333 = var_126;
            helper_flds_FT0_wrapper(NULL, *(generic32_t *) ((generic64_t) &prefix_segment_0x405000_Generic64_3292 + 3192), var_1, var_291, init_state_0x852d(), &var_99, &var_100, &var_101);
            helper_fmul_ST0_FT0_wrapper(NULL, init_state_0x852c(), var_99, init_state_0x852b(), var_102, var_103, var_104, init_state_0x8528(), var_291, var_105, var_106, var_107, var_108, var_109, var_110, var_111, var_112, var_113, var_114, var_115, var_116, var_125, var_100, var_101, var_333, init_state_0x8529(), &var_82, &var_83, &var_84, &var_85, &var_86, &var_87, &var_88, &var_89, &var_90, &var_91, &var_92, &var_93, &var_94, &var_95, &var_96, &var_97, &var_98);
            generic64_t var_334;
            var_334 = var_83;
            generic64_t var_335;
            var_335 = var_84;
            generic64_t var_336;
            var_336 = var_85;
            generic64_t var_337;
            var_337 = var_86;
            generic64_t var_338;
            var_338 = var_87;
            generic64_t var_339;
            var_339 = var_88;
            generic64_t var_340;
            var_340 = var_89;
            generic64_t var_341;
            var_341 = var_90;
            generic16_t var_342;
            var_342 = var_91;
            generic16_t var_343;
            var_343 = var_92;
            generic16_t var_344;
            var_344 = var_93;
            generic16_t var_345;
            var_345 = var_94;
            generic16_t var_346;
            var_346 = var_95;
            generic16_t var_347;
            var_347 = var_96;
            generic16_t var_348;
            var_348 = var_97;
            generic16_t var_349;
            var_349 = var_98;
            generic64_t var_350;
            var_350 = (generic64_t) var_314;
            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = var_350;
            *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = var_350;
            helper_fstt_ST0_wrapper(NULL, (generic64_t) &stack.unnamed_field_at_offset_0 + 8, var_334, var_335, var_336, var_337, var_338, var_339, var_340, var_341, var_342, var_343, var_344, var_345, var_346, var_347, var_348, var_349, var_333);
            helper_fpop_wrapper(NULL, var_333, &var_73, &var_74, &var_75, &var_76, &var_77, &var_78, &var_79, &var_80, &var_81);
            generic32_t var_351;
            var_351 = var_81;
            float128_t var_352;
            var_352 = frexpl((float128_t) ((generic128_t) x & (0x0 << 64 | 0xFFFFFFFFFFFFFFFF)), e);
            int32_t *var_353;
            var_353 = e;
            *var_353 = (generic32_t) *var_353 - 120;
            helper_fstt_ST0_wrapper(NULL, var_293, var_334, var_335, var_336, var_337, var_338, var_339, var_340, var_341, var_342, var_343, var_344, var_345, var_346, var_347, var_348, var_349, var_351);
            helper_fpop_wrapper(NULL, var_351, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13);
            var_3 = var_352;
            var_4 = var_13;
        }
    } else {
        helper_fmov_STN_ST0_wrapper(NULL, 0, var_296, var_297, var_298, var_299, var_300, var_301, var_302, var_303, var_304, var_305, var_306, var_307, var_308, var_309, var_310, var_311, var_312, &var_136, &var_137, &var_138, &var_139, &var_140, &var_141, &var_142, &var_143, &var_144, &var_145, &var_146, &var_147, &var_148, &var_149, &var_150, &var_151);
        helper_fpop_wrapper(NULL, var_312, &var_127, &var_128, &var_129, &var_130, &var_131, &var_132, &var_133, &var_134, &var_135);
        var_2 = var_135;
        var_3 = var_290;
        var_4 = var_2;
        if (!((var_314 + 32769 & 0xFFFF) == 0)) {
            *e = (var_313 & 0x7FFF) - 16382;
            *(generic16_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 32) = (generic16_t) var_294 & 0x8000 | 0x3FFE;
            helper_fldt_ST0_wrapper(NULL, var_292, var_2, &var_23, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47);
            generic32_t var_354;
            var_354 = var_47;
            helper_fstt_ST0_wrapper(NULL, var_293, var_23, var_24, var_25, var_26, var_27, var_28, var_29, var_30, var_31, var_32, var_33, var_34, var_35, var_36, var_37, var_46, var_354);
            helper_fpop_wrapper(NULL, var_354, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22);
            var_3 = var_290;
            var_4 = var_22;
        }
    }
    helper_fldt_ST0_wrapper(NULL, var_293, var_4, &var_48, &var_49, &var_50, &var_51, &var_52, &var_53, &var_54, &var_55, &var_56, &var_57, &var_58, &var_59, &var_60, &var_61, &var_62, &var_63, &var_64, &var_65, &var_66, &var_67, &var_68, &var_69, &var_70, &var_71, &var_72);
    return (float128_t) var_3;
}

int32_t wctomb(int8_t *s, wchar_t wc) {
    struct_11133113436108331723 stack;
    if ((generic64_t) s == 0) {
        return (int32_t) 0;
    }
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rax();
    size_t var_0;
    var_0 = wcrtomb((typedef_15587737597382482130) s, wc, (typedef_7664785938121735837) 0);
    return (int32_t) var_0;
}

int32_t prefix___lockfile(FILE *f) {
    generic64_t var_0;
    typedef_10617881200867399815 var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic32_t var_5;
    var_5 = *(generic32_t *) (*(generic64_t *) (init_state_0x8370()) + 56);
    var_3 = 0;
    if (!((generic32_t) f->lock == var_5)) {
        var_0 = (generic64_t) &f->flags + 144;
        while (true) {
            helper_lock();
            var_1 = f->lock;
            if ((generic32_t) var_1 == 0) {
                f->lock = var_5;
                var_4 = 0;
            } else {
                var_4 = (generic64_t) var_1;
            }
            var_2 = var_4;
            helper_unlock();
            var_3 = 1;
            if (var_2 == 0) {
                break;
            }
            prefix___wait((typedef_15144741048591869047 *) ((generic64_t) &f->flags + 140), (typedef_15144741048591869047 *) var_0, (int32_t) (generic32_t) var_2, (int32_t) 1);
            continue;
        }
    }
    return (int32_t) var_3;
}

void prefix___unlockfile(FILE *f) {
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic32_t var_24;
    generic32_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic32_t var_28;
    generic64_t var_29;
    generic32_t var_30;
    generic32_t var_31;
    generic32_t var_32;
    generic32_t var_33;
    generic32_t var_34;
    generic32_t var_35;
    generic32_t var_36;
    generic32_t var_37;
    generic8_t var_38;
    generic32_t var_39;
    generic64_t var_40;
    generic32_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    var_48 = revng_init_local_sp();
    generic64_t var_49;
    var_49 = init_state_0x83f8();
    generic64_t var_50;
    var_50 = init_state_0x8340();
    generic64_t var_51;
    var_51 = init_state_0x83d0();
    generic32_t var_52;
    var_52 = init_state_0x83d8();
    generic64_t var_53;
    var_53 = init_state_0x8408();
    generic64_t var_54;
    var_54 = init_state_0x8328();
    generic64_t var_55;
    var_55 = init_r9();
    generic64_t var_56;
    var_56 = init_r10();
    generic64_t var_57;
    var_57 = init_state_0x8358();
    generic64_t var_58;
    var_58 = init_state_0x8310();
    generic32_t var_59;
    var_59 = init_state_0x8334();
    generic32_t var_60;
    var_60 = init_state_0x834c();
    generic64_t var_61;
    var_61 = (generic64_t) &f->flags + 140;
    f->lock = 0;
    helper_lock();
    helper_unlock();
    if (!((generic32_t) f->waiters == 0)) {
        helper_syscall_wrapper(NULL, 2, var_61, var_49, var_50, init_state_0x9080(), var_51, init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), var_52, init_state_0x9018(), init_state_0x9010(), var_53, var_54, 0 /* undef */, 0 /* undef */, 202, init_state_0x8370(), var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10830, 129, 1, f, init_state_0x82d8(), init_state_0x8300(), var_57, var_58, var_59, var_60, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47);
        if (var_43 == -38) {
            helper_syscall_wrapper(NULL, 2, var_61, var_49, var_50, var_24, var_51, var_25, var_26, var_27, var_28, var_52, var_29, var_30, var_53, var_54, 0 /* undef */, 0 /* undef */, 202, var_42, var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10844, 1, 1, f, var_46, var_47, var_57, var_58, var_59, var_60, &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
        }
    }
    return;
}

int32_t dummy___(int32_t fd) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    return (int32_t) (generic64_t) fd;
}

int32_t prefix___stdio_close(FILE *f) {
    struct_1499561748157061964 stack;
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rax();
    int32_t var_24;
    var_24 = dummy___(f->fd);
    helper_syscall_wrapper(NULL, 2, (generic64_t) var_24 << 32 >> 32, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, 0 /* undef */, init_r8(), init_state_0x8370(), init_r9(), 3, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10867, init_rsi(), init_rdx(), init_rcx(), init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
    *(generic64_t *) (var_16 - 8) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10877;
    int64_t var_25;
    var_25 = prefix___syscall_ret((uint64_t) var_19);
    return (int32_t) var_25;
}

off_t prefix___stdio_seek(FILE *f, off_t off, int32_t whence) {
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic64_t var_24;
    var_24 = revng_init_local_sp();
    helper_syscall_wrapper(NULL, 2, (generic64_t) f->fd, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, 0 /* undef */, init_r8(), init_state_0x8370(), init_r9(), 8, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10891, off, (generic64_t) whence, init_rcx(), init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
    generic64_t var_25;
    var_25 = var_16;
    generic64_t var_26;
    var_26 = var_19;
    if (!(var_26 > 18446744073709547520)) {
        return (off_t) var_26;
    }
    generic64_t var_27;
    var_27 = var_25 - 16;
    *(generic64_t *) var_27 = var_26;
    *(generic64_t *) (var_25 - 32) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11499;
    int32_t *var_28;
    var_28 = prefix___errno_location();
    *var_28 = 0 - (generic32_t) *(generic64_t *) var_27;
    return (off_t) 18446744073709551615;
}

size_t prefix___stdout_write(FILE *f, uint8_t const *buf, size_t len) {
    generic64_t var_0;
    generic64_t var_1;
    generic32_t var_2;
    generic32_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic64_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic32_t var_14;
    generic32_t var_15;
    generic8_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic32_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic32_t var_25;
    generic64_t var_26;
    var_26 = revng_init_local_sp();
    f->write = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11790;
    var_1 = var_26 - 24;
    helper_syscall_wrapper(NULL, 2, (generic64_t) f->fd, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, 0 /* undef */, f, init_state_0x8370(), buf, 16, len, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10946, 21523, var_26 - 16, init_rcx(), init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25);
    var_0 = var_18;
    var_1 = var_0;
    if (((*(generic8_t *) &f->flags & 0x40) == '\000') && (!(var_21 == 0))) {
        f->lbf = '\377';
        var_1 = var_0;
    }
    *(generic64_t *) (var_1 - 8) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10975;
    size_t var_27;
    var_27 = prefix___stdio_write(f, buf, len);
    return var_27;
}

artificial_struct_returned_by_rawfunction_2932303738529212957 prefix___fwritex(struct_12231053618952106340 *rcx, struct_12231053618952106340 *rdx, struct_12231053618952106340 *rsi, struct_12231053618952106340 *rdi, generic64_t r8) {
    struct_10407681828552179596 stack;
    uint64_t loop_state_var;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    stack.unnamed_field_at_offset_0 = r8;
    int32_t var_8;
    var_8 = prefix___towrite((FILE *) rdx);
    var_4 = 0;
    if ((*(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 1) == 0) && (!(((generic64_t) var_8 & 0xFFFFFFFF) == 0))) {
        return (artificial_struct_returned_by_rawfunction_2932303738529212957){ (struct_12231053618952106340 *) var_4, stack.unnamed_field_at_offset_0}
        ;
    }
    if (*(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 1) - *(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 9) < (generic64_t) &rsi->unnamed_field_at_offset_0.unnamed_field_19) {
        return (artificial_struct_returned_by_rawfunction_2932303738529212957){ rdx->unnamed_field_at_offset_72, rsi}
        ;
    }
    var_6 = &rsi->unnamed_field_at_offset_0.unnamed_field_19;
    var_7 = &rdi->unnamed_field_at_offset_0.unnamed_field_19;
    if (rdx->unnamed_field_at_offset_139 > '\377') {
        var_3 = (generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19 + (generic64_t) &rsi->unnamed_field_at_offset_0.unnamed_field_19;
        var_5 = 0;
        while (true) {
            var_0 = var_5;
            var_6 = &rsi->unnamed_field_at_offset_0.unnamed_field_19;
            var_7 = &rdi->unnamed_field_at_offset_0.unnamed_field_19;
            if (var_0 == (generic64_t) &rsi->unnamed_field_at_offset_0.unnamed_field_19) {
                loop_state_var = 0;
            } else {
                var_2 = (generic64_t) &rsi->unnamed_field_at_offset_0.unnamed_field_19 - var_0;
                var_1 = var_3 - var_0;
                if (!(*(generic8_t *) (var_3 + ~var_0) == '\n')) {
                    var_5 = var_0 + 1;
                    continue;
                }
                generic64_t var_9;
                var_9 = ((function_type_rawfunction_16444365756448433706 *) rdx->unnamed_field_at_offset_72)(var_2, ((generic64_t) &rdi->unnamed_field_at_offset_0.unnamed_field_19), ((generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19));
                var_4 = var_2;
                if (var_2 > var_9) {
                    loop_state_var = 1;
                    break;
                }
                var_6 = var_0;
                var_7 = var_1;
                loop_state_var = 0;
            }
            break;
        }
        switch (loop_state_var) {
            case 0:
            {
                break;
            } break;
            case 1:
            {
                return (artificial_struct_returned_by_rawfunction_2932303738529212957){ (struct_12231053618952106340 *) var_4, stack.unnamed_field_at_offset_0}
                ;
            } break;
        }
    }
    generic64_t var_10;
    var_10 = var_6;
    generic64_t var_11;
    var_11 = memcpy((struct_12231053618952106340 *) var_10, (struct_12231053618952106340 *) var_7, *(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 9));
    *(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 9) = *(generic64_t *) ((generic64_t) &rdx->unnamed_field_at_offset_31.unnamed_field_7 + 9) + var_10;
    var_4 = &rsi->unnamed_field_at_offset_0.unnamed_field_19;
    return (artificial_struct_returned_by_rawfunction_2932303738529212957){ (struct_12231053618952106340 *) var_4, stack.unnamed_field_at_offset_0}
    ;
}

size_t fwrite_unlocked(typedef_13525260650504612934 src, size_t size, size_t nmemb, typedef_16703312808783147606 f) {
    struct_13250409714846775001 stack;
    struct_12231053618952106340 *var_0;
    generic8_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    var_3 = init_r8();
    generic64_t var_4;
    var_4 = (generic64_t) nmemb * (generic64_t) size;
    *(uint32_t **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = &((FILE *) f)->flags;
    stack.unnamed_field_at_offset_0 = var_3;
    generic8_t var_5;
    var_5 = (generic32_t) ((FILE *) f)->lock > 4294967295;
    var_1 = true;
    if (var_5) {
        int32_t var_6;
        var_6 = prefix___lockfile((FILE *) f);
        var_1 = ((generic64_t) var_6 & 0xFFFFFFFF) == 0;
    }
    generic8_t var_7;
    var_7 = var_1;
    stack.unnamed_field_at_offset_0 = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11232;
    artificial_struct_returned_by_rawfunction_2932303738529212957 var_8 = prefix___fwritex((struct_12231053618952106340 *) f, (struct_12231053618952106340 *) f, (struct_12231053618952106340 *) var_4, (struct_12231053618952106340 *) src, var_3);
    var_0 = var_8.field_0;
    if (!(var_7)) {
        stack.unnamed_field_at_offset_0 = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11248;
        prefix___unlockfile((FILE *) f);
    }
    var_2 = nmemb;
    if (!(var_4 == (generic64_t) &var_0->unnamed_field_at_offset_0.unnamed_field_19)) {
        var_2 = (generic64_t) &var_0->unnamed_field_at_offset_0.unnamed_field_19 / (generic64_t) size;
    }
    return (size_t) var_2;
}

generic64_t memcpy(struct_12231053618952106340 *rdx, struct_12231053618952106340 *rsi, generic64_t rdi) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic64_t var_13;
    generic64_t var_14;
    generic64_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    var_19 = revng_init_local_sp();
    generic32_t var_20;
    var_20 = init_state_0x82fc();
    if (!((generic64_t) &rdx->unnamed_field_at_offset_0.unnamed_field_19 < 8 | (rdi & 0x7) == 0)) {
        var_3 = (generic64_t) var_20;
        var_2 = var_3 + rdi;
        var_16 = 0;
        while (true) {
            generic64_t var_21;
            var_21 = var_16;
            generic64_t var_22;
            var_22 = var_21 * var_3;
            generic64_t var_23;
            var_23 = var_2 + var_22;
            *(generic8_t *) (var_22 + rdi) = *(generic8_t *) &rsi->unnamed_field_at_offset_0.unnamed_field_18;
            var_11 = var_3;
            var_12 = &rsi->unnamed_field_at_offset_0.unnamed_field_19;
            var_13 = &rdx->unnamed_field_at_offset_0.unnamed_field_19;
            var_14 = var_23;
            var_16 = var_21 + 1;
            if (!((var_23 & 0x7) == 0)) {
                continue;
            }
            break;
        }
    }
    var_11 = (generic64_t) var_20;
    var_12 = &rsi->unnamed_field_at_offset_0.unnamed_field_19;
    var_13 = &rdx->unnamed_field_at_offset_0.unnamed_field_19;
    var_14 = rdi;
    var_8 = var_11;
    var_7 = var_12;
    var_6 = var_13;
    var_10 = var_14;
    var_1 = var_6 >> 3;
    generic64_t var_24;
    var_24 = var_8 * var_1 << 3;
    var_0 = var_7 + var_24;
    var_5 = var_8 << 3;
    var_4 = var_10 + var_24;
    var_15 = 0;
    while (true) {
        var_9 = var_15;
        if (var_1 == var_9) {
            break;
        }
        generic64_t var_25;
        var_25 = var_5 * var_9;
        *(generic64_t *) (var_10 + var_25) = *(generic64_t *) (var_7 + var_25);
        var_15 = var_9 + 1;
        continue;
    }
    generic64_t var_26;
    var_26 = var_6 & 0x7;
    var_17 = 0;
    var_18 = var_26;
    if (!(var_26 == 0)) {
        while (true) {
            generic64_t var_27;
            var_27 = var_17;
            generic64_t var_28;
            var_28 = var_8 * var_27;
            *(generic8_t *) (var_4 + var_28) = *(generic8_t *) (var_0 + var_28);
            generic64_t var_29;
            var_29 = var_18 + 4294967295 & 0xFFFFFFFF;
            var_17 = var_27 + 1;
            var_18 = var_29;
            if (!(var_29 == 0)) {
                continue;
            }
            break;
        }
    }
    return rdi;
}

generic64_t prefix___set_thread_area(struct_9248848853126295176 *rdi) {
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic64_t var_24;
    var_24 = revng_init_local_sp();
    helper_syscall_wrapper(NULL, 2, 4098, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, 0 /* undef */, init_r8(), init_state_0x8370(), init_r9(), 158, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11342, rdi, init_rdx(), init_rcx(), init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
    return var_19;
}

void prefix___wait(typedef_15144741048591869047 *addr, typedef_15144741048591869047 *waiters, int32_t val, int32_t priv) {
    struct_7781548463566678579 stack;
    uint64_t loop_state_var;
    generic32_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic32_t var_3;
    generic64_t var_4;
    generic32_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic64_t var_9;
    generic64_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic32_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic32_t var_16;
    generic32_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic32_t var_21;
    typedef_15144741048591869047 var_22;
    generic32_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic32_t var_30;
    generic32_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic32_t var_34;
    generic64_t var_35;
    generic32_t var_36;
    generic64_t var_37;
    generic64_t var_38;
    generic64_t var_39;
    generic64_t var_40;
    generic64_t var_41;
    generic32_t var_42;
    generic32_t var_43;
    generic32_t var_44;
    generic32_t var_45;
    generic64_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic64_t var_51;
    generic32_t var_52;
    generic32_t var_53;
    generic32_t var_54;
    generic32_t var_55;
    generic64_t var_56;
    generic32_t var_57;
    generic64_t var_58;
    generic64_t var_59;
    generic64_t var_60;
    generic64_t var_61;
    generic32_t var_62;
    generic32_t var_63;
    generic32_t var_64;
    generic32_t var_65;
    generic32_t var_66;
    generic64_t var_67;
    generic64_t var_68;
    generic32_t var_69;
    generic64_t var_70;
    generic32_t var_71;
    generic32_t var_72;
    generic32_t var_73;
    generic32_t var_74;
    generic32_t var_75;
    generic32_t var_76;
    generic32_t var_77;
    generic32_t var_78;
    generic8_t var_79;
    generic32_t var_80;
    generic64_t var_81;
    generic32_t var_82;
    generic64_t var_83;
    generic64_t var_84;
    generic64_t var_85;
    generic64_t var_86;
    generic64_t var_87;
    generic32_t var_88;
    generic32_t var_89;
    generic32_t var_90;
    generic64_t var_91;
    generic64_t var_92;
    generic32_t var_93;
    generic64_t var_94;
    generic32_t var_95;
    generic32_t var_96;
    generic32_t var_97;
    generic32_t var_98;
    generic32_t var_99;
    generic32_t var_100;
    generic32_t var_101;
    generic32_t var_102;
    generic8_t var_103;
    generic32_t var_104;
    generic64_t var_105;
    generic32_t var_106;
    generic64_t var_107;
    generic64_t var_108;
    generic64_t var_109;
    generic64_t var_110;
    generic64_t var_111;
    generic32_t var_112;
    generic32_t var_113;
    generic32_t var_114;
    generic64_t var_115;
    generic64_t var_116;
    generic32_t var_117;
    generic64_t var_118;
    generic32_t var_119;
    generic32_t var_120;
    generic32_t var_121;
    generic32_t var_122;
    generic32_t var_123;
    generic32_t var_124;
    generic32_t var_125;
    generic32_t var_126;
    generic8_t var_127;
    generic32_t var_128;
    generic64_t var_129;
    generic32_t var_130;
    generic64_t var_131;
    generic64_t var_132;
    generic64_t var_133;
    generic64_t var_134;
    generic64_t var_135;
    generic32_t var_136;
    generic64_t var_137;
    var_137 = (generic64_t) val;
    generic64_t var_138;
    var_138 = init_state_0x83f8();
    generic64_t var_139;
    var_139 = init_state_0x8340();
    generic64_t var_140;
    var_140 = init_state_0x83d0();
    generic32_t var_141;
    var_141 = init_state_0x83d8();
    generic64_t var_142;
    var_142 = init_state_0x8408();
    generic64_t var_143;
    var_143 = init_state_0x8328();
    generic16_t var_144;
    var_144 = init_pc_address_space();
    generic16_t var_145;
    var_145 = init_pc_type();
    generic32_t var_146;
    var_146 = init_pc_epoch();
    generic64_t var_147;
    var_147 = init_state_0x8358();
    generic64_t var_148;
    var_148 = init_state_0x8310();
    generic32_t var_149;
    var_149 = init_state_0x8334();
    generic32_t var_150;
    var_150 = init_state_0x834c();
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = 202;
    *(generic64_t *) &stack.unnamed_field_at_offset_0 = 202;
    generic64_t var_151;
    var_151 = (generic32_t) priv == 0 ? 0 : 128;
    generic8_t var_152;
    var_152 = (generic64_t) waiters == 0;
    typedef_15144741048591869047 *var_153;
    var_153 = waiters;
    typedef_15144741048591869047 *var_154;
    var_154 = addr;
    var_34 = init_state_0x9010();
    var_35 = init_state_0x9018();
    var_36 = init_state_0x83a8();
    var_37 = init_state_0x8370();
    var_38 = 101;
    var_39 = init_state_0x8388();
    var_40 = init_state_0x83a0();
    var_41 = init_state_0x82d8();
    var_42 = init_state_0x8300();
    var_43 = init_state_0x8248();
    var_44 = init_state_0x9080();
    while (true) {
        var_8 = var_34;
        var_19 = var_35;
        var_30 = var_36;
        var_26 = var_37;
        var_27 = var_39;
        var_25 = var_40;
        var_32 = var_41;
        var_31 = var_42;
        var_7 = var_43;
        var_6 = var_44;
        var_10 = var_38 + 4294967295 & 0xFFFFFFFF;
        if (var_10 == 0) {
            if (!(var_152)) {
                loop_state_var = 0;
                break;
            }
            loop_state_var = 1;
            break;
        }
        if (!(var_152)) {
            if (!((generic32_t) *var_153 == 0)) {
                loop_state_var = 0;
                break;
            }
        }
        var_22 = *var_154;
        if (!((generic32_t) var_22 == (generic32_t) val)) {
            loop_state_var = 2;
            break;
        }
        helper_pause_wrapper(NULL, 2, addr, var_138, var_139, var_6, var_140, var_7, var_25, var_27, var_30, var_141, var_19, var_8, var_142, var_143, var_137, 202, waiters, var_26, init_r9(), var_10, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11383, waiters, (generic64_t) var_22, var_151, var_32, var_31, var_147, var_148, var_149, var_150, &var_113, &var_114, &var_115, &var_116, &var_117, &var_118, &var_119, &var_120, &var_121, &var_122, &var_123, &var_124, &var_125, &var_126, &var_127, &var_128, &var_129, &var_130, &var_131, &var_132, &var_133, &var_134, &var_135, &var_136);
        var_14 = var_134;
        if (var_146 == 0 & var_144 == 0 & var_145 == 4 & var_14 == (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11385) {
            var_34 = var_119;
            var_35 = var_118;
            var_36 = var_117;
            var_37 = var_131;
            var_38 = var_132;
            var_39 = var_116;
            var_40 = var_115;
            var_41 = var_135;
            var_42 = var_136;
            var_43 = var_114;
            var_44 = var_113;
            continue;
        }
        artificial_struct_returned_by_build_PlainMetaAddress var_155 = build_PlainMetaAddress(0, 0, 0, 0);
        artificial_struct_returned_by_build_PlainMetaAddress var_156 = build_PlainMetaAddress(var_146, var_144, var_145, var_14);
        __builtin_unreachable();
    }
    switch (loop_state_var) {
        case 2:
        {
            return;
        } break;
        case 0:
        case 1:
        {
            switch (loop_state_var) {
                case 0:
                {
                    helper_lock();
                    *var_153 = (generic32_t) *var_153 + 1;
                    helper_unlock();
                } break;
                case 1:
                {
                    var_9 = (generic64_t) val;
                    var_47 = var_30;
                    var_48 = var_26;
                    var_45 = var_8;
                    var_46 = var_19;
                    var_49 = var_27;
                    var_50 = var_25;
                    var_51 = var_32;
                    var_52 = var_31;
                    var_53 = var_7;
                    var_54 = var_6;
                    while (true) {
                        var_21 = var_45;
                        var_20 = var_46;
                        var_13 = var_47;
                        var_12 = var_48;
                        var_11 = var_49;
                        var_33 = var_50;
                        var_1 = var_51;
                        var_5 = var_52;
                        var_16 = var_53;
                        var_15 = var_54;
                        if (!((generic32_t) *var_154 == (generic32_t) val)) {
                            break;
                        }
                        helper_syscall_wrapper(NULL, 2, addr, var_138, var_139, var_15, var_140, var_16, var_33, var_11, var_13, var_141, var_20, var_21, var_142, var_143, var_137, 202, waiters, var_12, var_151, 202, 0, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11437, var_151, var_9, var_151, var_1, var_5, var_147, var_148, var_149, var_150, &var_89, &var_90, &var_91, &var_92, &var_93, &var_94, &var_95, &var_96, &var_97, &var_98, &var_99, &var_100, &var_101, &var_102, &var_103, &var_104, &var_105, &var_106, &var_107, &var_108, &var_109, &var_110, &var_111, &var_112);
                        var_0 = var_89;
                        var_18 = var_90;
                        var_29 = var_91;
                        var_28 = var_92;
                        var_17 = var_93;
                        var_4 = var_94;
                        var_3 = var_95;
                        var_2 = var_107;
                        var_24 = var_111;
                        var_23 = var_112;
                        var_55 = var_3;
                        var_56 = var_4;
                        var_57 = var_17;
                        var_58 = var_2;
                        var_59 = var_28;
                        var_60 = var_29;
                        var_61 = var_24;
                        var_62 = var_23;
                        var_63 = var_18;
                        var_64 = var_0;
                        if (var_108 == -38) {
                            helper_syscall_wrapper(NULL, 2, addr, var_138, var_139, var_0, var_140, var_18, var_29, var_28, var_17, var_141, var_4, var_3, var_142, var_143, var_137, 202, waiters, var_2, var_151, 202, 0, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11450, 0, var_9, var_151, var_24, var_23, var_147, var_148, var_149, var_150, &var_65, &var_66, &var_67, &var_68, &var_69, &var_70, &var_71, &var_72, &var_73, &var_74, &var_75, &var_76, &var_77, &var_78, &var_79, &var_80, &var_81, &var_82, &var_83, &var_84, &var_85, &var_86, &var_87, &var_88);
                            var_55 = var_71;
                            var_56 = var_70;
                            var_57 = var_69;
                            var_58 = var_83;
                            var_59 = var_68;
                            var_60 = var_67;
                            var_61 = var_87;
                            var_62 = var_88;
                            var_63 = var_66;
                            var_64 = var_65;
                        }
                        var_47 = var_57;
                        var_48 = var_58;
                        var_45 = var_55;
                        var_46 = var_56;
                        var_49 = var_59;
                        var_50 = var_60;
                        var_51 = var_61;
                        var_52 = var_62;
                        var_53 = var_63;
                        var_54 = var_64;
                        continue;
                    }
                    if (!(var_152)) {
                        helper_lock();
                        *var_153 = (generic32_t) *var_153 - 1;
                        helper_unlock();
                    }
                } break;
            }
        } break;
    }
}

int64_t prefix___syscall_ret(uint64_t r) {
    struct_2006749818783933918 stack;
    if (!((generic64_t) r > 18446744073709547520)) {
        return (int64_t) r;
    }
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_16 = r;
    int32_t *var_0;
    var_0 = prefix___errno_location();
    *var_0 = 0 - (generic32_t) stack.unnamed_field_at_offset_0.unnamed_field_at_offset_16;
    return (int64_t) 18446744073709551615;
}

size_t wcrtomb(typedef_15587737597382482130 s, wchar_t wc, typedef_7664785938121735837 st) {
    struct_17101768518529234719 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    var_2 = (generic64_t) wc;
    var_1 = 1;
    if (!((generic64_t) s == 0)) {
        if ((var_2 & 0xFFFFFF80) == 0) {
            *(int8_t *) s = (generic8_t) wc;
            var_1 = 1;
        } else {
            stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rcx();
            if (*(generic64_t *) *(generic64_t *) (*(generic64_t *) (init_state_0x8370()) + 256) == 0) {
                if ((var_2 + 4294910080 & 0xFFFFFF80) == 0) {
                    *(int8_t *) s = (generic8_t) wc;
                    var_1 = 1;
                    return (size_t) var_1;
                }
            }
            var_0 = var_2 & 0xFFFFF800;
            if (var_0 == 0) {
                *(generic8_t *) ((generic64_t) s + 1) = (generic8_t) wc & 0x3F | 0x80;
                *(int8_t *) s = (generic8_t) (var_2 >> 6) | 0xC0;
                var_1 = 2;
                return (size_t) var_1;
            }
            if (!((var_2 + 4294909952 & 0xFFFFE000) != 0 & var_0 > 55295)) {
                *(int8_t *) s = (generic8_t) (var_2 >> 12) | 0xE0;
                *(generic8_t *) ((generic64_t) s + 2) = (generic8_t) wc & 0x3F | 0x80;
                *(generic8_t *) ((generic64_t) s + 1) = (generic8_t) (var_2 >> 6) & 0x3F | 0x80;
                var_1 = 3;
                return (size_t) var_1;
            }
            if ((var_2 + 4294901760 & 0xFFF00000) == 0) {
                *(int8_t *) s = (generic8_t) (var_2 >> 18) | 0xF0;
                *(generic8_t *) ((generic64_t) s + 1) = (generic8_t) (var_2 >> 12) & 0x3F | 0x80;
                *(generic8_t *) ((generic64_t) s + 3) = (generic8_t) wc & 0x3F | 0x80;
                *(generic8_t *) ((generic64_t) s + 2) = (generic8_t) (var_2 >> 6) & 0x3F | 0x80;
                var_1 = 4;
                return (size_t) var_1;
            }
            int32_t *var_3;
            var_3 = prefix___errno_location();
            *var_3 = 84;
            var_1 = 18446744073709551615;
        }
    }
    return (size_t) var_1;
}

size_t prefix___stdio_write(FILE *f, uint8_t const *buf, size_t len) {
    struct_10148431437478825657 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic32_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic32_t var_9;
    int64_t var_10;
    generic64_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic64_t var_18;
    generic32_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic32_t var_24;
    generic32_t var_25;
    generic32_t var_26;
    generic64_t var_27;
    generic32_t var_28;
    generic32_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic32_t var_32;
    generic64_t var_33;
    generic32_t var_34;
    generic32_t var_35;
    generic32_t var_36;
    generic32_t var_37;
    generic32_t var_38;
    generic32_t var_39;
    generic32_t var_40;
    generic32_t var_41;
    generic8_t var_42;
    generic32_t var_43;
    generic64_t var_44;
    generic32_t var_45;
    generic64_t var_46;
    generic64_t var_47;
    generic64_t var_48;
    generic64_t var_49;
    generic64_t var_50;
    generic32_t var_51;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_64 = 20;
    uint8_t *var_52;
    var_52 = f->wbase;
    uint8_t *var_53;
    var_53 = f->wpos;
    *(uint8_t const **) ((generic64_t) &stack.unnamed_field_at_offset_0 + 16) = buf;
    *(uint8_t **) &stack.unnamed_field_at_offset_0 = var_52;
    generic64_t var_54;
    var_54 = (generic64_t) var_53 - (generic64_t) var_52;
    *(size_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 24) = len;
    *(generic64_t *) ((generic64_t) &stack.unnamed_field_at_offset_0 + 8) = var_54;
    var_14 = &stack.unnamed_field_at_offset_0.unnamed_field_at_offset_0;
    var_15 = init_state_0x9010();
    var_16 = init_state_0x8370();
    var_17 = init_state_0x9018();
    var_18 = 2;
    var_19 = init_state_0x83a8();
    var_20 = var_54 + (generic64_t) len;
    var_21 = init_state_0x8388();
    var_22 = init_state_0x83a0();
    var_23 = init_state_0x82d8();
    var_24 = init_state_0x8300();
    var_26 = init_state_0x9080();
    var_25 = init_state_0x8248();
    while (true) {
        var_0 = var_14;
        var_7 = var_18;
        var_11 = var_20;
        helper_syscall_wrapper(NULL, 2, (generic64_t) f->fd, init_state_0x83f8(), init_state_0x8340(), var_26, init_state_0x83d0(), var_25, var_22, var_21, var_19, init_state_0x83d8(), var_17, var_15, init_state_0x8408(), init_state_0x8328(), f, var_0, init_r8(), var_16, init_r9(), 20, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11871, var_0, var_7 << 32 >> 32, init_rcx(), var_23, var_24, init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47, &var_48, &var_49, &var_50, &var_51);
        var_13 = var_28;
        var_6 = var_29;
        var_5 = var_30;
        var_4 = var_31;
        var_9 = var_32;
        var_1 = var_33;
        var_12 = var_34;
        var_8 = var_46;
        var_3 = var_50;
        var_2 = var_51;
        *(generic64_t *) (var_44 - 8) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11881;
        var_10 = prefix___syscall_ret((uint64_t) var_47);
        if (var_11 == (generic64_t) var_10) {
            uint8_t *var_55;
            var_55 = f->buf;
            generic64_t var_56;
            var_56 = (generic64_t) f->buf_size + (generic64_t) var_55;
            f->wbase = var_55;
            f->wend = var_56;
            f->wpos = var_55;
            var_27 = len;
        } else {
            if ((generic64_t) var_10 > 18446744073709551615) {
                generic64_t var_57;
                var_57 = *(generic64_t *) (var_0 + 8);
                generic8_t var_58;
                var_58 = (generic64_t) var_10 > var_57;
                generic64_t var_59;
                var_59 = var_58 ? var_0 + 16 : var_0;
                generic64_t var_60;
                var_60 = (generic64_t) var_10 - (var_58 ? var_57 : 0);
                generic64_t var_61;
                var_61 = var_59;
                *(generic64_t *) var_61 = *(generic64_t *) var_61 + var_60;
                generic64_t var_62;
                var_62 = var_59 + 8;
                *(generic64_t *) var_62 = *(generic64_t *) var_62 - var_60;
                var_14 = var_59;
                var_15 = var_12;
                var_16 = var_8;
                var_17 = var_1;
                var_18 = var_58 ? var_7 + 4294967295 & 0xFFFFFFFF : var_7;
                var_19 = var_9;
                var_20 = var_11 - (generic64_t) var_10;
                var_21 = var_4;
                var_22 = var_5;
                var_23 = var_3;
                var_24 = var_2;
                var_26 = var_13;
                var_25 = var_6;
                continue;
            }
            f->flags = (generic32_t) f->flags | 0x20;
            f->wend = 0;
            f->wbase = 0;
            f->wpos = 0;
            var_27 = 0;
            if (!((var_7 + 4294967294 & 0xFFFFFFFF) == 0)) {
                var_27 = (generic64_t) len - *(generic64_t *) (var_0 + 8);
            }
        }
        break;
    }
    return (size_t) var_27;
}

int32_t prefix___towrite(FILE *f) {
    generic64_t var_0;
    var_0 = revng_init_local_sp();
    int8_t var_1;
    var_1 = f->mode;
    f->mode = (generic8_t) var_1 - '\001' | (generic8_t) var_1;
    uint32_t var_2;
    var_2 = f->flags;
    if (!(((generic32_t) var_2 & 0x8) == 0)) {
        f->flags = (generic32_t) var_2 | 0x20;
        return (int32_t) 4294967295;
    }
    uint8_t *var_3;
    var_3 = f->buf;
    f->rend = 0;
    f->rpos = 0;
    f->wbase = var_3;
    f->wpos = var_3;
    f->wend = (generic64_t) var_3 + (generic64_t) f->buf_size;
    return (int32_t) 0;
}

void prefix___towrite_needs_stdio_exit(void) {
    struct_14201636752256544766 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic32_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic32_t var_16;
    generic32_t var_17;
    generic32_t var_18;
    generic32_t var_19;
    generic32_t var_20;
    generic32_t var_21;
    generic32_t var_22;
    generic8_t var_23;
    generic32_t var_24;
    generic64_t var_25;
    generic32_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic32_t var_32;
    generic64_t var_33;
    var_33 = init_r8();
    generic64_t var_34;
    var_34 = init_r9();
    generic64_t var_35;
    var_35 = init_rcx();
    FILE **var_36;
    var_36 = prefix___ofl_lock();
    var_8 = var_36;
    while (true) {
        var_6 = *(generic64_t *) var_8;
        if (var_6 == 0) {
            break;
        }
        close_file((FILE *) var_6);
        var_8 = var_6 + 112;
        continue;
    }
    close_file((FILE *) prefix_segment_0x406fd0_Generic64_2224.dummy_file);
    var_2 = prefix_segment_0x406fd0_Generic64_2224.prefix___stdout_used;
    var_7 = stack.unnamed_field_at_offset_0;
    if (!(var_2 == 0)) {
        if (*(generic32_t *) (var_2 + 140) > 4294967295) {
            int32_t var_37;
            var_37 = prefix___lockfile((FILE *) var_2);
        }
        if (*(generic64_t *) (var_2 + 40) > *(generic64_t *) (var_2 + 56)) {
            artificial_struct_returned_by_rawfunction_10449372223158023403 var_38 = ((function_type_rawfunction_10449372223158023403 *) *(generic64_t *) (var_2 + 72))(((pointer_or_number64_t) var_35), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) var_2), ((pointer_or_number64_t) var_33), ((pointer_or_number64_t) var_34));
        }
        var_3 = *(generic64_t *) (var_2 + 8);
        var_5 = *(generic64_t *) (var_2 + 16);
        if (var_3 < var_5) {
            var_4 = *(generic64_t *) (var_2 + 80);
            if (!(var_4 == (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10879)) {
                artificial_struct_returned_by_build_PlainMetaAddress var_39 = build_PlainMetaAddress(0, 0, 0, 0);
                artificial_struct_returned_by_build_PlainMetaAddress var_40 = build_PlainMetaAddress(0, 0, 4, var_4);
                __builtin_unreachable();
            }
            helper_syscall_wrapper(NULL, 2, (generic64_t) *(generic32_t *) (var_2 + 120), init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), var_7, stack.unnamed_field_at_offset_0, var_33, init_state_0x8370(), var_34, 8, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10891, var_3 - var_5, 1, var_35, init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32);
            var_1 = var_25;
            var_0 = var_28;
            if (var_0 > 18446744073709547520) {
                generic64_t var_41;
                var_41 = var_1 - 16;
                *(generic64_t *) var_41 = var_0;
                *(generic64_t *) (var_1 - 32) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11499;
                int32_t *var_42;
                var_42 = prefix___errno_location();
                *var_42 = 0 - (generic32_t) *(generic64_t *) var_41;
            }
        }
    }
    return;
}

void close_file(FILE *f) {
    struct_14733361738493378089 stack;
    uint8_t *var_0;
    generic32_t var_1;
    generic16_t var_2;
    generic16_t var_3;
    function_type_cabifunction_8533997469962103360 *var_4;
    uint8_t *var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic16_t var_8;
    generic16_t var_9;
    generic32_t var_10;
    generic16_t var_11;
    generic16_t var_12;
    generic32_t var_13;
    generic32_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic64_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic32_t var_20;
    generic32_t var_21;
    generic32_t var_22;
    generic32_t var_23;
    generic32_t var_24;
    generic32_t var_25;
    generic32_t var_26;
    generic32_t var_27;
    generic8_t var_28;
    generic32_t var_29;
    generic64_t var_30;
    generic32_t var_31;
    generic64_t var_32;
    generic64_t var_33;
    generic64_t var_34;
    generic64_t var_35;
    generic64_t var_36;
    generic32_t var_37;
    generic64_t var_38;
    var_38 = init_r8();
    generic64_t var_39;
    var_39 = init_r9();
    generic64_t var_40;
    var_40 = init_rcx();
    if (!((generic64_t) &f->flags == 0)) {
        var_8 = init_pc_address_space();
        var_9 = init_pc_type();
        var_10 = init_pc_epoch();
        if ((generic32_t) f->lock > 4294967295) {
            int32_t var_41;
            var_41 = prefix___lockfile(f);
            var_8 = 0;
            var_9 = 4;
            var_10 = 0;
        }
        var_11 = var_8;
        var_12 = var_9;
        var_13 = var_10;
        if ((generic64_t) f->wpos > (generic64_t) f->wbase) {
            artificial_struct_returned_by_rawfunction_10449372223158023403 var_42 = ((function_type_rawfunction_10449372223158023403 *) f->write)(((pointer_or_number64_t) var_40), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) &f->flags), ((pointer_or_number64_t) var_38), ((pointer_or_number64_t) var_39));
            var_11 = 0;
            var_12 = 4;
            var_13 = 0;
        }
        var_3 = var_11;
        var_2 = var_12;
        var_1 = var_13;
        var_0 = f->rpos;
        var_5 = f->rend;
        if ((generic64_t) var_0 < (generic64_t) var_5) {
            var_4 = f->seek;
            if (!(var_1 == 0 & var_3 == 0 & var_2 == 4 & (generic64_t) var_4 == (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10879)) {
                artificial_struct_returned_by_build_PlainMetaAddress var_43 = build_PlainMetaAddress(0, 0, 0, 0);
                artificial_struct_returned_by_build_PlainMetaAddress var_44 = build_PlainMetaAddress(var_1, var_3, var_2, var_4);
                __builtin_unreachable();
            }
            helper_syscall_wrapper(NULL, 2, (generic64_t) f->fd, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, stack.unnamed_field_at_offset_0, var_38, init_state_0x8370(), var_39, 8, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10891, (generic64_t) var_0 - (generic64_t) var_5, 1, var_40, init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37);
            var_7 = var_30;
            var_6 = var_33;
            if (var_6 > 18446744073709547520) {
                generic64_t var_45;
                var_45 = var_7 - 16;
                *(generic64_t *) var_45 = var_6;
                *(generic64_t *) (var_7 - 32) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11499;
                int32_t *var_46;
                var_46 = prefix___errno_location();
                *var_46 = 0 - (generic32_t) *(generic64_t *) var_45;
            }
        }
    }
    return;
}

artificial_struct_returned_by_rawfunction_12905954779405914810 prefix_function_0x403f80_Code_x86_64(generic64_t rdx, generic64_t rsi, struct_7148008572864709225 *rdi) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic32_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic32_t var_7;
    generic64_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic32_t var_14;
    generic32_t var_15;
    generic32_t var_16;
    generic8_t var_17;
    generic32_t var_18;
    generic64_t var_19;
    generic32_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic64_t var_23;
    generic64_t var_24;
    generic64_t var_25;
    generic32_t var_26;
    generic64_t var_27;
    var_27 = revng_init_local_sp();
    generic16_t var_28;
    var_28 = init_pc_address_space();
    generic16_t var_29;
    var_29 = init_pc_type();
    generic64_t var_30;
    var_30 = init_rax();
    generic32_t var_31;
    var_31 = init_pc_epoch();
    if (var_31 == 0 & var_28 == 0 & var_29 == 4 & var_30 == (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10879) {
        generic64_t var_32;
        var_32 = (generic64_t) rdi->unnamed_field_at_offset_120;
        var_0 = rdx << 32 >> 32;
        helper_syscall_wrapper(NULL, 2, var_32, init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), 0 /* undef */, 0 /* undef */, init_r8(), init_state_0x8370(), init_r9(), 8, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10891, rsi, var_0, init_rcx(), init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25, &var_26);
        var_1 = var_19;
        var_2 = var_22;
        if (!(var_2 > 18446744073709547520)) {
            return (artificial_struct_returned_by_rawfunction_12905954779405914810){ (struct_12231053618952106340 *) var_2, var_0}
            ;
        }
        generic64_t var_33;
        var_33 = var_1 - 16;
        *(generic64_t *) var_33 = var_2;
        *(generic64_t *) (var_1 - 32) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11499;
        int32_t *var_34;
        var_34 = prefix___errno_location();
        *var_34 = 0 - (generic32_t) *(generic64_t *) var_33;
        return (artificial_struct_returned_by_rawfunction_12905954779405914810){ (struct_12231053618952106340 *) 18446744073709551615, var_0}
        ;
    }
    artificial_struct_returned_by_build_PlainMetaAddress var_35 = build_PlainMetaAddress(0, 0, 0, 0);
    artificial_struct_returned_by_build_PlainMetaAddress var_36 = build_PlainMetaAddress(var_31, var_28, var_29, var_30);
    __builtin_unreachable();
}

void prefix___stdio_exit(void) {
    struct_3561783837167950379 stack;
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic64_t var_4;
    generic64_t var_5;
    generic64_t var_6;
    generic64_t var_7;
    generic64_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic64_t var_11;
    generic64_t var_12;
    generic32_t var_13;
    generic64_t var_14;
    generic32_t var_15;
    generic32_t var_16;
    generic32_t var_17;
    generic32_t var_18;
    generic32_t var_19;
    generic32_t var_20;
    generic32_t var_21;
    generic32_t var_22;
    generic8_t var_23;
    generic32_t var_24;
    generic64_t var_25;
    generic32_t var_26;
    generic64_t var_27;
    generic64_t var_28;
    generic64_t var_29;
    generic64_t var_30;
    generic64_t var_31;
    generic32_t var_32;
    generic64_t var_33;
    var_33 = init_r8();
    generic64_t var_34;
    var_34 = init_r9();
    generic64_t var_35;
    var_35 = init_rcx();
    FILE **var_36;
    var_36 = prefix___ofl_lock();
    var_8 = var_36;
    while (true) {
        var_0 = *(generic64_t *) var_8;
        if (var_0 == 0) {
            break;
        }
        close_file((FILE *) var_0);
        var_8 = var_0 + 112;
        continue;
    }
    close_file((FILE *) prefix_segment_0x406fd0_Generic64_2224.dummy_file);
    var_3 = prefix_segment_0x406fd0_Generic64_2224.prefix___stdout_used;
    var_2 = stack.unnamed_field_at_offset_0;
    if (!(var_3 == 0)) {
        if (*(generic32_t *) (var_3 + 140) > 4294967295) {
            int32_t var_37;
            var_37 = prefix___lockfile((FILE *) var_3);
        }
        if (*(generic64_t *) (var_3 + 40) > *(generic64_t *) (var_3 + 56)) {
            artificial_struct_returned_by_rawfunction_10449372223158023403 var_38 = ((function_type_rawfunction_10449372223158023403 *) *(generic64_t *) (var_3 + 72))(((pointer_or_number64_t) var_35), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) 0), ((pointer_or_number64_t) var_3), ((pointer_or_number64_t) var_33), ((pointer_or_number64_t) var_34));
        }
        var_7 = *(generic64_t *) (var_3 + 8);
        var_1 = *(generic64_t *) (var_3 + 16);
        if (var_7 < var_1) {
            var_6 = *(generic64_t *) (var_3 + 80);
            if (!(var_6 == (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10879)) {
                artificial_struct_returned_by_build_PlainMetaAddress var_39 = build_PlainMetaAddress(0, 0, 0, 0);
                artificial_struct_returned_by_build_PlainMetaAddress var_40 = build_PlainMetaAddress(0, 0, 4, var_6);
                __builtin_unreachable();
            }
            helper_syscall_wrapper(NULL, 2, (generic64_t) *(generic32_t *) (var_3 + 120), init_state_0x83f8(), init_state_0x8340(), init_state_0x9080(), init_state_0x83d0(), init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), init_state_0x83d8(), init_state_0x9018(), init_state_0x9010(), init_state_0x8408(), init_state_0x8328(), var_2, stack.unnamed_field_at_offset_0, var_33, init_state_0x8370(), var_34, 8, init_r10(), (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 10891, var_7 - var_1, 1, var_35, init_state_0x82d8(), init_state_0x8300(), init_state_0x8358(), init_state_0x8310(), init_state_0x8334(), init_state_0x834c(), &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32);
            var_5 = var_25;
            var_4 = var_28;
            if (var_4 > 18446744073709547520) {
                generic64_t var_41;
                var_41 = var_5 - 16;
                *(generic64_t *) var_41 = var_4;
                *(generic64_t *) (var_5 - 32) = (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 11499;
                int32_t *var_42;
                var_42 = prefix___errno_location();
                *var_42 = 0 - (generic32_t) *(generic64_t *) var_41;
            }
        }
    }
    return;
}

FILE **prefix___ofl_lock(void) {
    struct_6257774776077405083 stack;
    stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rax();
    prefix___lock((typedef_17925687983317902473 *) &prefix_segment_0x406fd0_Generic64_2224.ofl_lock);
    return (FILE **) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224 + 2040);
}

void prefix___ofl_unlock(void) {
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic32_t var_24;
    generic32_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic32_t var_28;
    generic64_t var_29;
    generic32_t var_30;
    generic32_t var_31;
    generic32_t var_32;
    generic32_t var_33;
    generic32_t var_34;
    generic32_t var_35;
    generic32_t var_36;
    generic32_t var_37;
    generic8_t var_38;
    generic32_t var_39;
    generic64_t var_40;
    generic32_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    var_48 = revng_init_local_sp();
    generic64_t var_49;
    var_49 = init_state_0x83f8();
    generic64_t var_50;
    var_50 = init_state_0x8340();
    generic64_t var_51;
    var_51 = init_state_0x83d0();
    generic32_t var_52;
    var_52 = init_state_0x83d8();
    generic64_t var_53;
    var_53 = init_state_0x8408();
    generic64_t var_54;
    var_54 = init_state_0x8328();
    generic64_t var_55;
    var_55 = init_r9();
    generic64_t var_56;
    var_56 = init_r10();
    generic64_t var_57;
    var_57 = init_rcx();
    generic64_t var_58;
    var_58 = init_state_0x8358();
    generic64_t var_59;
    var_59 = init_state_0x8310();
    generic32_t var_60;
    var_60 = init_state_0x8334();
    generic32_t var_61;
    var_61 = init_state_0x834c();
    *(generic32_t *) &prefix_segment_0x406fd0_Generic64_2224.ofl_lock = 0;
    helper_lock();
    helper_unlock();
    if ((!(*(generic32_t *) &prefix_segment_0x406fd0_Generic64_2224.ofl_lock == 0)) && (!(*(generic32_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.ofl_lock + 4) == 0))) {
        helper_syscall_wrapper(NULL, 2, (generic64_t) &prefix_segment_0x406fd0_Generic64_2224 + 2032, var_49, var_50, init_state_0x9080(), var_51, init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), var_52, init_state_0x9018(), init_state_0x9010(), var_53, var_54, 0 /* undef */, 0 /* undef */, 202, init_state_0x8370(), var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 12342, 129, 1, var_57, init_state_0x82d8(), init_state_0x8300(), var_58, var_59, var_60, var_61, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47);
        if (var_43 == -38) {
            helper_syscall_wrapper(NULL, 2, (generic64_t) &prefix_segment_0x406fd0_Generic64_2224 + 2032, var_49, var_50, var_24, var_51, var_25, var_26, var_27, var_28, var_52, var_29, var_30, var_53, var_54, 0 /* undef */, 0 /* undef */, 202, var_42, var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 12356, 1, 1, var_57, var_46, var_47, var_58, var_59, var_60, var_61, &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
        }
    }
    return;
}

void prefix___lock(typedef_17925687983317902473 *l) {
    struct_6711884588153516393 stack;
    generic64_t var_0;
    typedef_17925687983317902473 *var_1;
    if (!(*(generic32_t *) ((generic64_t) &prefix_segment_0x406fd0_Generic64_2224.prefix___libc + 12) == 0)) {
        stack.unnamed_field_at_offset_0.unnamed_field_at_offset_8 = init_rdx();
        var_1 = l;
        var_0 = (generic64_t) l + 4;
        while (true) {
            helper_lock();
            typedef_17925687983317902473 var_2;
            var_2 = *var_1;
            *var_1 = 1;
            helper_unlock();
            if ((generic32_t) var_2 == 0) {
                break;
            }
            prefix___wait((typedef_15144741048591869047 *) l, (typedef_15144741048591869047 *) var_0, (int32_t) 1, (int32_t) 1);
            continue;
        }
    }
    return;
}

void prefix___unlock(typedef_17925687983317902473 *l) {
    generic32_t var_0;
    generic32_t var_1;
    generic64_t var_2;
    generic64_t var_3;
    generic32_t var_4;
    generic64_t var_5;
    generic32_t var_6;
    generic32_t var_7;
    generic32_t var_8;
    generic32_t var_9;
    generic32_t var_10;
    generic32_t var_11;
    generic32_t var_12;
    generic32_t var_13;
    generic8_t var_14;
    generic32_t var_15;
    generic64_t var_16;
    generic32_t var_17;
    generic64_t var_18;
    generic64_t var_19;
    generic64_t var_20;
    generic64_t var_21;
    generic64_t var_22;
    generic32_t var_23;
    generic32_t var_24;
    generic32_t var_25;
    generic64_t var_26;
    generic64_t var_27;
    generic32_t var_28;
    generic64_t var_29;
    generic32_t var_30;
    generic32_t var_31;
    generic32_t var_32;
    generic32_t var_33;
    generic32_t var_34;
    generic32_t var_35;
    generic32_t var_36;
    generic32_t var_37;
    generic8_t var_38;
    generic32_t var_39;
    generic64_t var_40;
    generic32_t var_41;
    generic64_t var_42;
    generic64_t var_43;
    generic64_t var_44;
    generic64_t var_45;
    generic64_t var_46;
    generic32_t var_47;
    generic64_t var_48;
    var_48 = revng_init_local_sp();
    generic64_t var_49;
    var_49 = init_state_0x83f8();
    generic64_t var_50;
    var_50 = init_state_0x8340();
    generic64_t var_51;
    var_51 = init_state_0x83d0();
    generic32_t var_52;
    var_52 = init_state_0x83d8();
    generic64_t var_53;
    var_53 = init_state_0x8408();
    generic64_t var_54;
    var_54 = init_state_0x8328();
    generic64_t var_55;
    var_55 = init_r9();
    generic64_t var_56;
    var_56 = init_r10();
    generic64_t var_57;
    var_57 = init_rcx();
    generic64_t var_58;
    var_58 = init_state_0x8358();
    generic64_t var_59;
    var_59 = init_state_0x8310();
    generic32_t var_60;
    var_60 = init_state_0x8334();
    generic32_t var_61;
    var_61 = init_state_0x834c();
    typedef_17925687983317902473 *var_62;
    var_62 = l;
    *var_62 = 0;
    helper_lock();
    helper_unlock();
    if ((!((generic32_t) *var_62 == 0)) && (!(*(generic32_t *) ((generic64_t) l + 4) == 0))) {
        helper_syscall_wrapper(NULL, 2, l, var_49, var_50, init_state_0x9080(), var_51, init_state_0x8248(), init_state_0x83a0(), init_state_0x8388(), init_state_0x83a8(), var_52, init_state_0x9018(), init_state_0x9010(), var_53, var_54, 0 /* undef */, 0 /* undef */, 202, init_state_0x8370(), var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 12342, 129, 1, var_57, init_state_0x82d8(), init_state_0x8300(), var_58, var_59, var_60, var_61, &var_24, &var_25, &var_26, &var_27, &var_28, &var_29, &var_30, &var_31, &var_32, &var_33, &var_34, &var_35, &var_36, &var_37, &var_38, &var_39, &var_40, &var_41, &var_42, &var_43, &var_44, &var_45, &var_46, &var_47);
        if (var_43 == -38) {
            helper_syscall_wrapper(NULL, 2, l, var_49, var_50, var_24, var_51, var_25, var_26, var_27, var_28, var_52, var_29, var_30, var_53, var_54, 0 /* undef */, 0 /* undef */, 202, var_42, var_55, 202, var_56, (generic64_t) &prefix_segment_0x401000_Generic64_12441.unnamed_field_at_offset_0.unnamed_field_at_offset_0.unnamed_field_5.unnamed_field_at_offset_0.unnamed_field_19 + 12356, 1, 1, var_57, var_46, var_47, var_58, var_59, var_60, var_61, &var_0, &var_1, &var_2, &var_3, &var_4, &var_5, &var_6, &var_7, &var_8, &var_9, &var_10, &var_11, &var_12, &var_13, &var_14, &var_15, &var_16, &var_17, &var_18, &var_19, &var_20, &var_21, &var_22, &var_23);
        }
    }
    return;
}

void prefix___do_global_ctors_aux(void) {
    generic64_t var_0;
    generic64_t var_1;
    generic64_t var_2;
    var_2 = *(generic64_t *) &prefix_segment_0x406fd0_Generic64_2224;
    var_0 = 0;
    var_1 = var_2;
    if (!(var_2 == -1)) {
        while (true) {
            generic64_t var_3;
            var_3 = var_0;
            ((function_type_rawfunction_6145861420239787954 *) var_1)();
            generic64_t var_4;
            var_4 = *(generic64_t *) (var_3 * -8 + 4222920);
            var_0 = var_3 + 1;
            var_1 = var_4;
            if (!(var_4 == -1)) {
                continue;
            }
            break;
        }
    }
    return;
}

generic64_t prefix_function_0x404091_Code_x86_64(void) {
    struct_563220322443614516 stack;
    stack.unnamed_field_at_offset_0 = init_rax();
    prefix___do_global_dtors_aux();
    return stack.unnamed_field_at_offset_0;
}

